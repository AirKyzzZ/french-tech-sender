import { PLAN } from "@/constants";
import { CheckIcon, ShieldCheckIcon, RotateCcwIcon, ArrowRightIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { SectionBadge } from "../ui/section-bade";

const Pricing = () => {
    return (
        <div id="pricing" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container>
                <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                    <SectionBadge title="Tarif unique" />
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Un prix, accès complet
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Pas d&apos;abonnement, pas de frais cachés. Un seul paiement pour un accès illimité.
                    </p>
                </div>
            </Container>

            <div className="mt-12 w-full relative flex flex-col items-center justify-center">
                <div className="absolute hidden lg:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[10rem] -z-10"></div>

                <Container>
                    <div className="max-w-lg mx-auto">
                        <div className="relative flex flex-col rounded-2xl border-2 border-primary/50 overflow-hidden">
                            {/* Badge */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2">
                                <div className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-b-lg">
                                    {PLAN.badge}
                                </div>
                            </div>

                            <div className="p-8 pt-12 bg-card/30 backdrop-blur-sm">
                                {/* Title & Description */}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-heading font-bold">
                                        {PLAN.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-1">
                                        {PLAN.desc}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="flex items-center justify-center mb-8">
                                    <span className="text-5xl md:text-6xl font-bold">
                                        {PLAN.price}
                                    </span>
                                    <span className="text-3xl md:text-4xl font-bold ml-1">
                                        {PLAN.currency}
                                    </span>
                                </div>

                                {/* CTA Button */}
                                <Button asChild size="lg" className="w-full text-lg py-6">
                                    <a href="/api/checkout">
                                        {PLAN.buttonText}
                                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                                    </a>
                                </Button>

                                {/* Highlights */}
                                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                                    {PLAN.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            {index === 0 ? (
                                                <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                                            ) : (
                                                <RotateCcwIcon className="w-4 h-4 text-primary" />
                                            )}
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features */}
                            <div className="p-8 border-t border-border/50 bg-card/20">
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                                    Inclus dans votre accès
                                </p>
                                <ul className="space-y-3">
                                    {PLAN.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckIcon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <span className="text-foreground/90">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Trust badges */}
                        <div className="mt-8 flex flex-col items-center gap-4 text-center">
                            <p className="text-sm text-muted-foreground">
                                Paiement sécurisé par
                            </p>
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <svg className="w-12 h-12" viewBox="0 0 60 25" fill="currentColor">
                                    <path d="M59.64 14.28h-8.06v2.39h5.96v1.81h-5.96v2.63h8.06v1.87H49.77V12.1h9.87v2.18zm-13.21-2.17h1.8v10.87h-1.8v-4.75l-5.11 4.75h-2.47l5.58-5.07-5.33-5.08h2.52l4.81 4.56V12.1zm-11.93 0v10.87h-1.81V12.11h1.81zm-6.95 5.19c-.65-1.36-2.29-1.77-4.04-1.77h-2.59v6.32h2.59c1.86 0 3.58-.55 4.14-2.08.32-.89.26-1.77-.1-2.47zm-4.04-3.33c2.88 0 5.51.97 5.9 4.06.26 2.05-.47 3.81-1.95 4.92-1.3.97-2.85 1.31-4.84 1.31h-4.13V12.1h5.02v1.87zM7.63 12.1h1.81v10.87H7.63v-4.75l-5.12 4.75H0l5.58-5.07-5.33-5.08h2.52l4.86 4.56V12.1z" />
                                </svg>
                                <span className="text-lg font-semibold">Stripe</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Pricing;
