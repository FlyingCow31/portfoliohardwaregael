import Link from "next/link"
import Image from "next/image"
import HeroMainPanel from "../components/HeroPanel"
import Navbar, { MobileNav } from "../components/Navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
     title: "Assistance informatique à distance",
     description:
          "Prise en main à distance pour résoudre vos problèmes informatiques rapidement, sans déplacement. Dépannage logiciel, virus, configuration, en visio ou par prise de contrôle à distance.",
     alternates: { canonical: "/assistance" },
}
export default function Page() {
     return (
          <>
               <main className="bg-bg min-h-screen">
                    <MobileNav />
                    <Navbar />
                    <HeroMainPanel height="lg:h-1/2">
                         <div className="row-start-1 col-start-1 col-span-2  flex flex-col">
                              <h1 className="font-bagel text-5xl md:text-7xl py-12">
                                   Assistance informatique à distance partout en France.
                              </h1>
                              <p className="pb-20 text-xl leading-relaxed ">
                                   Je règle vos problèmes à distance, depuis des logiciels comme AnyDesk ou TeamViewer.
                                   Je prends la main sur votre machine et règle vos problèmes pendant que vous regardez.
                                   Pas d'attente, pas de déplacements (surtout avec le prix de l'essence!).
                              </p>
                              <Link href={"https://wa.me/33658538254"} className="w-fit">
                                   <div className="whtransition border-3 border-border shadow-neo bg-[#2F6B45] p-4 rounded-lg flex gap-6 items-center">
                                        <Image src={"/whicon.webp"} alt="Whatsapp Icon" height={30} width={30} />
                                        <p className=" text-center text-bg font-bold h-fit">Prennez Rendez-Vous →</p>
                                   </div>
                              </Link>
                         </div>

                         <div className="*:p-4 lg:*:p-8 lg:w-100 border-3 shadow-neo bg-whity rounded-lg row-start-1 col-start-4 col-span-1 h-fit mt-12 lg:mt-0">
                              <h2 className="text-2xl bg-main text-center border-b-3 text-whity">
                                   Inclus dans la prestation
                              </h2>

                              <p className="text-xl">
                                   Session de 30 minutes sur AnyDesk ou TeamViewer. Je vous guide pour l'installation
                                   des logiciels. <br />
                                   <br />
                                   <span className="text-main">→</span> Intervention logicielle uniquement. <br />
                                   <span className="italic">(Je n'ai pas encore d'hologramme)</span>
                                   <br />
                                   <span className="text-main">→</span> Nettoyage et optimisation. <br />
                                   <span className="text-main">→</span> Compte rendu après un diagnostic. <br />
                              </p>
                              <p className="text-2xl font-bagel text-main">29€/30 mins</p>
                         </div>
                    </HeroMainPanel>
               </main>
          </>
     )
}
