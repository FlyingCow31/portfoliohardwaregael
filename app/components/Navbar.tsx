import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
     return (
          <>
               <nav className="bg-bg p-4 flex items-center justify-around">
                    <Image src={"/logo.png"} alt="Logo Chez Gaël" width={161} height={32} />

                    <Link href={"/"} className="ml-auto mr-20">
                         <p>Services</p>
                    </Link>
                    <Link href={"/"}>Assistance</Link>

                    <Link href={"/"}>
                         <p className="bg-sec px-6 py-2 text-xl font-dm rounded-lg border-3 border-border shadow-neo">
                              Rendez-vous
                         </p>
                    </Link>
               </nav>
          </>
     )
}
