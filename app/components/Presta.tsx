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
               <hr className="w-[80%] mx-auto border-2 border-main" />
               <div className="flex p-12 w-[80%] mx-auto">
                    <div className="flex flex-col">
                         <p className="text-xl opacity-70 text-tint">
                              Client: <span className="italic">{client}</span>
                         </p>
                         <p className="text-xl opacity-70 text-tint">
                              Réalisé le: <span className="italic">{date}</span>
                         </p>
                         <h3 className="font-bagel text-4xl py-4">{title}</h3>
                         <p className="text-xl opacity-70 text-tint w-[90%] mt-8">{desc}</p>
                    </div>
                    <div className="flex gap-6 ml-auto">
                         {images.map(({ src, alt }, i) => (
                              <Image
                                   key={i}
                                   src={`/${src}`}
                                   alt={alt}
                                   height={250}
                                   width={250}
                                   className="bg-gray-500 borderimage"
                              />
                         ))}
                    </div>
               </div>
               <hr className="w-[80%] mx-auto border-2 border-main" />
          </>
     )
}
