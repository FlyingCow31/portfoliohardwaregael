import Link from "next/link"
import Image from "next/image"

export default function Footer() {
     return (
          <footer className="flex flex-col lg:flex-row gap-6 p-4 items-center">
               <Image src={"/logo.png"} alt="Logo Chez Gaël" width={161} height={32} />
               <Link href={"/mentions"}>
                    <p>Mentions légales</p>
               </Link>
               <Link href={"/cgv"}>
                    <p>CGV</p>
               </Link>
               <Link href={"https://gaeltournier.dev"}>Créez votre propre site internet</Link>
               <p className="lg:ml-auto opacity-50">© 2026 Gaël Tournier</p>
          </footer>
     )
}
