import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  const response = await fetch('https://api.pexels.com/v1/search?query=cat&per_page=9', {
    headers: {
      'Authorization': config.pexelsApiKey
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch photos')
  }

  const data = await response.json()
  return data
}) 