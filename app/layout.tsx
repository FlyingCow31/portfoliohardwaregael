import type { Metadata } from "next"
import { Bagel_Fat_One, DM_Sans } from "next/font/google"
import "./globals.css"
import { BusinessJsonLd } from "./components/serviceJsonLd"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const bagel = Bagel_Fat_One({
     weight: "400",
     variable: "--font-bagel",
     subsets: ["latin"],
})

const dm_sans = DM_Sans({
     variable: "--font-geist-mono",
     subsets: ["latin"],
})

export const metadata: Metadata = {
     metadataBase: new URL("https://chezgael.fr"),
     title: {
          default: "Chez Gaël - Réparation PC à Colomiers, Toulouse",
          template: "%s | Chez Gaël",
     },
     description:
          "Réparation et montage d'ordinateurs et dépannage informatique à Colomiers et Toulouse. Diagnostic, réparation, assistance à distance.",
     openGraph: {
          siteName: "Chez Gaël",
          locale: "fr_FR",
          type: "website",
     },
     robots: { index: true, follow: true },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
     return (
          <html lang="fr" className={`${bagel.variable} ${dm_sans.variable} font-dm h-full antialiased`}>
               <body>
                    <SpeedInsights />
                    <Analytics />
                    <BusinessJsonLd />
                    {children}
               </body>
          </html>
     )
}
