import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://clsbouira.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://clsbouira.vercel.app/terms',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://clsbouira.vercel.app/policies',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://clsbouira.vercel.app/opengraph-image.png',
      lastModified: '2025-11-02',
      changeFrequency: 'yearly',
      priority: 0.7,
      images: ['https://clsbouira.vercel.app/opengraph-image.png'],
    },
  ]
}
