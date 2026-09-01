import Link from "next/link"
import Navbar, { MobileNav } from "./components/Navbar"
import HeroCard from "./components/Cards"
import Prestations from "./components/Presta"
import Footer from "./components/Footer"
import HeroMainPanel from "./components/HeroPanel"

const HeroCardTexts = [
     {
          title: "Déplacements",
          description:
               "Je me déplace sur Colomiers gratuitement, et sur Toulouse et villes alentours pour 1€/km depuis mon atelier. Vous pouvez également venir à mon atelier gratuitement!",
          cta: (
               <Link href={"/"} className="w-fit h-fit self-center">
                    <p className="bg-sec text-center h-fit w-fit mx-auto py-1 px-10 rounded-lg font-bold text-xl border-3 border-border shadow-neo">
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
               <Link href={"/"} className="w-fit h-fit self-center mt-auto">
                    <p className="bg-sec text-center h-fit w-fit mx-auto py-1 px-10 rounded-lg font-bold text-xl border-3 border-border shadow-neo">
                         + d'Infos
                    </p>
               </Link>
          ),
     },
]

const PrestationsList = [
     {
          client: "Gaël Tournier",
          date: "09/09/2026",
          title: "Config gaming 1440p",
          desc: "Ryzen 7, RTX 4070 Super, câblage sur mesure et gestion du flux d'air.",
          images: [
               { src: "logo.png", alt: "Logo" },
               { src: "logo.png", alt: "Logo" },
               { src: "logo.png", alt: "Logo" },
          ],
     },
     {
          client: "Gaël Tournier",
          date: "09/09/2026",
          title: "Config gaming 1440p",
          desc: "Ryzen 7, RTX 4070 Super, câblage sur mesure et gestion du flux d'air.",
          images: [
               { src: "logo.png", alt: "Logo" },
               { src: "logo.png", alt: "Logo" },
               { src: "logo.png", alt: "Logo" },
          ],
     },
     {
          client: "Gaël Tournier",
          date: "09/09/2026",
          title: "Config gaming 1440p",
          desc: "Ryzen 7, RTX 4070 Super, câblage sur mesure et gestion du flux d'air.",
          images: [
               { src: "logo.png", alt: "Logo" },
               { src: "logo.png", alt: "Logo" },
               { src: "logo.png", alt: "Logo" },
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
                              <p className="border-3 border-border shadow-neo bg-main text-center p-4 rounded-lg text-bg font-bold h-fit">
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
                         <h2 className="text-main text-5xl md:text-6xl p-8 font-bagel font-black underline decoration-sec">
                              Découvrez mes dernières prestations
                         </h2>

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
                         <h3 className="text-bg text-6xl p-8 font-bagel font-black underline decoration-sec">
                              Moi & mon atelier
                         </h3>
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
                              <p className="border-3 border-border shadow-neo bg-bg text-center p-4 rounded-lg text-main font-bold w-[70%] lg:w-[50%] mx-auto">
                                   Prendez rendez-vous →
                              </p>
                         </Link>
                    </section>
                    <Footer />
               </main>
          </>
     )
}
