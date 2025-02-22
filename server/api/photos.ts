import type { H3Event } from "h3";
import { defineEventHandler, createError } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  try {
    const page = Math.floor(Math.random() * 500) + 1;

    const response = await fetch(
      "https://api.pexels.com/v1/search?" +
        new URLSearchParams({
          query: "cat",
          per_page: "1",
          page: page.toString(),
          orientation: "landscape",
          size: "medium", // 默认请求中等尺寸
          locale: "zh-CN",
          min_width: "1000", // 最小宽度
          min_height: "800", // 最小高度
        }),
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY as string,
        },
      }
    );

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: `获取图片失败: ${response.statusText}`,
      });
    }

    const data = await response.json();

    if (!data.photos || data.photos.length === 0) {
      throw createError({
        statusCode: 404,
        message: "没有找到图片",
      });
    }

    // 预加载图片
    const photo = data.photos[0];
    await Promise.all([fetch(photo.src.medium), fetch(photo.src.large)]);

    return { photo };
  } catch (error) {
    console.error("API Error:", error);
    throw createError({
      statusCode: 500,
      message: "服务器错误，请稍后再试",
    });
  }
});
