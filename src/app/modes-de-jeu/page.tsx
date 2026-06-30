import type { Metadata } from 'next'
import Link from 'next/link'
import { modesDeJeuMetadata } from '@/lib/seo'

export const metadata: Metadata = modesDeJeuMetadata

const modes = [
  {
    id: 'chacun-pour-soi',
    name: 'Chacun Pour Soi',
    icon: '🎯',
    players: '2–24 joueurs',
    duration: '20 min',
    description: 'Le mode classique : chaque joueur combat seul. Celui qui élimine le plus d’adversaires remporte la partie. Parfait pour les débutants.',
    tips: ['Restez en mouvement constant', 'Utilisez les obstacles comme bouclier', 'Visez le capteur dorsal pour le bonus'],
  },
  {
    id: 'equipes',
    name: 'Équipes',
    icon: '👥',
    players: '4–24 joueurs',
    duration: '20 min',
    description: 'Rouge contre Bleu ! Travaillez en équipe pour dominer l’arène. La communication est la clé de la victoire.',
    tips: ['Coordonnez vos attaques', 'Protégez votre base', 'Communiquez en permanence'],
  },
  {
    id: 'domination',
    name: 'Domination de Zone',
    icon: '🏳️',
    players: '4–24 joueurs',
    duration: '20 min',
    description: 'Capturez et maintenez des zones clés de l’arène pour marquer des points. Plus vous tenez longtemps, plus vous scorez.',
    tips: ['Privilégiez les zones centrales', 'Défendez par rotation', 'Surprenez avec les flancs'],
  },
  {
    id: 'vip',
    name: 'VIP',
    icon: '👑',
    players: '4–24 joueurs',
    duration: '20 min',
    description: 'Chaque équipe désigne un VIP à protéger. Si votre VIP est éliminé, votre équipe perd. Stratégie et protection maximale !',
    tips: ['Le VIP reste en arrière-garde', 'Créez un écran de protection', 'Éliminez le VIP adverse en priorité'],
  },
  {
    id: 'roi',
    name: 'Roi du Labyrinthe',
    icon: '👑',
    players: '2–24 joueurs',
    duration: '20 min',
    description: 'Le roi commence avec des points bonus mais est la cible de tous. Parviendrez-vous à détrôner le roi et prendre sa place ?',
    tips: ['En tant que roi, bougez souvent', 'Chassez le roi en groupe', 'Utilisez vos éliminat ions'],
  },
  {
    id: 'invasion',
    name: 'Invasion',
    icon: '👾',
    players: '4–24 joueurs',
    duration: '20 min',
    description: 'Une équipe défend sa base contre les attaquants. Les rôles s’inversent à mi-partie. Qui sera le meilleur à attaquer et défendre ?',
    tips: ['Attaquants : avancez en vagues', 'Défenseurs : couvrez les angles', 'Utilisez les zones élevées'],
  },
]

export default function ModesDeJeuPage() {
  return (
    <>
      <section className="relative min-h-[40vh] flex items-center bg-dark-secondary pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,0,26,0.1)_0%,transparent_60%)]" />
        <div className="container-custom text-center relative z-10">
          <nav className="text-sm text-white/40 mb-6 flex justify-center gap-2">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <span>/</span>
            <Link href="/laser-game" className="hover:text-white">Laser Game</Link>
            <span>/</span>
            <span className="text-white">Modes de Jeu</span>
          </nav>
          <h1 className="font-display text-6xl lg:text-8xl text-white mb-6">MODES DE JEU</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            6 modes de jeu uniques pour varier les plaisirs. Découvrez lequel correspond à votre style de jeu !
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modes.map(({ id, name, icon, players, duration, description, tips }) => (
              <div key={id} className="bg-dark-card rounded-2xl p-8 hover:ring-1 hover:ring-primary transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{icon}</span>
                  <div className="text-right text-sm text-white/40">
                    <p>{players}</p>
                    <p>{duration}</p>
                  </div>
                </div>
                <h2 className="font-display text-3xl text-white mb-3">{name}</h2>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">{description}</p>
                <div>
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-3">Conseils</p>
                  <ul className="space-y-1">
                    {tips.map((tip, i) => (
                      <li key={i} className="text-white/50 text-sm flex gap-2">
                        <span className="text-primary">›</span>{tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-5xl text-white mb-6">QUEL MODE ALLEZ-VOUS CHOISIR ?</h2>
          <Link href="/contact" className="inline-flex bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Réserver ma partie
          </Link>
        </div>
      </section>
    </>
  )
}
