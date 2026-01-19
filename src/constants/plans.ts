export type Plan = {
    id: string;
    title: string;
    desc: string;
    price: number;
    currency: string;
    badge?: string;
    buttonText: string;
    features: string[];
    highlights: string[];
};

export const PLAN: Plan = {
    id: "complete-access",
    title: "Accès Complet",
    desc: "Paiement unique • Pas d'abonnement",
    price: 179,
    currency: "€",
    badge: "Meilleure offre",
    buttonText: "Obtenir l'accès maintenant",
    features: [
        "Base de données French Tech Bordeaux complète",
        "2 300+ contacts dans 8 catégories",
        "Mises à jour incluses pendant 12 mois",
        "Client Windows, Mac, Linux",
        "Support par email",
        "Guide d'utilisation complet",
    ],
    highlights: [
        "Paiement sécurisé par Stripe",
        "Garantie satisfait ou remboursé 14 jours",
    ],
};

export const STATS = [
    {
        value: "2 300+",
        label: "Contacts vérifiés",
    },
    {
        value: "8",
        label: "Catégories",
    },
    {
        value: "3 min",
        label: "Au lieu de 3 jours",
    },
    {
        value: "3",
        label: "Plateformes (Win, Mac, Linux)",
    },
];

export const CATEGORIES = [
    "Startups",
    "ScaleUps",
    "ETI",
    "Investisseurs",
    "Incubateurs",
    "Écoles",
    "Community builders",
    "Coworkings",
];
