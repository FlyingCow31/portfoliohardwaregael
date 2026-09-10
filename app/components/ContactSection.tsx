"use client"

import React, { SubmitEvent, useEffect, useMemo, useRef, useState } from "react"

const KIND_OPTIONS = ["Montage", "Réparation", "Diagnostic", "Assistance en ligne"]
const PLACE_OPTIONS = ["À l’atelier", "À domicile", "À distance"]
const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"]
const SLOT_TIMES = [
     "09:00",
     "09:30",
     "10:00",
     "10:30",
     "11:00",
     "11:30",
     "14:00",
     "14:30",
     "15:00",
     "15:30",
     "16:00",
     "16:30",
     "17:00",
     "17:30",
     "Autre horaire",
]
const MONTH_NAMES = [
     "Janvier",
     "Février",
     "Mars",
     "Avril",
     "Mai",
     "Juin",
     "Juillet",
     "Août",
     "Septembre",
     "Octobre",
     "Novembre",
     "Décembre",
]

function chipClasses(active: boolean) {
     return active ? "border-tint bg-main text-bg" : "border-tint bg-transparent text-tint hover:bg-darker "
}

export default function ContactSection() {
     const calendarRef = useRef<HTMLDivElement>(null)
     const divRef = useRef<HTMLDivElement>(null)

     async function HandleSubmit(event: SubmitEvent<HTMLFormElement>) {
          event.preventDefault()

          if (day !== null && slot !== null) {
               setLoading(true)
          }

          const payload = {
               formLoadedAt,
               website,
               nom,
               email,
               phone,
               message,
               kind,
               place,
               day,
               month: month.label,
               slot,
          }

          try {
               const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
               })

               const data = await response.json()

               if (response.ok) {
                    setError(null)
                    setSent(true)

                    setNom("")
                    setEmail("")
                    setPhone("")
                    setMessage("")
                    setKind("Réparation")
                    setPlace(null)
                    setMonthOffset(0)
                    setDay(null)
                    setSlot(null)

                    setLoading(false)
               } else {
                    setError(data.error)

                    if (data.error?.endsWith("jour!") || data.error?.endsWith("horaire!")) {
                         calendarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
               }
          } catch (e) {
               setLoading(false)
          }
     }

     const [formLoadedAt] = useState(() => Date.now())
     const [website, setWebsite] = useState<string | null>(null)
     const [nom, setNom] = useState("")
     const [email, setEmail] = useState("")
     const [phone, setPhone] = useState("")
     const [message, setMessage] = useState("")
     const [kind, setKind] = useState("Réparation")
     const [place, setPlace] = useState<string | null>(null)
     const [sent, setSent] = useState(false)
     const [monthOffset, setMonthOffset] = useState(0)
     const [day, setDay] = useState<number | null>(null)
     const [slot, setSlot] = useState<string | null>(null)
     const [error, setError] = useState<string | null>(null)
     const [loading, setLoading] = useState(false)

     useEffect(() => {
          if (loading) {
               divRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
               document.body.style.overflow = "hidden"
          } else {
               document.body.style.overflow = ""
          }

          return () => {
               document.body.style.overflow = ""
          }
     }, [loading])

     const month = useMemo(() => {
          const now = new Date()
          const d = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1)
          const y = d.getFullYear()
          const m = d.getMonth()
          const first = (new Date(y, m, 1).getDay() + 6) % 7
          const total = new Date(y, m + 1, 0).getDate()
          const cells: (number | null)[] = []
          for (let i = 0; i < first; i++) cells.push(null)
          for (let i = 1; i <= total; i++) cells.push(i)
          while (cells.length % 7 !== 0) cells.push(null)
          return { label: `${MONTH_NAMES[m]} ${y}`, cells, y, m }
     }, [monthOffset])

     const isWeekend = (dayNum: number) => {
          const wd = new Date(month.y, month.m, dayNum).getDay()
          return wd === 0 || wd === 6
     }

     const slotSummary =
          day && slot && place
               ? `Créneau retenu : ${day} ${month.label.toLowerCase()} à ${slot} — ${place.toLowerCase()} pour le service: ${kind}.`
               : "Aucun créneau sélectionné pour le moment. Choisissez une date dans le calendrier, ou laissez vide et je vous propose des horaires."

     return (
          <section className="grid grid-cols-1 gap-6 px-4 py-8 sm:px-8 lg:grid-cols-2">
               <form onSubmit={HandleSubmit} className="flex flex-col rounded-xl border-3 border-tint bg-bg shadow-neo">
                    <h2 className="m-0 rounded-t-lg border-b-3 border-tint bg-sec p-3 text-center font-bagel text-3xl font-normal">
                         Écrivez-moi
                    </h2>
                    <div className="flex flex-col gap-4 p-5">
                         <input
                              type="text"
                              onChange={(e) => setWebsite(e.target.value)}
                              name="website"
                              tabIndex={-1}
                              autoComplete="off"
                              style={{ position: "absolute", left: "-9999px" }}
                         />
                         <label className="flex flex-col gap-1 text-lg font-bold">
                              Nom et Prénom
                              <input
                                   value={nom}
                                   onChange={(e) => setNom(e.target.value)}
                                   placeholder="Prénom Nom"
                                   className="rounded-lg border-3 border-tint bg-whity p-3 text-lg outline-none"
                                   required
                                   type="text"
                              />
                         </label>
                         <label className="flex flex-col gap-1 text-lg font-bold">
                              Email
                              <input
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="vous@email.com"
                                   className="rounded-lg border-3 border-tint bg-whity p-3 text-lg outline-none "
                                   required
                                   type="text"
                              />
                         </label>
                         <label className="flex flex-col gap-1 text-lg font-bold">
                              Téléphone
                              <input
                                   value={phone}
                                   onChange={(e) => setPhone(e.target.value)}
                                   placeholder="06 58 53 82 54"
                                   className="rounded-lg border-3 border-tint bg-whity p-3 text-lg outline-none "
                                   type="phone"
                              />
                         </label>

                         <div className="flex flex-col gap-2">
                              <span className="text-lg font-bold">Ma demande</span>
                              <div className="flex flex-wrap gap-3">
                                   {KIND_OPTIONS.map((k) => (
                                        <button
                                             key={k}
                                             type="button"
                                             onClick={() => setKind(k)}
                                             className={`cursor-pointer rounded-lg border-3 px-4 py-2 text-base font-bold transition-transform duration-150 ease-out ${chipClasses(
                                                  kind === k,
                                             )}`}
                                        >
                                             {k}
                                        </button>
                                   ))}
                              </div>
                         </div>

                         <div className="flex flex-col gap-2">
                              <span className="text-lg font-bold">Lieu</span>
                              <div className="flex flex-wrap gap-2">
                                   {PLACE_OPTIONS.map((p) => (
                                        <button
                                             key={p}
                                             type="button"
                                             onClick={() => setPlace(p)}
                                             className={`cursor-pointer rounded-lg border-3 px-4 py-2 text-base font-bold transition-transform duration-150 ease-out ${chipClasses(
                                                  place === p,
                                             )}`}
                                        >
                                             {p}
                                        </button>
                                   ))}
                              </div>
                         </div>

                         <label className="flex flex-col gap-1 text-lg font-bold">
                              Message
                              <textarea
                                   value={message}
                                   onChange={(e) => setMessage(e.target.value)}
                                   rows={5}
                                   required
                                   placeholder="Marque et modèle, symptômes, usage souhaité, budget… Adresse si besoin"
                                   className="resize-y rounded-lg border-3 border-tint bg-whity p-3 text-lg leading-relaxed outline-none "
                              />
                         </label>

                         <div className="rounded-lg border-3 border-tint bg-panel p-3.5 text-lg leading-relaxed">
                              {slotSummary}
                         </div>

                         {error && <p className="text-red-500 text-2xl border-3 p-6 rounded-lg">{error}</p>}
                         <button
                              type="submit"
                              className={`w-fit cursor-pointer rounded-lg border-3 border-tint ${sent ? "bg-green-700" : "bg-main"} px-6 py-4 text-lg font-bold text-bg shadow-neo hover:translate-x-1 hover:translate-y-1.5 hover:shadow-none`}
                         >
                              {sent ? "Demande envoyée ✓" : "Prendre rendez-vous"}
                         </button>
                    </div>
               </form>

               <div
                    ref={calendarRef}
                    id="calendardiv"
                    className={`rounded-xl border-3 border-tint shadow-neo ${
                         error?.endsWith("jour!") ? "bg-red-100" : "bg-bg"
                    }`}
               >
                    <h2 className="m-0 rounded-t-[7px] border-b-3 border-tint bg-sec p-3 text-center font-bagel text-[28px] font-normal">
                         Choisissez un créneau
                    </h2>
                    <div className="p-5">
                         <div className="flex flex-wrap items-center justify-between gap-3">
                              <div className="font-bagel text-[30px] font-normal text-main">{month.label}</div>
                              <div className="flex gap-2.5">
                                   <button
                                        onClick={() => {
                                             setMonthOffset((v) => v - 1)
                                             setDay(null)
                                        }}
                                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border-3 border-tint bg-sec text-lg font-bold shadow-neo lightbgtransition"
                                   >
                                        ‹
                                   </button>
                                   <button
                                        onClick={() => {
                                             setMonthOffset((v) => v + 1)
                                             setDay(null)
                                        }}
                                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border-3 border-tint bg-sec text-lg font-bold shadow-neo lightbgtransition"
                                   >
                                        ›
                                   </button>
                              </div>
                         </div>

                         <div className="my-5 grid grid-cols-7 gap-1">
                              {WEEKDAYS.map((w, i) => (
                                   <div key={i} className="text-center text-md font-bold text-main">
                                        {w}
                                   </div>
                              ))}
                         </div>

                         <div className="grid grid-cols-7 gap-1">
                              {month.cells.map((dn, i) => {
                                   if (dn === null) {
                                        return <div key={i} className="aspect-square min-h-11" />
                                   }
                                   const weekend = isWeekend(dn)
                                   const active = day === dn
                                   return (
                                        <button
                                             key={i}
                                             onClick={() => {
                                                  setError(null)
                                                  setDay(dn)
                                             }}
                                             className={`aspect-square min-h-11 rounded-lg border-3 p-0 text-base font-bold transition-transform duration-150 ease-out ${
                                                  weekend
                                                       ? active
                                                            ? "cursor-pointer border-tint bg-main text-bg "
                                                            : "cursor-pointer border-tint bg-red-200 text-tint shadow-none hover:bg-red-300"
                                                       : active
                                                         ? "cursor-pointer border-tint bg-main text-bg "
                                                         : "cursor-pointer border-tint bg-whity text-tint shadow-none hover:bg-darker"
                                             }`}
                                        >
                                             {dn}
                                        </button>
                                   )
                              })}
                         </div>

                         <div className="mt-6 text-lg font-bold">Créneaux disponibles</div>
                         <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                              {SLOT_TIMES.map((s) => {
                                   const active = slot === s
                                   return (
                                        <button
                                             key={s}
                                             onClick={() => {
                                                  setSlot(s)
                                                  setError(null)
                                             }}
                                             className={`cursor-pointer rounded-lg border-3 border-tint px-1.5 py-3 text-base font-bold transition-transform duration-150 ease-out ${
                                                  active ? "bg-sec text-tint" : "bg-whity text-tint hover:bg-darker"
                                             }`}
                                        >
                                             {s}
                                        </button>
                                   )
                              })}
                         </div>

                         <p className="mt-6 text-lg leading-relaxed text-main">
                              Du lundi au vendredi, 9 h – 18 h. Atelier à Colomiers, déplacement gratuit sur la commune
                              et 1 €/km sur Toulouse et alentours.
                         </p>
                         <p className="text-xl text-red-500">
                              Supplément de +10€/prestation et de +1€/km les weekends et jours fériés.
                         </p>
                    </div>
               </div>

               {loading && (
                    <div
                         ref={divRef}
                         className="bg-tint/80 p-8 text-whity h-screen w-screen fixed inset-0 overflow-hidden"
                    >
                         <div className="flex min-h-65 flex-col items-center justify-center gap-4 rounded-2xl text-center">
                              <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-white" />
                              <p className="text-2xl font-bold">Envoi en cours</p>
                              <p className="max-w-sm text-base leading-relaxed text-white/75">
                                   Vous recevrez un mail de confirmation, vérifiez vos spams...
                              </p>
                         </div>
                    </div>
               )}
          </section>
     )
}
