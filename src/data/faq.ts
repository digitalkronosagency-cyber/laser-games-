export interface FAQItem {
  question: string
  answer: string
  category?: string
}

export const faqData: FAQItem[] = [
  { question: 'Comment réserver une session au Laser Game Evolution de Tours ?', answer: "Vous pouvez réserver en ligne directement sur notre site via le formulaire de réservation, ou nous appeler au 02 47 00 00 00 du lundi au dimanche dès 9h du matin. Nous vous conseillons de réserver à l'avance, surtout le week-end et pendant les vacances scolaires.", category: 'Réservation' },
  { question: 'Quel est le nombre minimum de joueurs pour une partie de laser game ?', answer: 'Les parties de laser game classiques sont accessibles à partir de 6 joueurs. Le centre peut accueillir de 4 à 30 joueurs simultanément dans ses 3 labyrinthes.', category: 'Laser Game' },
  { question: 'Le Laser Game Evolution de Tours est-il ouvert le lundi ?', answer: 'Hors vacances scolaires, le centre est fermé le lundi. Pendant les vacances scolaires et en juillet-août, nous sommes ouverts le lundi de 14h à 22h.', category: 'Horaires' },
  { question: 'Combien coûte une partie de laser game à Tours ?', answer: "Les tarifs varient selon l'activité et le nombre de participants. Consultez notre page tarifs pour le détail complet, ou appelez-nous au 02 47 00 00 00 pour un devis personnalisé.", category: 'Tarifs' },
  { question: 'Le Laser Game Evolution de Tours est-il adapté aux enfants ?', answer: "Oui ! Le laser game est adapté à partir de 6 ans environ. Les enfants adorent l'ambiance du labyrinthe et les jeux en équipe.", category: 'Laser Game' },
  { question: 'Peut-on organiser un anniversaire au Laser Game de Tours ?', answer: 'Absolument ! Nous proposons des offres anniversaire sur mesure : salle privatisée, animations incluses, pack multi-activités disponible.', category: 'Anniversaire' },
  { question: 'Comment se déroule une partie de laser game ?', answer: "Vous choisissez votre pseudo, sélectionnez votre mode de jeu et constituez vos équipes. Après un briefing, vous enfilez le plastron et les pistolets laser et c'est parti !", category: 'Laser Game' },
  { question: 'Le Laser Game de Tours propose-t-il des activités pour les entreprises ?', answer: "Oui ! Nous proposons des packages team building et séminaires sur mesure pour groupes jusqu'à 30 personnes.", category: 'Entreprises' },
  { question: "Qu'est-ce que le BlindTest à reconnaissance vocale de Tours ?", answer: "C'est le premier BlindTest utilisant la reconnaissance vocale ! Criez la réponse et le système la détecte instantanément. 6000 titres, 60 playlists, 5 niveaux de difficulté, salle privatisée et service bar.", category: 'BlindTest' },
  { question: 'Comment fonctionne le lancer de hache ?', answer: "Muni d'une hache sécurisée, vous visez une cible en bois. Un moniteur vous accompagne pour apprendre les bonnes techniques. Accessible aux débutants !", category: 'Lancer de Hache' },
  { question: "Les groupes sont-ils mélangés avec d'autres joueurs ?", answer: "Non, jamais ! C'est notre engagement : votre groupe dispose d'un labyrinthe entièrement privatisé.", category: 'Laser Game' },
  { question: 'Combien de temps dure une partie de laser game ?', answer: "Une partie standard dure 15 à 20 minutes. En comptant le briefing, prévoyez 30 à 40 minutes par partie.", category: 'Laser Game' },
  { question: 'Où est situé le Laser Game Evolution de Tours ?', answer: 'Nous sommes situés au 35 rue Frédéric Joliot-Curie, 37550 Saint-Avertin, aux portes de Tours.', category: 'Infos pratiques' },
  { question: 'Y a-t-il un parking au Laser Game de Tours ?', answer: 'Oui, un parking est accessible à proximité immédiate du centre.', category: 'Infos pratiques' },
  { question: 'Peut-on venir en groupe de plus de 30 personnes ?', answer: 'Pour les groupes dépassant 30 personnes, contactez-nous directement au 02 47 00 00 00. Nous étudierons ensemble la meilleure organisation.', category: 'Groupes' },
  { question: 'Quels sont les modes de jeu disponibles au laser game ?', answer: "Plusieurs modes sont disponibles : Chacun pour soi, Équipes (2 à 6), et modes spéciaux. Retrouvez le détail sur notre page Modes de Jeu.", category: 'Laser Game' },
  { question: 'Peut-on offrir une partie de laser game en cadeau ?', answer: 'Oui ! Des bons cadeaux sont disponibles. Idéal pour les anniversaires, Noël, fête des pères/mères.', category: 'Réservation' },
  { question: 'Comment se rendre au Laser Game Evolution depuis Tours centre ?', answer: 'Saint-Avertin est à 10 minutes de Tours centre. En voiture : direction Vierzon, sortie Saint-Avertin. GPS : 35 rue Frédéric Joliot-Curie, 37550 Saint-Avertin.', category: 'Infos pratiques' },
  { question: 'Le Laser Game Evolution de Tours propose-t-il des promotions ?', answer: 'Oui ! Des offres spéciales sont régulièrement disponibles. Consultez notre page Offres ou contactez-nous.', category: 'Tarifs' },
  { question: 'Peut-on organiser un EVJF ou EVG au Laser Game de Tours ?', answer: "Absolument ! Le laser game et le lancer de hache sont parfaits pour les enterrements de vie de garçon ou de jeune fille. Privatisation assurée.", category: 'Événements' },
]
