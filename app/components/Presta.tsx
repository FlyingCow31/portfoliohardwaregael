import Image from "next/image"

type Prestas = {
     client?: string
     date: string
     title: string
     desc: string
     images: { src: string; alt: string }[]
}

export default function Prestations({ client = "Particulier", date, title, desc, images }: Prestas) {
     return (
          <>
               <hr className=" w-[90%] lg:w-[80%] mx-auto border-2 border-main" />
               <div className="flex lg:flex-row flex-col p-12 w-[90%] md:w-full lg:w-[80%] mx-auto lg:gap-6">
                    <div className="flex flex-col text-center md:text-nowrap">
                         <p className="text-xl opacity-70 text-tint">
                              Client: <span className="italic">{client}</span>
                         </p>
                         <p className="text-xl opacity-70 text-tint">
                              Réalisé le: <span className="italic">{date}</span>
                         </p>
                         <h3 className="font-bagel text-5xl lg:text-4xl py-4">{title}</h3>
                         <p className="text-xl opacity-70 text-tint w-[90%] mt-8">{desc}</p>
                    </div>
                    <div className="lg:hidden flex flex-col md:flex-row gap-6 ml-auto mt-6 mx-auto">
                         {images.slice(0, 2).map(({ src, alt }, i) => (
                              <Image
                                   key={i}
                                   src={`/exemples/${src}`}
                                   alt={alt}
                                   height={250}
                                   width={250}
                                   className="bg-gray-500 borderimage"
                              />
                         ))}
                    </div>
                    <div className="hidden lg:flex flex-row gap-6 ml-auto mt-0">
                         {images.map(({ src, alt }, i) => (
                              <Image
                                   key={i}
                                   src={`/exemples/${src}`}
                                   alt={alt}
                                   height={250}
                                   width={250}
                                   className="bg-gray-500 borderimage"
                              />
                         ))}
                    </div>
               </div>
               <hr className="w-[90%] lg:w-[80%] mx-auto border-2 border-main" />
          </>
     )
}
