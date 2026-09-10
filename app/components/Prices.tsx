import Link from "next/link"

interface Services {
     title: string
     text: string
     price: string
     line?: string[]
}

export default function MainPrice({ title, text, price, line }: Services) {
     return (
          <>
               <hr />
               <article className="flex flex-col lg:flex-row gap-6 lg:gap-0 w-full p-12 items-center lg:w-[90%] mx-auto">
                    <div className="w-full self-start">
                         <h3 className="font-bagel text-4xl lg:text-6xl text-main">{title}</h3>
                         <p className="font-bold text-2xl my-6">{price}</p>
                         <Link href={"/contact"} className="inline-flex w-fit self-start">
                              <span className="darkbgtransition px-12 py-2 border-3 shadow-neo text-2xl lg:text-3xl text-bg w-fit bg-main rounded-lg border-tint">
                                   Réserver
                              </span>
                         </Link>
                    </div>
                    <div className="flex flex-col w-full">
                         <p className="text-xl lg:text-3xl leading-relaxed">{text}</p>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 text-xl items-start mt-6">
                              {line?.map((item, i) => (
                                   <p
                                        key={i}
                                        className="flex items-start gap-2 underline underline-offset-4 decoration-tint text-main"
                                   >
                                        <span className="text-sec shrink-0">→</span>
                                        <span>{item}</span>
                                   </p>
                              ))}
                         </div>
                    </div>
               </article>
               <hr />
          </>
     )
}
export function SecPrice({ title, text, price }: Services) {
     return (
          <article className="lg:border-r-3 flex flex-col text-center items-center p-4 border-t-3">
               <h3 className="text-4xl font-bagel text-main">{title}</h3>
               <p className="lg:w-[80%] text-center text-xl my-3">{text}</p>
               <p className="font-bold text-2xl">{price}</p>
          </article>
     )
}
