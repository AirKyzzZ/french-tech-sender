import { ChartPieIcon, DownloadIcon, CreditCardIcon, SettingsIcon, LucideIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
};

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Tableau de bord",
        icon: ChartPieIcon,
    },
    {
        href: "/download",
        label: "Téléchargement",
        icon: DownloadIcon,
    },
    {
        href: "/dashboard/billing",
        label: "Facturation",
        icon: CreditCardIcon,
    },
    {
        href: "/dashboard/settings",
        label: "Paramètres",
        icon: SettingsIcon,
    },
];

export const NAV_LINKS = [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Tarif", href: "#pricing" },
    { name: "Témoignages", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
];

export const FOOTER_LINKS = [
    {
        title: "Produit",
        links: [
            { name: "Fonctionnalités", href: "#features" },
            { name: "Tarif", href: "#pricing" },
            { name: "FAQ", href: "#faq" },
            { name: "Téléchargement", href: "/download" },
        ],
    },
    {
        title: "Ressources",
        links: [
            { name: "Guide d'utilisation", href: "#" },
            { name: "Support", href: "mailto:contact@klyx.fr" },
        ],
    },
    {
        title: "Légal",
        links: [
            { name: "Mentions légales", href: "/terms" },
            { name: "Politique de confidentialité", href: "/privacy" },
            { name: "CGV", href: "/terms" },
        ],
    },
];
