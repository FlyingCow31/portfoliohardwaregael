import { Metadata } from "next"
import Footer from "../components/Footer"
import Navbar, { MobileNav } from "../components/Navbar"

export const metadata: Metadata = {
     title: "CGV Chez Gaël",
     description: "Conditions Générales de Vente du site de réparation de PC Chez Gaël.",
     openGraph: {
          title: "Chez Gaël - CGV",
          description: "Conditions Générales de vente Chez Gaël",
          images: ["/og-image.png"],
     },
     alternates: { canonical: "/cgv" },
}

export default function Page() {
     return (
          <>
               <Navbar />
               <MobileNav />
               <main className="flex flex-col md:flex-1 overflow-y-auto ml-4 lg:ml-12 pb-40 lg:pb-0">
                    <h1 className="bigtitle text-center mb-2">Conditions Générales de Vente</h1>
                    <p className="text-center opacity-60 mb-10">Version du 10 septembre 2026</p>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">1. Identification du prestataire</h2>
                         <p>
                              Les présentes conditions générales de vente (ci-après les «&nbsp;CGV&nbsp;») sont conclues
                              entre&nbsp;:
                              <br />
                              <strong>Gaël TOURNIER</strong>, entrepreneur individuel exerçant sous le régime de la
                              micro-entreprise, dont le siège est situé 22 Allée du Loiret, 31770 Colomiers (France),
                              immatriculé sous le numéro SIREN 105 820 930 (SIRET 105 820 930 00011), code APE 62.01Z —
                              Programmation informatique, joignable à l&#39;adresse
                              <a href="mailto:contact@gaeltournier.dev" className="underline">
                                   contact@gaeltournier.dev
                              </a>
                              , ci-après le «&nbsp;Prestataire&nbsp;»,
                              <br />
                              et toute personne physique ou morale passant commande, ci-après le «&nbsp;Client&nbsp;».
                         </p>
                         <p className="mt-3">
                              TVA non applicable, article 293 B du Code général des impôts. Les prix sont exprimés en
                              euros, nets de taxe.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">2. Objet</h2>
                         <p>
                              Les présentes CGV ont pour objet de définir les conditions dans lesquelles le Prestataire
                              fournit au Client des prestations de diagnostic, montage, réparation, maintenance,
                              optimisation, assistance informatique à distance, déploiement de solutions auto-hébergées
                              (self-hosting), gestion de réseau local d&#39;entreprise et recyclage de matériel
                              informatique, telles que décrites sur le site. Toute commande ou demande de devis implique
                              l&#39;acceptation sans réserve des présentes CGV.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">3. Devis et diagnostic préalable</h2>
                         <p>
                              Toute intervention fait l&#39;objet d&#39;un devis préalable, gratuit, établi après
                              échange avec le Client ou après diagnostic.
                         </p>
                         <p className="mt-3">
                              Le diagnostic est facturé 29&nbsp;€ lorsqu&#39;il nécessite une intervention physique du
                              Prestataire (atelier ou domicile), que le Client accepte ou non le devis établi à
                              l&#39;issue de ce diagnostic. Le montant du diagnostic est déduit du prix total si le
                              Client accepte la réparation proposée.
                         </p>
                         <p className="mt-3">
                              Le devis est valable 30 jours à compter de sa date d&#39;émission. Passé ce délai, le
                              Prestataire se réserve le droit de le réviser, notamment en cas de variation du prix des
                              pièces.
                         </p>
                         <p className="mt-3">
                              Le devis n&#39;engage le Prestataire que sur la base des informations et de l&#39;état du
                              matériel constatés au moment du diagnostic. Toute panne ou dysfonctionnement
                              supplémentaire découvert en cours d&#39;intervention fera l&#39;objet d&#39;un devis
                              complémentaire soumis à l&#39;accord du Client avant toute poursuite des travaux.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">4. Prix et modalités de paiement</h2>
                         <p>
                              Les prix des prestations sont ceux indiqués sur le site ou dans le devis accepté par le
                              Client, exprimés en euros.
                         </p>
                         <p className="mt-3">
                              Paiement d'un acompte de 30% nécessaire au début de la prestation, solde à la livraison.
                              Paiment par carte, espèces ou virement bancaire. En cas de commande de pièces, un acompte
                              de 50% sera demandé.
                         </p>
                         <p className="mt-3">
                              En cas de commande de pièces spécifiques par le Prestataire pour le compte du Client, un
                              acompte sera demandé avant commande. Les prix des pièces sont susceptibles de varier entre
                              l&#39;établissement du devis et la commande effective en raison des fluctuations du marché
                              des composants&nbsp;; le Client en sera informé avant toute commande.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">5. Déplacements</h2>
                         <p>
                              Le Prestataire intervient à son atelier situé à Colomiers (31), sur rendez-vous, ou au
                              domicile du Client.
                         </p>
                         <p className="mt-3">
                              Les déplacements sont gratuits sur la commune de Colomiers. Pour Toulouse et les communes
                              alentour, les frais de déplacement s&#39;élèvent à 1&nbsp;€/km, calculés depuis
                              l&#39;atelier du Prestataire.
                         </p>
                         <p className="mt-3">
                              En cas d&#39;annulation du rendez-vous par le Client moins de 24h avant l&#39;heure
                              prévue, ou d&#39;absence du Client au rendez-vous, les frais de déplacement engagés
                              pourront être facturés au Client.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">6. Fourniture des pièces et garantie</h2>
                         <p>
                              Sauf accord contraire, les pièces (RAM, SSD, cartes graphiques, etc.) nécessaires à la
                              prestation sont fournies par le Prestataire, sauf si le Client fournit lui-même son
                              matériel.
                         </p>
                         <p className="mt-3">
                              Les pièces neuves fournies par le Prestataire bénéficient de la garantie constructeur
                              applicable, dont la durée et les modalités sont propres à chaque fabricant et communiquées
                              au Client à la remise du matériel.
                         </p>
                         <p className="mt-3">
                              La main d&#39;œuvre du Prestataire (montage, réparation) est garantie 1 mois à compter de
                              la restitution du matériel, contre tout défaut résultant directement de l&#39;intervention
                              réalisée. Cette garantie ne couvre pas&nbsp;: une mauvaise manipulation du Client
                              postérieure ou antérieure à l&#39;intervention, une casse accidentelle, l&#39;usure
                              normale, ou une panne sans lien avec la prestation effectuée.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">7. Perte de données</h2>
                         <p>
                              Le Client est seul responsable de la sauvegarde préalable de ses données avant toute
                              intervention (montage, réparation, diagnostic, nettoyage, upgrade).
                         </p>
                         <p className="mt-3">
                              Le Prestataire ne pourra être tenu responsable d&#39;une perte de données survenant à
                              l&#39;occasion de son intervention, sauf faute lourde ou intentionnelle de sa part dûment
                              prouvée.
                         </p>
                         <p className="mt-3">
                              Concernant le service de récupération de données de niveau 1 (matériel détecté brièvement
                              puis redisparaissant), le Prestataire s&#39;engage à une obligation de moyens et non de
                              résultat&nbsp;: le succès de la récupération n&#39;est pas garanti. Les niveaux de
                              récupération supérieurs nécessitant un centre spécialisé ne sont pas couverts par cette
                              prestation et seront réorientés vers un tiers compétent.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">8. Assistance informatique à distance</h2>
                         <p>
                              La prestation d&#39;assistance à distance nécessite l&#39;installation par le Client
                              d&#39;un logiciel de prise de contrôle à distance (AnyDesk, TeamViewer ou équivalent) et
                              son consentement explicite préalable à chaque session.
                         </p>
                         <p className="mt-3">
                              Le Client demeure présent devant son écran pendant toute la durée de l&#39;intervention et
                              peut interrompre la session de prise de contrôle à tout moment.
                         </p>
                         <p className="mt-3">
                              Le Prestataire s&#39;engage à une stricte confidentialité concernant toute donnée à
                              laquelle il pourrait avoir accès au cours de la session, et à ne consulter que ce qui est
                              strictement nécessaire à la résolution du problème signalé.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">9. Solutions auto-hébergées (self-hosting)</h2>
                         <p>
                              Cette prestation comprend le montage, la configuration et le déploiement
                              d&#39;applications auto-hébergées sur le matériel du Client (le matériel lui-même
                              n&#39;est pas fourni par le Prestataire, sauf accord distinct).
                         </p>
                         <p className="mt-3">
                              Une maintenance est incluse gratuitement le premier mois suivant la mise en service.
                              Au-delà, la maintenance fait l&#39;objet d&#39;un tarif mensuel distinct communiqué au
                              Client, avec reconduction automatique sauf accord exprès.
                         </p>
                         <p className="mt-3">
                              Le Prestataire ne garantit pas la disponibilité continue du service une fois la prestation
                              livrée, celle-ci dépendant notamment de l&#39;infrastructure et de la connexion internet
                              du Client, hors de son contrôle.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">
                              10. Réseau local d&#39;entreprise (clients professionnels)
                         </h2>
                         <p>
                              Cette prestation (pare-feu, accès VPN, accès à distance) est réservée aux clients
                              professionnels (PME/TPE).
                         </p>
                         <p className="mt-3">
                              Le Prestataire s&#39;engage à une stricte confidentialité sur les informations et données
                              d&#39;entreprise auxquelles il a accès dans le cadre de cette prestation.
                         </p>
                         <p className="mt-3">
                              La responsabilité du Prestataire ne saurait être engagée en cas d&#39;incident de sécurité
                              survenant après la livraison de la prestation, notamment si la configuration mise en place
                              a été modifiée par le Client ou un tiers postérieurement à l&#39;intervention.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">11. Recyclage et reprise de matériel</h2>
                         <p>
                              Le Client garantit être propriétaire légitime du matériel remis au Prestataire dans le
                              cadre d&#39;une reprise pour recyclage ou transformation en serveur.
                         </p>
                         <p className="mt-3">
                              Sauf demande contraire du Client, le Prestataire procède à un effacement sécurisé des
                              données présentes sur les supports de stockage avant tout recyclage ou réemploi du
                              matériel repris.
                         </p>
                         <p className="mt-3">
                              La reprise de matériel dans le cadre d&#39;une prestation self-hosting (premier service
                              offert) est soumise aux conditions communiquées au moment de l&#39;offre.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">12. Restitution et matériel non récupéré</h2>
                         <p>
                              Le Client est informé par le Prestataire de la disponibilité de son matériel à l&#39;issue
                              de l&#39;intervention.
                         </p>
                         <p className="mt-3">
                              Passé un délai de 3 mois à compter de cette information sans que le Client n&#39;ait
                              récupéré son matériel, celui-ci sera considéré comme abandonné au sens de l&#39;article
                              2276 du Code civil, et le Prestataire pourra en disposer librement (recyclage, don,
                              destruction), sans indemnité due au Client.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">13. Droit de rétractation</h2>
                         <p>
                              Conformément à l&#39;article L.221-28 du Code de la consommation, le droit de rétractation
                              ne s&#39;applique pas aux contrats de fourniture de services pleinement exécutés avant la
                              fin du délai de rétractation et dont l&#39;exécution a commencé après accord préalable
                              exprès du Client et renoncement exprès à son droit de rétractation.
                         </p>
                         <p className="mt-3">
                              Pour toute prestation demandée en urgence ou dont l&#39;exécution commence avant
                              l&#39;expiration du délai légal de 14 jours, le Client reconnaît expressément renoncer à
                              son droit de rétractation pour la part de prestation déjà exécutée.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">14. Responsabilité</h2>
                         <p>
                              Le Prestataire s&#39;engage à exécuter ses prestations avec soin et selon les règles de
                              l&#39;art.
                         </p>
                         <p className="mt-3">
                              La responsabilité du Prestataire ne pourra être engagée en cas de force majeure, de
                              mauvaise utilisation du matériel par le Client après intervention, ou de vice caché du
                              matériel non décelable lors du diagnostic.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">15. Données personnelles</h2>
                         <p>
                              Les données personnelles collectées (nom, coordonnées, informations relatives au matériel
                              confié) sont traitées conformément au RGPD et à la loi Informatique et Libertés. Les
                              données sont supprimées dès la fin de la mission, ou à défaut, 30 jours après la dernière
                              communication. Elles peuvent être supprimée à tout moment sur demande à l'adresse mail{" "}
                              <a href="mailto:contact@gaeltournier.dev" className="underline">
                                   contact@gaeltournier.dev
                              </a>
                              .
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">16. Réclamations et médiation</h2>
                         <p>
                              En cas de litige, le Client est invité à contacter en premier lieu le Prestataire à
                              l&#39;adresse
                              <a href="mailto:contact@gaeltournier.dev" className="underline">
                                   contact@gaeltournier.dev
                              </a>
                              . À défaut de résolution amiable, le Client consommateur peut recourir gratuitement au
                              service de médiation de la consommation, conformément aux articles L.616-1 et R.616-1 du
                              Code de la consommation.
                         </p>
                    </section>

                    <section className="mb-8">
                         <h2 className="text-2xl font-bold mb-3">17. Droit applicable et litiges</h2>
                         <p>
                              Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut de
                              résolution amiable, les tribunaux compétents seront ceux du ressort du siège social du
                              Prestataire, sous réserve des règles impératives applicables aux consommateurs.
                         </p>
                    </section>

                    <Footer />
               </main>
          </>
     )
}
