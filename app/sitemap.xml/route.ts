import { NextResponse } from "next/server"

const SITE_URL = "https://hardware.gaeltournier.dev"

const staticPages = ["", "services", "assistance", "contact", "mentions"]

function generateSiteMap() {
     const urls = staticPages.map((p) => `${SITE_URL}/${p}`.replace(/([^:]\/)\/+$/, "$1"))
     return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map(
               (url) =>
                    `  <url>\n    <loc>${url}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`,
          )
          .join("\n")}\n</urlset>`
}

export function GET() {
     const sitemap = generateSiteMap()
     return new NextResponse(sitemap, {
          headers: {
               "Content-Type": "application/xml",
               "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
          },
     })
}
