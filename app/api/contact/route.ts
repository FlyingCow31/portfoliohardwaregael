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

function escapeHtml(value: string) {
     return value.replace(/[&<>"']/g, (character) => {
          switch (character) {
               case "&":
                    return "&amp;"
               case "<":
                    return "&lt;"
               case ">":
                    return "&gt;"
               case '"':
                    return "&quot;"
               case "'":
                    return "&#39;"
               default:
                    return character
          }
     })
}

export async function POST(request: NextRequest) {
     try {
          const body = await request.json()
          if (body.website != null) {
               return NextResponse.json({ ok: true })
          }

          const timeFillingForm = Date.now() - body.formLoadedAt

          if (!body.formLoadedAt || timeFillingForm < 10000) {
               return NextResponse.json({ error: "Formulaire Invalide." }, { status: 400 })
          }

          const parsed = schema.safeParse(body)
          await transporter.verify()

          if (!parsed.success) {
               return NextResponse.json({ error: parsed.error.issues[0].message, data: parsed }, { status: 400 })
          }

          const verified = parsed.data

          const clientEmail = body.email

          await transporter.sendMail({
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

          // Formatting made with AI
          const clientMailHtml = `
               <div
     style="
          margin: 0 auto;
          max-width: 640px;
          padding: 24px;
          font-family: Arial, sans-serif;
          color: #1b4967;
          line-height: 1.6;
          background-color: #d7e8f4;
     "
>
     <div
          style="
               background-color: #ffffff;
               border: 3px solid #1b4967;
               border-radius: 16px;
               padding: 24px;
               box-shadow: 4px 6px 0px #1b4967;
          "
     >
          <h1 style="margin: 0 0 16px; font-size: 24px; line-height: 1.2; font-weight: 700; color: #1b4967">
               ${escapeHtml(verified.nom)}, merci d'avoir pris rendez-vous!
          </h1>
          <p style="margin: 0 0 16px; font-size: 16px">
               Ceci est un message automatique pour vous confirmer que votre message a bien été pris en compte.
          </p>
          <p style="margin: 0 0 16px; font-size: 16px">
               Vous avez rendez-vous le
               <strong>
                    ${escapeHtml(String(verified.day))} ${escapeHtml(verified.month)} à ${escapeHtml(verified.slot)}h
               </strong>
               pour un(e) ${escapeHtml(verified.kind)}.
          </p>
          <p style="margin: 0 0 16px; font-size: 16px; white-space: pre-line">
               Voila les détails que vous m'avez transmis: "${escapeHtml(verified.message)}"
          </p>
          <p style="margin: 0 0 16px; font-size: 16px">
               Si vous avez une question, vous pouvez m'envoyer un message sur whatsapp uniquement au +33 6 58 53 82 54
               ou par mail à contact@gaeltournier.dev.
          </p>
          <p style="margin: 0; font-size: 16px">
               Très belle journée!
               <br />
               Gaël.
          </p>
          <p style="margin: 16px 0 0; font-size: 14px; color: #6b7280; font-style: italic">
               Si vous ne recevez pas de mail supplémentaire depuis un email se terminant en @gaeltournier.dev,
               considérez que votre rendez-vous est confirmé!
          </p>
     </div>
</div>
          `

          await transporter.sendMail({
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
               html: clientMailHtml,
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
