// components/BusinessJsonLd.tsx
const SITE_URL = "https://chezgael.fr"

const jsonLd = {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "@id": `${SITE_URL}#business`,
     name: "Chez Gaël",
     image: `${SITE_URL}/og-image.png`,
     telephone: "+33-6-58-53-82-54",
     address: {
          "@type": "PostalAddress",
          streetAddress: "02 Place de l'Aigoual",
          addressLocality: "Colomiers",
          postalCode: "31770",
          addressCountry: "FR",
     },
     geo: {
          "@type": "GeoCoordinates",
          latitude: 43.60947278222491,
          longitude: 1.3415542941249115,
     },
     hasMap: "https://maps.app.goo.gl/S9qS8Ng38cddovww5",
     areaServed: ["Colomiers", "Toulouse"],
     priceRange: "€€",
     openingHoursSpecification: [
          {
               "@type": "OpeningHoursSpecification",
               dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
               opens: "09:00",
               closes: "18:00",
          },
     ],
     hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de réparation et maintenance informatique",
          itemListElement: [
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Montage",
                         description:
                              "Montage complet avec cable management et optimisation, à l'atelier de Colomiers ou à domicile sur Toulouse et ses environs. Windows, mises à jour et drivers inclus.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "50",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "50",
                         priceCurrency: "EUR",
                         description: "À partir de 50€",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Réparation",
                         description:
                              "Réparations superficielles ne nécessitant pas de soudure : écran noir, surchauffe, lenteur. PC fixes et portables, sur Colomiers, Toulouse et environs.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "29",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "29",
                         priceCurrency: "EUR",
                         description: "À partir de 29€",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Diagnostic",
                         description:
                              "Tests méthodiques pour diagnostiquer vos appareils. Diagnostic en distanciel possible, ou physique à l'atelier de Colomiers ou à domicile à Toulouse et environs.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "29",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "29",
                         priceCurrency: "EUR",
                         description: "À partir de 29€ par heure, déduit si réparation.",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Upgrade",
                         description: "Ajout de RAM, migration vers un SSD NVMe M.2, nouvelle carte graphique.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "29",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "29",
                         priceCurrency: "EUR",
                         description: "À partir de 29€ | ~1h",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Récupération de données",
                         description:
                              "Niveau 1 uniquement : clé USB détectée quelques secondes puis qui redisparaît. Les niveaux suivants nécessitent un centre de récupération de données.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "49",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "49",
                         priceCurrency: "EUR",
                         description: "À partir de 49€ | ~1h",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Optimisation",
                         description: "Optimisation carte graphique, CPU, overclocking, undervolting.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "29",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "29",
                         priceCurrency: "EUR",
                         description: "À partir de 29€ | ~1h",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Assistance à distance",
                         description:
                              "Assistance informatique en distanciel pour les services éligibles, tarifs fixes.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "29",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "29",
                         priceCurrency: "EUR",
                         description: "À partir de 29€ la demie-heure",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: { "@type": "Country", name: "France" },
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Self-hosting",
                         description:
                              "Montage, configuration et déploiement d'applications auto-hébergées pour remplacer les abonnements Netflix, Spotify, Google Photos. Maintenance mensuelle incluse le premier mois. Hardware non inclus.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "150",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "150",
                         priceCurrency: "EUR",
                         description: "À partir de 150€",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Réseau local d'entreprise",
                         description:
                              "Gestion du réseau des PME/TPE : firewall, accès VPN, accès à distance. Maintenance et suivi inclus le premier mois.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "250",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "250",
                         priceCurrency: "EUR",
                         description: "À partir de 250€",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Recyclage",
                         description:
                              "Reprise gratuite d'anciens PC pour recyclage ou transformation en serveur. Premier service self-hosted offert avec une création de serveur.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "0",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "0",
                         priceCurrency: "EUR",
                         description: "Gratuit | À partir de 300€",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
               {
                    "@type": "Offer",
                    itemOffered: {
                         "@type": "Service",
                         name: "Nettoyage",
                         description:
                              "Nettoyage en détail et remplacement de la pâte thermique, à l'atelier de Colomiers ou à domicile à Toulouse et environs.",
                         provider: { "@id": `${SITE_URL}#business` },
                    },
                    price: "29",
                    priceCurrency: "EUR",
                    priceSpecification: {
                         "@type": "UnitPriceSpecification",
                         price: "29",
                         priceCurrency: "EUR",
                         description: "À partir de 29€ (fixes) | 39€ (portables)",
                    },
                    availability: "https://schema.org/InStock",
                    areaServed: [
                         { "@type": "City", name: "Colomiers" },
                         { "@type": "City", name: "Toulouse" },
                    ],
               },
          ],
     },
}

export function BusinessJsonLd() {
     return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
}
