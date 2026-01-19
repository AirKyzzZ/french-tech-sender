"use client";

import { PlayCircleIcon } from "lucide-react";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";
import Image from "next/image";

const Demo = () => {
    return (
        <div id="demo" className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <SectionBadge title="Démonstration" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Voyez l&apos;outil en action
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Découvrez comment contacter l&apos;écosystème French Tech Bordeaux en quelques clics
                    </p>
                </div>
            </Container>
            <Container>
                <div className="w-full max-w-4xl mx-auto mt-12 relative">
                    <div className="relative rounded-2xl border border-border/50 bg-card/30 overflow-hidden aspect-video">
                        {/* Placeholder for video/screenshot */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 cursor-pointer hover:bg-primary/20 transition-colors">
                                <PlayCircleIcon className="w-10 h-10 text-primary" />
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Démo vidéo disponible bientôt
                            </p>
                        </div>
                        {/* Screenshot placeholder - replace with actual app screenshot */}
                        <Image
                            src="/images/dashboard.png"
                            alt="Aperçu de l'application French Tech Sender"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover opacity-30"
                        />
                    </div>

                    {/* App features highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="p-4 rounded-xl border border-border/50 bg-card/20 text-center">
                            <p className="text-2xl font-bold text-primary">1.</p>
                            <p className="text-sm text-muted-foreground mt-1">Importez vos templates</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/50 bg-card/20 text-center">
                            <p className="text-2xl font-bold text-primary">2.</p>
                            <p className="text-sm text-muted-foreground mt-1">Sélectionnez vos cibles</p>
                        </div>
                        <div className="p-4 rounded-xl border border-border/50 bg-card/20 text-center">
                            <p className="text-2xl font-bold text-primary">3.</p>
                            <p className="text-sm text-muted-foreground mt-1">Lancez l&apos;envoi</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Demo;
