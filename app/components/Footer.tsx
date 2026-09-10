import Link from "next/link"
import Image from "next/image"

export default function Footer() {
     return (
          <footer className="flex flex-col lg:flex-row gap-6 p-4 pt-8 items-center">
               <Link href={"/"}>
                    <Image src={"/logo.png"} alt="Logo Chez Gaël" width={161} height={32} />
               </Link>

               <Link href={"/mentions"}>
                    <p className="opacity-50 hover:opacity-100 hover:translate-x-3 transition-all duration-150">
                         Mentions légales
                    </p>
               </Link>
               <Link href={"/cgv"}>
                    <p className="opacity-50 hover:opacity-100 hover:translate-x-3 transition-all duration-150">CGV</p>
               </Link>
               <Link href={"https://gaeltournier.dev"}>
                    <p className="opacity-50 hover:opacity-100 hover:translate-x-3 transition-all duration-150">
                         Recevez votre propre site internet
                    </p>
               </Link>
               <Link href={"https://maps.app.goo.gl/vJvJGxVXAxiBH9xQ7"}>
                    <p className="opacity-50 hover:opacity-100 hover:translate-x-3 transition-all duration-150">
                         Google Maps
                    </p>
               </Link>
               <p className="lg:ml-auto opacity-50">© 2026 Gaël Tournier</p>
          </footer>
     )
}
