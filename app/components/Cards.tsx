interface HeroCard {
     title: string
     description: string
     cta?: React.ReactNode
     col?: string
}

export default function HeroCard({ title, description, cta, col = "sec" }: HeroCard) {
     return (
          <article className={`*:p-4 bg-bg rounded-lg border-3 border-border shadow-neo w-full flex flex-col`}>
               <h3 className={`rounded-t-md bg-${col} text-center text-2xl relative font-bold`}>{title}</h3>
               <p className="text-xl">{description}</p>
               {cta}
          </article>
     )
}
