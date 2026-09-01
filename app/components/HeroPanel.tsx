import type { ReactNode } from "react"

export default function HeroMainPanel({ children, height = "lg:h-screen" }: { children: ReactNode; height?: string }) {
     return (
          <div className="bg-bg p-3 font-dm">
               <section className={`relative lg:overflow-hidden rounded-lg bg-brand-base px-10 py-12 ${height}`}>
                    <div className="bg-blobs pointer-events-none absolute inset-0 rounded-lg" />
                    <div className="bg-hatch-diagonal pointer-events-none absolute bottom-0 left-0 h-64 w-64" />

                    <div className="relative lg:grid grid-cols-5 lg:grid-rows-[auto_1fr_auto_auto] rounded-lg">
                         {children}
                    </div>
               </section>
          </div>
     )
}
