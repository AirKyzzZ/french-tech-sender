"use client";

import { motion } from "framer-motion";
import { cn } from "@/functions";

interface BlurTextProps {
    word: React.ReactNode | string;
    className?: string;
    variant?: {
        hidden: { filter: string; opacity: number };
        visible: { filter: string; opacity: number };
    };
    duration?: number;
}

const DEFAULT_VARIANTS = {
    hidden: { filter: "blur(10px)", opacity: 0, y: -20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
};

export function BlurText({ word, className, variant, duration = 1 }: BlurTextProps) {
    const combinedVariants = variant ?? DEFAULT_VARIANTS;

    function renderContent() {
        if (typeof word !== "string") {
            return word;
        }

        const lines = word.split("\n");
        return lines.map((line, index) => (
            <span key={index}>
                {line}
                {index < lines.length - 1 && <br className="hidden md:block" />}
            </span>
        ));
    }

    return (
        <motion.h1
            initial="hidden"
            animate="visible"
            transition={{ duration }}
            variants={combinedVariants}
            className={cn(
                className,
                "text-center tracking-[-0.02em] drop-shadow-sm",
            )}
        >
            {renderContent()}
        </motion.h1>
    );
}