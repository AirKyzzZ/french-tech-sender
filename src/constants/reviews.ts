type Review = {
    name: string;
    role: string;
    review: string;
    img: string;
};

export const REVIEWS: Review[] = [
    {
        name: "Marie L.",
        role: "Étudiante en école de commerce",
        review: "J'ai trouvé mon stage en moins d'une semaine grâce à cet outil. Au lieu de passer des heures sur LinkedIn, j'ai pu contacter directement les bonnes personnes.",
        img: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        name: "Thomas D.",
        role: "Développeur en recherche d'alternance",
        review: "Incroyable gain de temps ! La base de données est vraiment complète et les contacts sont à jour. J'ai décroché mon alternance en 2 semaines.",
        img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        name: "Sophie M.",
        role: "Business Developer B2B",
        review: "Outil indispensable pour la prospection. J'ai pu identifier et contacter rapidement les décideurs de l'écosystème startup bordelais.",
        img: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        name: "Alexandre R.",
        role: "Fondateur de startup",
        review: "Parfait pour développer notre réseau local. Les contacts sont qualifiés et bien catégorisés. Un excellent investissement.",
        img: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        name: "Camille B.",
        role: "Responsable RH",
        review: "Nous l'utilisons pour sourcer des talents dans l'écosystème tech. La base de données nous fait gagner un temps précieux.",
        img: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        name: "Lucas P.",
        role: "Étudiant en informatique",
        review: "Simple, efficace et abordable. J'ai pu envoyer des candidatures ciblées à toutes les startups qui m'intéressaient.",
        img: "https://randomuser.me/api/portraits/men/6.jpg",
    },
];
