"use client";

import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
    {
        question: "Qu'est-ce que French Tech Sender exactement ?",
        answer: "French Tech Sender est un outil qui vous permet de contacter rapidement et facilement plus de 2 300 acteurs de l'écosystème French Tech Bordeaux. Il inclut une base de données vérifiée et un client d'envoi d'emails personnalisés disponible sur Windows, Mac et Linux.",
    },
    {
        question: "Comment les contacts sont-ils vérifiés ?",
        answer: "Chaque contact est vérifié manuellement avant d'être ajouté à la base de données. Nous vérifions que les emails sont valides, que les personnes sont toujours en poste, et que les informations sont à jour. La base est mise à jour régulièrement.",
    },
    {
        question: "Est-ce légal d'utiliser cet outil pour de la prospection ?",
        answer: "Oui, tant que vous respectez le RGPD. Nos contacts sont des professionnels dont les coordonnées sont publiques. Vous devez inclure une option de désinscription dans vos messages et respecter les demandes de retrait.",
    },
    {
        question: "Y a-t-il un abonnement mensuel ?",
        answer: "Non, c'est un paiement unique de 179€. Vous obtenez un accès complet à la base de données et aux mises à jour pendant 12 mois, sans frais supplémentaires.",
    },
    {
        question: "Puis-je obtenir un remboursement si je ne suis pas satisfait ?",
        answer: "Oui, nous offrons une garantie satisfait ou remboursé de 14 jours. Si l'outil ne répond pas à vos attentes, contactez-nous et nous vous rembourserons intégralement.",
    },
    {
        question: "Sur quels systèmes fonctionne l'application ?",
        answer: "L'application est disponible sur Windows (10 et 11), macOS (Intel et Apple Silicon) et Linux (distributions basées sur Debian/Ubuntu). Vous recevrez les liens de téléchargement après votre achat.",
    },
    {
        question: "Quelles catégories de contacts sont incluses ?",
        answer: "La base de données couvre 8 catégories : Startups, ScaleUps, ETI tech, Investisseurs (VCs, Business Angels), Incubateurs/Accélérateurs, Écoles tech, Community builders, et Espaces de coworking.",
    },
    {
        question: "Puis-je personnaliser les messages envoyés ?",
        answer: "Absolument ! L'application permet d'utiliser des variables dynamiques (nom, prénom, entreprise, poste) pour personnaliser chaque message. Vous pouvez créer des templates et les réutiliser.",
    },
];

const FAQ = () => {
    return (
        <div id="faq" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="FAQ" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Questions fréquentes
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Tout ce que vous devez savoir sur French Tech Sender
                    </p>
                </div>
            </Container>
            <Container>
                <div className="mt-12 w-full max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {FAQ_ITEMS.map((item, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border border-border/50 rounded-xl px-6 bg-card/20"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-6">
                                    <span className="font-medium">{item.question}</span>
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground pb-6">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Container>
        </div>
    );
};

export default FAQ;
