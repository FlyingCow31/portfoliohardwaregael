import { type ReactNode } from "react"

import HeroMainPanel from "../components/HeroPanel"
import ContactSection from "../components/ContactSection"
import Navbar, { MobileNav } from "../components/Navbar"
import { MoveUpRight } from "lucide-react"
import Link from "next/link"
import Footer from "../components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
     title: "Contact",
     description:
          "Contactez moi pour obtenir un devis gratuit pour votre montage, réparation, nettoyage de PC, solutions self-host ou autres services !",
     alternates: { canonical: "/contact" },
}
type ContactCard = {
     label: string
     value: string
     icon?: ReactNode
     link: string
}

const icon = <MoveUpRight className="ml-auto" size={40} />
const cardsContact: ContactCard[] = [
     { label: "Téléphone & WhatsApp", value: "06 12 34 56 78", icon, link: "https://wa.me/33658538254" },
     { label: "E-mail", value: "contact@chezgael.fr", icon, link: "mailto:contact@gaeltournier.dev" },
     {
          label: "Atelier, sur rendez-vous",
          value: "Colomiers (31)",
          icon,
          link: "https://maps.app.goo.gl/Q2AaPXk87mnuboVa9",
     },
]

export default function ContactPage() {
     return (
          <>
               <Navbar />
               <MobileNav />
               <main className="bg-bg font-dm">
                    <HeroMainPanel height="lg:h-1/2">
                         <h1 className="text-5xl font-bagel lg:text-7xl col-start-1 col-span-full row-start-1">
                              Prenons rendez-vous.
                         </h1>
                         <p className="col-start-1 col-span-full row-start-3 lg:text-2xl lg:mt-8 lg:w-[80%]">
                              Décrivez la panne ou votre projet de configuration, ou choisissez directement un créneau.
                              Je réponds sous 24 h, et l&apos;atelier de Colomiers se visite uniquement sur rendez-vous.
                         </p>
                         <div className="row-start-4 col-start-1 col-span-full flex mt-12 lg:justify-between lg:flex-row flex-col gap-6 lg:gap-0">
                              {cardsContact.map((card, i) => (
                                   <Link
                                        href={card.link}
                                        key={i}
                                        className="lg:w-[30%]"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                   >
                                        <div className="bg-bg shadow-neo border-3 rounded-lg p-6 xlightbgtransition">
                                             <p className="font-bagel text-2xl">{card.label}</p>
                                             <p className="text-xl">{card.value}</p>
                                             {card.icon}
                                        </div>
                                   </Link>
                              ))}
                         </div>
                    </HeroMainPanel>

                    <ContactSection />
                    <Footer />
               </main>
          </>
     )
}
