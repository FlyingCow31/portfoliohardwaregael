import Link from "next/link"
import Navbar, { MobileNav } from "./components/Navbar"
import HeroCard from "./components/Cards"
import Prestations from "./components/Presta"
import Footer from "./components/Footer"
import HeroMainPanel from "./components/HeroPanel"
import MainTitle from "./components/Text"
import { Metadata } from "next"

export const metadata: Metadata = {
     title: "Réparation PC à Colomiers et Toulouse",
     description:
          "Chez Gaël, réparation et montage de vos ordinateurs à Colomiers : diagnostic, remplacement pièces, nettoyage, assistance à distance. Atelier sur rendez-vous.",
     openGraph: {
          title: "Chez Gaël - Réparation et montage PC à Colomiers",
          description: "Diagnostic, montage, réparation et assistance informatique près de Toulouse.",
          images: ["/og-home.png"],
     },
     alternates: { canonical: "/" },
}

const HeroCardTexts = [
     {
          title: "Déplacements",
          description:
               "Je me déplace sur Colomiers gratuitement, et sur Toulouse et villes alentours pour 1€/km depuis mon atelier. Vous pouvez également venir à mon atelier gratuitement!",
          cta: (
               <Link href={"/contact"} className="w-fit h-fit self-center">
                    <p className="lightbgtransition bg-sec text-center h-fit w-fit mx-auto py-1 px-10 rounded-lg font-bold text-xl border-3 border-border shadow-neo">
                         + d'Infos
                    </p>
               </Link>
          ),
     },
     {
          title: "Configuration",
          description:
               "Je propose des services de A à Z: commande et recherche des pièces, montage et optimisation. Explications gratuites!",
          cta: (
               <Link href={"/services"} className="w-fit h-fit self-center mt-auto">
                    <p className="lightbgtransition bg-sec text-center h-fit w-fit mx-auto py-1 px-10 rounded-lg font-bold text-xl border-3 border-border shadow-neo">
                         + d'Infos
                    </p>
               </Link>
          ),
     },
]

const PrestationsList = [
     {
          client: "Gaël Tournier",
          date: "02/09/2026",
          title: "Config gaming 1440p",
          desc: "Montage d'une Sapphire RX 5700 XT avec un Ryzen 7 3700X dans un boitier finission bois Lian-Li pour du gaming 1440p, à Colomiers.",
          images: [
               { src: "pclianliinterieur.jpg", alt: "Intérieur du PC Lian-li avec vue sur les composants" },
               { src: "pclianlicablemanagement.jpg", alt: "Câble management de l'arrière du PC Lian-Li" },
               { src: "lianlitower.jpg", alt: "Photo du boitier Lian-Li" },
          ],
     },
     {
          client: "Gaël Tournier",
          date: "09/09/2026",
          title: "Config Aquarium",
          desc: "Boitier aquarium sans câble management, la personne aimant voir les câbles.",
          images: [
               { src: "aquapcfront.jpg", alt: "Devant du PC aquarium" },
               { src: "aquapcside.jpg", alt: "Coté du PC aquarium" },
               { src: "aquapcdetail.jpg", alt: "Détails de la carte mère du PC aquarium" },
          ],
     },
]

export default function Home() {
     return (
          <>
               <main className="bg-bg min-h-screen">
                    <MobileNav />
                    <Navbar />

                    <HeroMainPanel>
                         <h1 className="font-bagel text-5xl md:text-7xl col-span-full py-12">
                              Réparation, montage et diagnostic <br /> PC portables et fixes.
                         </h1>
                         <p className="row-start-3 col-span-3 pb-20 text-xl leading-relaxed">
                              Avec 6 ans d'experience dans le montage, démontage et réparation de PC, je viens
                              aujourd'hui à votre secours! Je me déplace chez vous ou vous accueille dans mon atelier
                              pour résoudre vos problèmes techniques, vous monter votre configuration PC de rêve ou même
                              vous conseiller sur vos composants. Que vous soyez un gamer qui recherche la performance
                              avec de l'optimisation, ou un grand-parent voulant faire plaisir à votre petit fils (ou
                              petite fille!), je vous accompagne !
                         </p>
                         <Link href={"/contact"} className="row-start-4 col-start-1 h-fit">
                              <p className="darkbgtransition border-3 border-border shadow-neo bg-main text-center p-4 rounded-lg text-bg font-bold h-fit">
                                   Prendez Rendez-Vous →
                              </p>
                         </Link>

                         <div className="flex md:flex-row flex-col gap-6 col-start-4 col-span-full row-start-4 mt-6 lg:mt-0">
                              {HeroCardTexts.map((card, i) => {
                                   return <HeroCard key={i} {...card} />
                              })}
                         </div>
                    </HeroMainPanel>

                    <section>
                         <MainTitle text="Découvrez mes dernières prestations" />

                         <div className="lg:hidden">
                              {PrestationsList.slice(0, 1).map((Line, i) => {
                                   return <Prestations key={i} {...Line} />
                              })}
                         </div>
                         <div className="hidden lg:block">
                              {PrestationsList.map((Line, i) => {
                                   return <Prestations key={i} {...Line} />
                              })}
                         </div>
                    </section>

                    <section className="bg-main my-12 pb-6">
                         <h2 className="text-bg text-6xl p-8 font-bagel font-black underline decoration-sec">
                              Moi & mon atelier
                         </h2>
                         <p className="p-8 w-full lg:w-[80%] text-bg text-2xl">
                              Je suis un développeur web de 21 ans, passionné d'informatique depuis sa jeunesse (qui
                              n'est plus toute proche!). Je travaille sur mes machines et celles de mes proches depuis 6
                              ans maintenant, faisant de la réparation et du montage occasionnel gratuitement pour des
                              personnes quand j'étais encore en études. J'ai maintenant décidé de sauter le pas et de
                              lancer mon entreprise ! Je propose donc tous les services (que vous pouvez retrouver dans
                              la catégorie "services") chez moi ou à domicile! <br /> <br />
                              La visite à l'atelier se fait uniquement sur rendez-vous via la page rendez-vous ou sur
                              whatsapp !
                         </p>
                         <Link href={"/contact"} className="w-fit">
                              <p className="xlightbgtransition border-3 border-border shadow-neo bg-bg text-center p-4 rounded-lg text-main font-bold w-[70%] lg:w-[50%] mx-auto">
                                   Prendez rendez-vous →
                              </p>
                         </Link>
                    </section>
                    <Footer />
               </main>
          </>
     )
}
