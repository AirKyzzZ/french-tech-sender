"use client";

import { cn } from "@/functions";
import { useClickOutside } from "@/hooks";
import { motion } from "framer-motion";
import { SettingsIcon, CreditCardIcon, MessageSquareIcon, HelpCircleIcon, ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from 'react';
import { Button } from "../ui/button";
import { NAV_LINKS } from "@/constants";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isOpen, setIsOpen }: Props) => {
    const ref = useClickOutside(() => setIsOpen(false));

    const variants = {
        open: { opacity: 1, y: 20 },
        closed: { opacity: 0, y: 0 },
    };

    const iconMap: Record<string, React.ReactNode> = {
        "#features": <SettingsIcon className="w-4 h-4 mr-2" />,
        "#pricing": <CreditCardIcon className="w-4 h-4 mr-2" />,
        "#reviews": <MessageSquareIcon className="w-4 h-4 mr-2" />,
        "#faq": <HelpCircleIcon className="w-4 h-4 mr-2" />,
    };

    return (
        <div
            ref={ref}
            className={cn(
                "absolute top-12 inset-x-0 size-full p-4 z-20 bg-inherit flex flex-1",
                isOpen ? "flex" : "hidden"
            )}
        >
            <motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.5,
                }}
                className="size-full flex flex-col justify-start"
            >
                <ul className="flex flex-col items-start flex-1 w-full space-y-2">
                    {NAV_LINKS.map((link) => (
                        <li
                            key={link.href}
                            onClick={() => setIsOpen(false)}
                            className="w-full px-4 py-3 text-lg hover:text-muted-foreground font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-muted/20 active:opacity-80"
                        >
                            <Link href={link.href} className="flex items-center w-full text-start">
                                {iconMap[link.href]}
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 w-full">
                    <Button asChild className="w-full" size="lg" onClick={() => setIsOpen(false)}>
                        <Link href="#pricing">
                            Obtenir l&apos;accès — 179€
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    )
};

export default MobileMenu;
