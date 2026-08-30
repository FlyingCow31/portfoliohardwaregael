"use client"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
     return (
          <>
               <nav className="hidden bg-bg p-4 lg:flex items-center justify-around">
                    <Link href={"/"}>
                         <Image src={"/logo.png"} alt="Logo Chez Gaël" width={161} height={32} />
                    </Link>

                    <Link href={"/"} className="ml-auto mr-20">
                         <p>Services</p>
                    </Link>
                    <Link href={"/"}>Assistance</Link>

                    <Link href={"/"}>
                         <p className="bg-sec px-6 py-2 text-xl font-dm rounded-lg border-3 border-border shadow-neo">
                              Rendez-vous →
                         </p>
                    </Link>
               </nav>
          </>
     )
}

export function MobileNav() {
     const [status, setStatus] = useState(false)
     return (
          <>
               <nav className="relative flex justify-between p-4 items-center lg:hidden">
                    <Link href={"/"}>
                         <Image src={"/logo.png"} alt="Logo Chez Gaël" width={192} height={40} />
                    </Link>

                    <a onClick={() => setStatus(true)}>
                         <Menu size={50} color="#1b4967" className="cursor-pointer" />
                    </a>

                    {status && (
                         <div
                              className="fixed inset-y-0 right-0 z-100 flex h-screen flex-col gap-12 bg-[hsl(205,27%,80%)] p-4 pt-8 px-12 items-start *:text-2xl"
                              style={{ animation: "slideIn 200ms ease-out" }}
                         >
                              <a onClick={() => setStatus(false)} className="self-end">
                                   <Menu size={50} color="#1b4967" className="cursor-pointer" />
                              </a>
                              <Link href={"/"}>
                                   <p>→ Accueil</p>
                              </Link>
                              <Link href={"/"}>
                                   <p>→ Services</p>
                              </Link>
                              <Link href={"/"}>
                                   <p>→ Assistance</p>
                              </Link>

                              <Link href={"/"}>
                                   <p className="bg-sec px-6 py-2 text-xl font-dm rounded-lg border-3 border-border shadow-neo">
                                        Rendez-vous →
                                   </p>
                              </Link>
                         </div>
                    )}
               </nav>
          </>
     )
}
