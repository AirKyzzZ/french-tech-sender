import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export const metadata = {
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité de French Tech Sender",
};

export default function PrivacyPage() {
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
                    Politique de Confidentialité
                </h1>

                <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
                    <p className="text-sm">
                        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            1. Introduction
                        </h2>
                        <p>
                            Cette politique de confidentialité explique comment French Tech Sender
                            collecte, utilise et protège vos données personnelles lorsque vous
                            utilisez notre site web et nos services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            2. Données collectées
                        </h2>
                        <p>Nous collectons les données suivantes :</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Adresse email (lors de l&apos;achat)</li>
                            <li>Informations de paiement (traitées par Stripe)</li>
                            <li>Données de navigation (cookies analytiques)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            3. Utilisation des données
                        </h2>
                        <p>Vos données sont utilisées pour :</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Traiter votre commande et vous donner accès au produit</li>
                            <li>Vous envoyer des emails relatifs à votre achat (confirmation, mises à jour)</li>
                            <li>Améliorer notre site et nos services</li>
                            <li>Répondre à vos demandes de support</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            4. Partage des données
                        </h2>
                        <p>
                            Nous ne vendons pas vos données personnelles. Nous partageons vos données
                            uniquement avec :
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Stripe (pour le traitement des paiements)</li>
                            <li>Nos prestataires d&apos;hébergement (pour le stockage sécurisé)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            5. Sécurité des données
                        </h2>
                        <p>
                            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger
                            vos données contre tout accès non autorisé, modification, divulgation ou
                            destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            6. Vos droits (RGPD)
                        </h2>
                        <p>
                            Conformément au Règlement Général sur la Protection des Données, vous
                            disposez des droits suivants :
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Droit d&apos;accès à vos données</li>
                            <li>Droit de rectification</li>
                            <li>Droit à l&apos;effacement</li>
                            <li>Droit à la portabilité</li>
                            <li>Droit d&apos;opposition au traitement</li>
                        </ul>
                        <p className="mt-4">
                            Pour exercer ces droits, contactez-nous à : contact@klyx.fr
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            7. Cookies
                        </h2>
                        <p>
                            Notre site utilise des cookies pour améliorer votre expérience. Vous
                            pouvez configurer votre navigateur pour refuser les cookies, mais
                            certaines fonctionnalités pourraient ne plus fonctionner correctement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            8. Conservation des données
                        </h2>
                        <p>
                            Nous conservons vos données personnelles pendant la durée nécessaire
                            aux finalités décrites ci-dessus, et conformément à nos obligations
                            légales (notamment fiscales).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            9. Modifications
                        </h2>
                        <p>
                            Nous nous réservons le droit de modifier cette politique de
                            confidentialité à tout moment. Les modifications seront publiées sur
                            cette page avec une date de mise à jour.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                            10. Contact
                        </h2>
                        <p>
                            Pour toute question concernant cette politique de confidentialité,
                            contactez-nous à : contact@klyx.fr
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
