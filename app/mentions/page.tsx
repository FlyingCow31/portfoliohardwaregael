import Footer from "../components/Footer"
import Navbar, { MobileNav } from "../components/Navbar"

const verified = { nom: "", slot: "test", month: "test", message: "test", kind: "test", day: "mdl" }

export default function Page() {
     return (
          <>
               <Navbar />
               <MobileNav />
               <main className="bg-bg pl-4 pb-40 lg:pb-0">
                    <h1 className="font-bagel text-4xl text-center mb-10">Mentions Légales</h1>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">1. Éditeur du site</h2>
                         <p>
                              Le site <strong>hardware.gaeltournier.dev </strong> est édité par&nbsp;:
                              <br />
                              <strong>Gaël TOURNIER</strong>, entrepreneur individuel (micro-entreprise)
                              <br />
                              Siège social&nbsp;: 22 Allée du Loiret, 31770 Colomiers, France
                              <br />
                              SIREN&nbsp;: 105 820 930
                              <br />
                              SIRET (siège)&nbsp;: 105 820 930 00011
                              <br />
                              Code APE&nbsp;: 62.01Z — Programmation informatique
                              <br />
                              Adresse e-mail&nbsp;:{" "}
                              <a href="mailto:contact@gaeltournier.dev" className="underline">
                                   contact@gaeltournier.dev
                              </a>
                              <br />
                              TVA non applicable, article 293 B du Code général des impôts
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">2. Directeur de la publication</h2>
                         <p>Gaël Tournier, en qualité d&#39;éditeur du site.</p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">3. Hébergement</h2>
                         <p>
                              Le site est hébergé par&nbsp;:
                              <br />
                              <strong>Vercel Inc.</strong>
                              <br />
                              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
                              <br />
                              <a
                                   href="https://vercel.com"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="underline"
                              >
                                   vercel.com
                              </a>
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">4. Propriété intellectuelle</h2>
                         <p>
                              L&#39;ensemble des contenus présents sur ce site (textes, images, graphismes, logo, code
                              source, structure) est, sauf mention contraire, la propriété exclusive de Gaël Tournier et
                              protégé par le Code de la propriété intellectuelle.
                              <br />
                              Toute reproduction, représentation, modification ou exploitation, totale ou partielle,
                              sans autorisation écrite préalable est interdite.
                              <br />
                              Les projets clients présentés dans le portfolio sont publiés avec l&#39;accord de leurs
                              titulaires respectifs&nbsp;; les marques et logos qui y figurent demeurent la propriété de
                              leurs détenteurs.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">5. Données personnelles</h2>
                         <p>
                              Les données collectées via le formulaire de contact (nom, adresse e-mail, message) sont
                              traitées par Gaël Tournier, responsable du traitement, dans le seul but de répondre aux
                              demandes reçues. La base légale du traitement est l&#39;intérêt légitime à répondre aux
                              sollicitations, ou l&#39;exécution de mesures précontractuelles.
                              <br />
                              Ces données ne font l&#39;objet d&#39;aucune cession à des tiers et sont conservées
                              pendant une durée maximale de trois (3) ans à compter du dernier contact.
                              <br />
                              Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés, vous
                              disposez d&#39;un droit d&#39;accès, de rectification, d&#39;effacement, de limitation,
                              d&#39;opposition et de portabilité de vos données. Vous pouvez les exercer à
                              l&#39;adresse&nbsp;:{" "}
                              <a href="mailto:contact@gaeltournier.dev" className="underline">
                                   contact@gaeltournier.dev
                              </a>
                              .
                              <br />
                              Vous avez également le droit d&#39;introduire une réclamation auprès de la CNIL (
                              <a
                                   href="https://www.cnil.fr"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="underline"
                              >
                                   www.cnil.fr
                              </a>
                              )
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">6. Cookies et mesure d&#39;audience</h2>
                         <p>
                              Ce site utilise Vercel Analytics et Vercel Speed Insights à des fins de mesure
                              d&#39;audience et de performance. Ces outils ne déposent pas de cookies et ne collectent
                              aucune donnée permettant d&#39;identifier personnellement les visiteurs&nbsp;; à ce titre,
                              ils ne nécessitent pas de recueil de consentement préalable.
                              <br />
                              Aucun cookie publicitaire ou de suivi tiers n&#39;est utilisé sur ce site.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">7. Liens hypertextes</h2>
                         <p>
                              Ce site peut contenir des liens vers des sites tiers. Gaël Tournier n&#39;exerce aucun
                              contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à
                              l&#39;usage qui pourrait en être fait.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">8. Responsabilité</h2>
                         <p>
                              Les informations présentes sur ce site sont fournies à titre indicatif et peuvent être
                              modifiées à tout moment. Gaël Tournier s&#39;efforce d&#39;en assurer l&#39;exactitude
                              mais ne saurait être tenu responsable des erreurs, omissions ou d&#39;une éventuelle
                              indisponibilité du service.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">9. Droit applicable</h2>
                         <p>
                              Les présentes mentions légales sont soumises au droit français. En cas de litige, et à
                              défaut de résolution amiable, les tribunaux français seront seuls compétents.
                         </p>
                    </section>
                    <Footer />
               </main>
          </>
     )
}
