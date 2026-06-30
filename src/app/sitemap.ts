import { MetadataRoute } from 'next'

const BASE_URL = 'https://tours.lasergame-evolution.fr'

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/laser-game', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/lancer-de-hache', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/blind-test', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/modes-de-jeu', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/tarifs', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/anniversaire', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/entreprises', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/evenements', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.5, changeFrequency: 'weekly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
