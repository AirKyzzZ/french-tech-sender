import { retrieveCheckoutSession } from "@/lib/stripe";
import { db } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { DownloadIcon, CheckCircleIcon, MonitorIcon, AppleIcon, TerminalIcon, BookOpenIcon, MailIcon } from "lucide-react";
import Link from "next/link";

type SearchParams = Promise<{ session_id?: string }>;

const DOWNLOAD_LINKS = {
    windows: "#", // Replace with actual download link
    mac: "#",     // Replace with actual download link
    linux: "#",   // Replace with actual download link
};

export default async function DownloadPage({
    searchParams,
}: {
    searchParams: SearchParams;
}) {
    const { session_id } = await searchParams;

    if (!session_id) {
        redirect("/#pricing");
    }

    // Verify the checkout session
    let session;
    try {
        session = await retrieveCheckoutSession(session_id);
    } catch {
        redirect("/#pricing");
    }

    if (session.payment_status !== "paid") {
        redirect("/#pricing");
    }

    // Update download count if purchase exists
    const email = session.customer_email || session.customer_details?.email;
    if (email) {
        try {
            await db.purchase.updateMany({
                where: { stripeId: session_id },
                data: { downloadCount: { increment: 1 } },
            });
        } catch {
            // Purchase might not exist yet (webhook delay), continue anyway
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto px-4 py-16">
                {/* Success Header */}
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircleIcon className="w-8 h-8 text-green-500" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                        Merci pour votre achat !
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Votre accès à French Tech Sender est maintenant actif.
                        {email && (
                            <span className="block mt-2 text-sm">
                                Un email de confirmation a été envoyé à <strong>{email}</strong>
                            </span>
                        )}
                    </p>
                </div>

                {/* Download Section */}
                <div className="bg-card/30 border border-border/50 rounded-2xl p-8 mb-8">
                    <h2 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2">
                        <DownloadIcon className="w-5 h-5 text-primary" />
                        Télécharger l&apos;application
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <DownloadButton
                            icon={<MonitorIcon className="w-6 h-6" />}
                            platform="Windows"
                            version="10, 11"
                            href={DOWNLOAD_LINKS.windows}
                        />
                        <DownloadButton
                            icon={<AppleIcon className="w-6 h-6" />}
                            platform="macOS"
                            version="Intel & Apple Silicon"
                            href={DOWNLOAD_LINKS.mac}
                        />
                        <DownloadButton
                            icon={<TerminalIcon className="w-6 h-6" />}
                            platform="Linux"
                            version="Debian/Ubuntu"
                            href={DOWNLOAD_LINKS.linux}
                        />
                    </div>
                </div>

                {/* Getting Started */}
                <div className="bg-card/30 border border-border/50 rounded-2xl p-8 mb-8">
                    <h2 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2">
                        <BookOpenIcon className="w-5 h-5 text-primary" />
                        Guide de démarrage
                    </h2>

                    <ol className="space-y-4">
                        <li className="flex items-start gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                                1
                            </span>
                            <div>
                                <h3 className="font-medium">Téléchargez et installez l&apos;application</h3>
                                <p className="text-sm text-muted-foreground">
                                    Choisissez la version correspondant à votre système d&apos;exploitation.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                                2
                            </span>
                            <div>
                                <h3 className="font-medium">Configurez votre compte email</h3>
                                <p className="text-sm text-muted-foreground">
                                    Connectez votre compte Gmail ou Outlook pour l&apos;envoi des messages.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                                3
                            </span>
                            <div>
                                <h3 className="font-medium">Personnalisez votre message</h3>
                                <p className="text-sm text-muted-foreground">
                                    Créez un template avec des variables dynamiques (nom, entreprise, etc.).
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold flex-shrink-0">
                                4
                            </span>
                            <div>
                                <h3 className="font-medium">Sélectionnez vos cibles et lancez</h3>
                                <p className="text-sm text-muted-foreground">
                                    Filtrez par catégorie et lancez l&apos;envoi automatisé.
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>

                {/* Support */}
                <div className="bg-card/30 border border-border/50 rounded-2xl p-8">
                    <h2 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                        <MailIcon className="w-5 h-5 text-primary" />
                        Besoin d&apos;aide ?
                    </h2>
                    <p className="text-muted-foreground mb-4">
                        Notre équipe est disponible pour vous aider si vous rencontrez des difficultés.
                    </p>
                    <Link
                        href="mailto:contact@klyx.fr"
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                        Contacter le support
                    </Link>
                </div>

                {/* Footer */}
                <div className="text-center mt-12 text-sm text-muted-foreground">
                    <p>
                        Cette page est unique et liée à votre achat. Gardez le lien précieusement.
                    </p>
                    <Link href="/" className="text-primary hover:underline mt-2 inline-block">
                        Retour à l&apos;accueil
                    </Link>
                </div>
            </div>
        </div>
    );
}

function DownloadButton({
    icon,
    platform,
    version,
    href,
}: {
    icon: React.ReactNode;
    platform: string;
    version: string;
    href: string;
}) {
    return (
        <a
            href={href}
            className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border/50 bg-card/20 hover:bg-card/40 transition-colors group"
        >
            <div className="text-muted-foreground group-hover:text-primary transition-colors">
                {icon}
            </div>
            <div className="text-center">
                <p className="font-medium">{platform}</p>
                <p className="text-xs text-muted-foreground">{version}</p>
            </div>
            <div className="flex items-center gap-1 text-sm text-primary">
                <DownloadIcon className="w-4 h-4" />
                Télécharger
            </div>
        </a>
    );
}
