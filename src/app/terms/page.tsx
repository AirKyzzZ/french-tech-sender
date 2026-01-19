import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export const metadata = {
    title: "Conditions Générales de Vente",
    description: "Conditions générales de vente de French Tech Sender",
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-3xl mx-auto px-4 py-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Retour à l&apos;accueil
                </Link>

                <h1 className="text-3xl font-heading font-bold mb-8">
                    Conditions Générales de Vente
                </h1>

                <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
                    <p className="text-sm">
                        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            Article 1 - Objet
                        </h2>
                        <p>
                            Les présentes conditions générales de vente régissent la vente du logiciel
                            French Tech Sender et de la base de données associée.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            Article 2 - Prix
                        </h2>
                        <p>
                            Le prix du produit est de 179€ TTC, payable en une seule fois. Ce prix
                            comprend l&apos;accès au logiciel et à la base de données, ainsi que les mises
                            à jour pendant une période de 12 mois.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            Article 3 - Paiement
                        </h2>
                        <p>
                            Le paiement s&apos;effectue par carte bancaire via la plateforme sécurisée
                            Stripe. L&apos;accès au produit est immédiat après validation du paiement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            Article 4 - Droit de rétractation
                        </h2>
                        <p>
                            Conformément à notre politique commerciale, vous bénéficiez d&apos;un délai de
                            14 jours pour demander un remboursement complet si le produit ne répond
                            pas à vos attentes. La demande doit être adressée par email à notre
                            service client.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            Article 5 - Licence d&apos;utilisation
                        </h2>
                        <p>
                            L&apos;achat confère une licence d&apos;utilisation personnelle et non transférable.
                            La revente, le partage ou la distribution de la base de données ou du
                            logiciel est strictement interdite.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            Article 6 - Utilisation conforme
                        </h2>
                        <p>
                            L&apos;utilisateur s&apos;engage à utiliser le produit conformément à la
                            réglementation en vigueur, notamment le RGPD. Il est responsable du
                            contenu des messages envoyés et doit inclure une option de désinscription.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            Article 7 - Limitation de responsabilité
                        </h2>
                        <p>
                            French Tech Sender ne peut être tenu responsable de l&apos;utilisation faite
                            par l&apos;acheteur de la base de données ni des conséquences de cette
                            utilisation.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            Article 8 - Mises à jour
                        </h2>
                        <p>
                            Les mises à jour de la base de données sont incluses pendant 12 mois à
                            compter de la date d&apos;achat. Au-delà, l&apos;accès aux mises à jour peut
                            nécessiter un renouvellement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            Article 9 - Contact
                        </h2>
                        <p>
                            Pour toute question concernant ces conditions, veuillez nous contacter à
                            l&apos;adresse : contact@klyx.fr
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
