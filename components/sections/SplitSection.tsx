"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
    title?: string;
    text: string | React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
    background?: "white" | "soft-white";
    ctaText?: string;
    ctaHref?: string;
    bullets?: string[];
}

export function SplitSection({
    title,
    text,
    imageSrc,
    imageAlt,
    imagePosition = "right",
    background = "white",
    ctaText,
    ctaHref,
    bullets,
}: SplitSectionProps) {
    return (
        <Section background={background}>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Text Column */}
                <div
                    className={cn("flex-1", {
                        "lg:order-2": imagePosition === "left",
                        "lg:order-1": imagePosition === "right",
                    })}
                >
                    {title && <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">{title}</h2>}

                    <div className="text-lg text-gray-700 leading-relaxed mb-6 space-y-4">
                        {typeof text === "string" ? <p>{text}</p> : text}
                    </div>

                    {bullets && (
                        <ul className="space-y-3 mb-8">
                            {bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-teal mt-2 shrink-0" />
                                    <span className="text-gray-700">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {ctaText && ctaHref && (
                        <Link href={ctaHref}>
                            <Button variant="outline" className="mt-4">
                                {ctaText}
                            </Button>
                        </Link>
                    )}
                </div>

                {/* Image Column */}
                <div
                    className={cn("flex-1 relative w-full h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl", {
                        "lg:order-1": imagePosition === "left",
                        "lg:order-2": imagePosition === "right",
                    })}
                >
                    {/* Placeholder logic: using a colored div if image fails, or Next.js Image */}
                    <div className="absolute inset-0 bg-gray-200 animate-pulse">
                        {/* Text for placeholder visibility */}
                        <div className="flex items-center justify-center h-full text-gray-400 font-medium bg-gray-100">
                            {imageAlt}
                        </div>
                    </div>
                    {/* In a real scenario, use Image component. For this demo, using a styled div or simple img if available.
              But since we are frontend-only and user mentioned no real assets, we'll keep the placeholder 'div' visible
              or use a standard placeholder service if allowed. The user said "use placeholder images". 
              I will use a simple absolute img that covers the div.
          */}
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                            // Hide broken image icon, show placeholder div behind
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>
            </div>
        </Section>
    );
}
