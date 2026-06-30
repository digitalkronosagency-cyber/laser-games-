import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  activity: z.enum(['laser-game', 'lancer-hache', 'blind-test', 'combinaison']),
  date: z.string().min(1),
  participants: z.string().min(1),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'reservation@tours.lasergame-evolution.fr',
        to: 'tours@lasergame-evolution.fr',
        subject: `Nouvelle réservation - ${data.activity} - ${data.name}`,
        html: `
          <h2>Nouvelle demande de réservation</h2>
          <p><strong>Nom :</strong> ${data.name}</p>
          <p><strong>Email :</strong> ${data.email}</p>
          <p><strong>Téléphone :</strong> ${data.phone}</p>
          <p><strong>Activité :</strong> ${data.activity}</p>
          <p><strong>Date souhaitée :</strong> ${data.date}</p>
          <p><strong>Participants :</strong> ${data.participants}</p>
          ${data.message ? `<p><strong>Message :</strong> ${data.message}</p>` : ''}
        `,
      })
    } else {
      console.log('[Reservation]', data)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Données invalides', details: error.errors }, { status: 400 })
    }
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
