# 今日猫猫 Daily Cat

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

一个简单的展示每日猫咪图片的网站，使用 Nuxt 3 开发。

## 技术栈

- [Nuxt 3](https://nuxt.com/) - Vue.js 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集
- [TailwindCSS](https://tailwindcss.com/) - CSS 框架
- [Pexels API](https://www.pexels.com/api/) - 图片服务

## 开发工具

本项目使用以下工具进行开发：

- [Cursor](https://cursor.sh/) - AI 辅助的代码编辑器
- [Claude 3.5 Sonnet](https://www.anthropic.com/claude) - AI 助手，用于代码生成和问题解决

## 功能特点

- 🐱 展示精选猫咪图片
- 🔄 一键刷新获取新图片
- 📱 响应式设计，支持移动端
- 🎨 平滑的加载过渡动画

## 快速开始

1. 克隆项目

   ```bash
   git clone https://github.com/yourusername/daily-cat.git
   cd daily-cat
   ```

2. 安装依赖

   ```bash
   npm install
   ```

3. 配置环境变量

   ```bash
   cp .env.example .env
   ```

   编辑 `.env` 文件，添加你的 Pexels API Key

   ```
   PEXELS_API_KEY=your_api_key_here
   ```

4. 启动开发服务器
   ```bash
   npm run dev
   ```

## 部署

本项目使用 [Vercel](https://vercel.com/) 进行部署。只需将代码推送到 GitHub，并在 Vercel 中导入项目即可。

记得在 Vercel 的项目设置中配置环境变量：

- `PEXELS_API_KEY`: 你的 Pexels API 密钥

## 项目结构

```
daily-cat/
├── pages/          # 页面文件
│   └── index.vue   # 主页面
├── server/         # 服务器端代码
│   └── api/
│       └── photos.ts # API 路由
├── public/         # 静态资源
├── .env            # 环境变量
├── .env.example    # 环境变量示例
├── nuxt.config.ts  # Nuxt 配置
└── README.md       # 项目文档
```

## 致谢

- [Pexels](https://www.pexels.com/) - 提供高质量的猫咪图片
- [Nuxt](https://nuxt.com/) - Vue.js 框架
- [TailwindCSS](https://tailwindcss.com/) - CSS 框架
