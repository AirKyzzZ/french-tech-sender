"use client";

import { useState } from "react";
import Container from "../global/container";
import MagicCard from "../ui/magic-card";
import { SectionBadge } from "../ui/section-bade";
import { CATEGORIES } from "@/constants";
import {
    SettingsIcon,
    SendIcon,
    UsersIcon,
    GraduationCapIcon,
    BriefcaseIcon,
    RocketIcon,
    BuildingIcon,
    LightbulbIcon,
    TrendingUpIcon,
    DatabaseIcon,
    MailIcon,
    FilterIcon
} from "lucide-react";
import { cn } from "@/functions";

const Features = () => {
    return (
        <div id="features" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Fonctionnalités" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Comment ça marche ?
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        En 3 étapes simples, accédez à l&apos;ensemble de l&apos;écosystème French Tech Bordeaux et contactez les bons interlocuteurs.
                    </p>
                </div>
            </Container>

            {/* How It Works - 3 Steps */}
            <div className="mt-16 w-full">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                        <StepCard
                            step={1}
                            icon={SettingsIcon}
                            title="Configurez"
                            description="Sélectionnez vos catégories cibles parmi startups, investisseurs, incubateurs et plus encore."
                        />
                        <StepCard
                            step={2}
                            icon={SendIcon}
                            title="Lancez"
                            description="Personnalisez votre message et lancez l'envoi automatisé vers tous les contacts sélectionnés."
                        />
                        <StepCard
                            step={3}
                            icon={UsersIcon}
                            title="Connectez"
                            description="Recevez les réponses directement dans votre boîte mail et développez votre réseau."
                        />
                    </div>
                </Container>
            </div>

            {/* Target Audience Tabs */}
            <div className="mt-20 w-full">
                <Container>
                    <TargetAudienceTabs />
                </Container>
            </div>

            {/* Categories Grid */}
            <div className="mt-20 w-full">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
                        <SectionBadge title="8 catégories" />
                        <h3 className="text-xl md:text-3xl font-heading font-medium !leading-snug mt-4">
                            Tout l&apos;écosystème French Tech Bordeaux
                        </h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {CATEGORIES.map((category, index) => (
                            <CategoryCard key={index} category={category} index={index} />
                        ))}
                    </div>
                </Container>
            </div>

            {/* Feature Highlights */}
            <div className="mt-20 w-full">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <FeatureCard
                            icon={DatabaseIcon}
                            title="Base de données vérifiée"
                            description="Chaque contact est vérifié manuellement. Emails valides, personnes réelles, informations à jour."
                        />
                        <FeatureCard
                            icon={MailIcon}
                            title="Envoi personnalisé"
                            description="Personnalisez vos messages avec des variables dynamiques : nom, entreprise, poste."
                        />
                        <FeatureCard
                            icon={FilterIcon}
                            title="Ciblage précis"
                            description="Filtrez par catégorie, secteur d'activité ou taille d'entreprise pour toucher les bons contacts."
                        />
                        <FeatureCard
                            icon={TrendingUpIcon}
                            title="Mises à jour régulières"
                            description="La base de données est mise à jour régulièrement avec les nouveaux acteurs de l'écosystème."
                        />
                    </div>
                </Container>
            </div>
        </div>
    )
};

const StepCard = ({
    step,
    icon: Icon,
    title,
    description,
}: {
    step: number;
    icon: typeof SettingsIcon;
    title: string;
    description: string;
}) => (
    <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
        <div className="bento-card w-full flex-col gap-4 p-6">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{step}</span>
                </div>
                <Icon className="w-8 h-8 text-primary/60" />
            </div>
            <div className="mt-4">
                <h4 className="text-xl font-heading font-medium heading">
                    {title}
                </h4>
                <p className="text-sm md:text-base mt-2 text-muted-foreground">
                    {description}
                </p>
            </div>
        </div>
    </MagicCard>
);

const TargetAudienceTabs = () => {
    const [activeTab, setActiveTab] = useState<"students" | "b2b">("students");

    const tabs = [
        { id: "students" as const, label: "Étudiants & Alternants" },
        { id: "b2b" as const, label: "Prospection B2B" },
    ];

    const content = {
        students: {
            title: "Trouvez votre stage ou alternance",
            description: "Accédez directement aux décideurs des startups, scale-ups et entreprises tech de Bordeaux. Plus besoin de passer par LinkedIn ou les sites d'emploi classiques.",
            features: [
                { icon: GraduationCapIcon, text: "Idéal pour les étudiants en école de commerce ou d'ingénieurs" },
                { icon: RocketIcon, text: "Contactez directement les fondateurs et RH de startups" },
                { icon: BuildingIcon, text: "Accès aux incubateurs et écoles partenaires" },
            ],
        },
        b2b: {
            title: "Développez votre business",
            description: "Prospectez efficacement l'écosystème tech bordelais. Identifiez vos cibles et contactez-les en masse avec un message personnalisé.",
            features: [
                { icon: BriefcaseIcon, text: "Parfait pour les commerciaux et business developers" },
                { icon: LightbulbIcon, text: "Ciblez par secteur : SaaS, FinTech, HealthTech, etc." },
                { icon: TrendingUpIcon, text: "Développez votre réseau d'investisseurs et partenaires" },
            ],
        },
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-8">
                <SectionBadge title="Pour qui ?" />
                <h3 className="text-xl md:text-3xl font-heading font-medium !leading-snug mt-4">
                    Un outil adapté à vos objectifs
                </h3>
            </div>

            <div className="flex justify-center gap-2 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                            "px-6 py-3 rounded-full text-sm font-medium transition-all",
                            activeTab === tab.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <MagicCard particles={true} className="w-full bg-primary/[0.05]">
                <div className="p-8">
                    <h4 className="text-2xl font-heading font-medium heading mb-4">
                        {content[activeTab].title}
                    </h4>
                    <p className="text-muted-foreground mb-6">
                        {content[activeTab].description}
                    </p>
                    <div className="space-y-4">
                        {content[activeTab].features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <feature.icon className="w-5 h-5 text-primary" />
                                <span className="text-foreground/80">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </MagicCard>
        </div>
    );
};

const CategoryCard = ({ category, index }: { category: string; index: number }) => {
    const icons = [
        RocketIcon,      // Startups
        TrendingUpIcon,  // ScaleUps
        BuildingIcon,    // ETI
        BriefcaseIcon,   // Investisseurs
        LightbulbIcon,   // Incubateurs
        GraduationCapIcon, // Écoles
        UsersIcon,       // Community builders
        BuildingIcon,    // Coworkings
    ];

    const Icon = icons[index] || RocketIcon;

    return (
        <div className="flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/30 hover:bg-card/50 transition-colors">
            <Icon className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{category}</span>
        </div>
    );
};

const FeatureCard = ({
    icon: Icon,
    title,
    description,
}: {
    icon: typeof DatabaseIcon;
    title: string;
    description: string;
}) => (
    <div className="flex items-start gap-4 p-6 rounded-xl border border-border/50 bg-card/20">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
            <h4 className="text-lg font-medium mb-2">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </div>
);

export default Features;
