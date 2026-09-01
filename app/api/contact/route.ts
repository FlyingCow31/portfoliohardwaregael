import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: Number(process.env.SMTP_PORT),
     secure: true,
     auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
     },
})

const schema = z.object({
     nom: z.string(),
     email: z
          .string({ message: "L'Email est obligatoire!" })
          .email({
               message: "L'email est obligatoire!",
          })
          .nonempty(),
     phone: z.string(),
     message: z.string({ message: "Vous devez décrire votre demande!" }).nonempty(),
     kind: z.string(),
     place: z.string({ message: "Vous devez choisir un endroit pour me rencontrer!" }).nonempty(),
     day: z.number({ message: "Vous devez choisir un jour!" }).int().min(1),
     month: z.string().nonempty(),
     slot: z.string({ message: "Vous devez choisir un horaire!" }).nonempty(),
})

export async function POST(request: NextRequest) {
     try {
          const body = await request.json()
          const parsed = schema.safeParse(body)
          await transporter.verify()

          if (!parsed.success) {
               return NextResponse.json({ error: parsed.error.issues[0].message, data: parsed }, { status: 400 })
          }

          const verified = parsed.data

          const clientEmail = body.email

          const OrderMail = await transporter.sendMail({
               from: process.env.PRIV_EMAIL,
               to: process.env.PRIV_EMAIL,
               replyTo: clientEmail,
               subject: `Nouveau Rendez-vous le ${verified.day} ${verified.month} à ${verified.slot}`,
               text: `
               Nouveau rendez-vous de ${verified.nom} : 

               Contact : ${verified.phone ? verified.phone : verified.email}

               Rendez-vous le ${verified.day} ${verified.month} à ${verified.slot} au lieu ${verified.place} pour un(e) ${verified.kind}. 
               ${verified.message}
               `,
          })

          const ClientMail = await transporter.sendMail({
               from: process.env.PRIV_EMAIL,
               to: clientEmail,
               subject: `Chez Gaël - Votre Rendez-vous le ${verified.day} ${verified.month} à ${verified.slot}`,
               text: `
               ${verified.nom}, merci d'avoir pris rendez-vous! 

               Ceci est un message automatique pour vous confirmer que votre message a bien été pris en compte.
               Si vous ne recevez pas de mail supplémentaire depuis un email se terminant en @gaeltournier.dev, considérez que votre rendez-vous 
               confirmé! 

               Vous avez rendez-vous le ${verified.day} ${verified.month} à ${verified.slot}h pour un(e) ${verified.kind}.
               Voila les détails que vous m'avez transmis: 
               "${verified.message}"

               Si vous avez une question, vous pouvez m'envoyer un message sur whatsapp uniquement au +33 6 58 53 82 54 
               ou par mail à contact@gaeltournier.dev. 

               Très belle journée! 
               Gaël. 
               `,
          })

          return NextResponse.json({ ok: true, data: parsed })
     } catch (err) {
          console.error("Contact API Error:", err)
          return NextResponse.json(
               {
                    error: "Data has not been parsed correctly",
                    details: err instanceof Error ? err.message : String(err),
               },
               { status: 400 },
          )
     }
}
