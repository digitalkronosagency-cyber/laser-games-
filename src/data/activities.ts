export interface Activity {
  id: string
  number: string
  title: string
  shortDescription: string
  features: string[]
  priceFrom: string
  slug: string
  icon: string
}

export const activities: Activity[] = [
  {
    id: 'laser-game', number: '01', title: 'Laser Game',
    shortDescription: '3 labyrinthes immersifs multi-étages pour 4 à 30 joueurs. Groupes 100% privatisés.',
    features: ['3 labyrinthes multi-étages', '4 à 30 joueurs', 'Groupe 100% privatisé', 'Pistolets 100% laser', "Jusqu'à 6 équipes"],
    priceFrom: 'Sur devis', slug: '/laser-game', icon: '🎮',
  },
  {
    id: 'lancer-de-hache', number: '02', title: 'Lancer de Hache',
    shortDescription: 'Axe throwing indoor sécurisé. Adrénaline et précision pour débutants et experts.',
    features: ['Indoor sécurisé', 'Moniteur accompagnateur', 'Idéal débutants', 'Parfait EVG/EVJF', 'Sessions privatisées'],
    priceFrom: 'Sur devis', slug: '/lancer-de-hache', icon: '🪓',
  },
  {
    id: 'blind-test', number: '03', title: 'BlindTest',
    shortDescription: '1er BlindTest à reconnaissance vocale. 6000 titres, 60 playlists, salle privatisée.',
    features: ['Reconnaissance vocale', '6000 titres', '60 playlists', '5 niveaux', 'Salle privatisée', 'Bar & snacking'],
    priceFrom: 'Sur devis', slug: '/blind-test', icon: '🎵',
  },
]
