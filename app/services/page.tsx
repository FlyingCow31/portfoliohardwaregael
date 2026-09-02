import Link from "next/link"
import HeroMainPanel from "../components/HeroPanel"
import Navbar, { MobileNav } from "../components/Navbar"
import MainTitle from "../components/Text"
import MainPrice, { SecPrice } from "../components/Prices"
import Footer from "../components/Footer"

const servicesMain = [
     {
          title: "Montage",
          price: "À partir de 50€",
          text: "Vous avez un nouveau PC ? Montage complet avec cable management et optimisation. 2h passé à l'atelier ou à domicile, plusieurs années sans intervention. Explications gratuites pour connaitre votre machine. Inclus dans la prestation de A à Z.",
          line: [
               "Câble management professionnel",
               "Montage design",
               "Optimisation gaming ou bureautique",
               "Windows, MàJ et drivers.",
          ],
     },
     {
          title: "Réparation",
          price: "À partir de 29€",
          text: "Écran noir, surchauffe, lenteur: Tout y passe ! J'effectue les réparations superficielles qui ne nécessitent pas d'intervention de soudure. Pc fixes et portables ! ",
          line: [
               "Devis avant intervention",
               "Remplacement de composants",
               "Remise en état",
               "1 mois de garantie sur les réparations",
          ],
     },
     {
          title: "Diagnostic",
          price: " 29€/h, déduit si réparation.",
          text: "Votre petit-fils n'arrive pas à réparer votre PC ? J'utilise des tests méthodiques pour diagnostiquer vos appareils! Diagnostic en distanciel possible.",
          line: [
               "Tests mémoire, CPU, GPU",
               "Analyse des logs et des events",
               "Diagnostic thermique",
               "Compte rendu total et devis complet",
          ],
     },
]
const servicesSec = [
     {
          title: "Upgrade",
          price: "À partir de 29€ | ~1h",
          text: "Ajout de ram, migration vers un SSD NVME M2, nouvelle carte graphique...",
     },
     {
          title: "Recupération de Données",
          price: "À partir de 49€ | ~1h",
          text: "Niveau 1 seulement, votre clé USB apparait quelques secondes mais re-disparait. Les niveaux suivant devront aller au centre de récupération de données.",
     },
     {
          title: "Optimisation",
          price: "À partir de 29€ | ~1h",
          text: "Vous souhaitez optimiser votre PC d'une certaine façon ? Carte graphique, CPU, Overclocking, Undervolting, etc.",
     },
     {
          title: "Assistance à distance",
          price: "29€/30 min",
          text: "Pour les services éligibles au distanciel, les prix sont fixes.",
     },
     {
          title: "Self-hosting",
          text: "Marre des abonnements Netflix, Spotify ou Google Photos ? Payez une fois, plus d'abonnements! Montage, configuration et déploiement des  applications. Maintenance mensuelle incluse le premier mois. Hardware non-inclus.",
          price: "À partir de 150€",
     },
     {
          title: "Réseau local d'entreprise",
          text: "Firewall, accès VPN, accès à distance, etc. Je gère le réseau des PME/TPE ! Maintenance et suivi inclus le premier mois.",
          price: "À partir de 250€",
     },
     {
          title: "Recyclage",
          text:
               "Vous souhaitez transformer plusieurs anciens PC en serveur, ou simplement vous en débarrasser? je reprends gratuitement vos appareils." +
               " Avec une création de serveur, le premier service 'self-hosted' est offert.",
          price: "Gratuit | À partir de 300€",
     },
     {
          title: "Nettoyage",
          text: "Nettoyage en détail et remplacement de la pâte thermique. J'ouvre votre PC et lui refait une beautée!",
          price: "À partir de 29€ (fixes) | 39€ (portables)",
     },
]

export default function Page() {
     return (
          <>
               <main className="bg-bg min-h-screen pb-400">
                    <MobileNav />
                    <Navbar />
                    <HeroMainPanel height="lg:h-1/2">
                         <h1 className="font-bagel text-5xl md:text-7xl col-span-full py-12">Mes Services</h1>
                         <p className="row-start-3 col-span-3 pb-20 text-xl leading-relaxed">
                              Mes trois grandes prestations phares: montage, nettoyage et réparation. Retrouvez
                              également mes plus petits services comme de l'accompagnement, des upgrades ou des services
                              plus particuliers. <br />
                              Tous ces services peuvent être réalisés à l'atelier à Colomiers, à domicile ou à distance
                              pour certains. Ils sont tous réalisés par moi, Gaël!
                              <br />
                              <span className="italic">
                                   * Evidemment, les explications restent toujours gratuites !
                              </span>
                         </p>
                         <Link href={"/contact"} className="row-start-4 col-start-1 h-fit">
                              <p className="border-3 border-border shadow-neo bg-main text-center p-4 rounded-lg text-bg font-bold h-fit">
                                   Prendez Rendez-Vous →
                              </p>
                         </Link>
                    </HeroMainPanel>
                    <section>
                         <MainTitle text="Mes trois prestations phares" />
                         {servicesMain.map((div, i) => {
                              return <MainPrice key={i} {...div} />
                         })}
                    </section>
                    <section className="pt-20 lg:pt-0">
                         <MainTitle text="Interventions secondaires" />
                         <div className="lg:grid grid-cols-4 lg:border-3 border-b-3 lg:border-b-6">
                              {servicesSec.map((div, i) => {
                                   return <SecPrice key={i} {...div} />
                              })}
                         </div>
                    </section>
                    <Footer />
               </main>
          </>
     )
}
