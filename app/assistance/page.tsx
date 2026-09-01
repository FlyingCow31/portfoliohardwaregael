import Navbar, { MobileNav } from "../components/Navbar"

export default function Page() {
     return (
          <>
               <main className="bg-bg min-h-screen">
                    <MobileNav />
                    <Navbar />
                    <div className="bg-bg p-3 font-dm"></div>
               </main>
          </>
     )
}
