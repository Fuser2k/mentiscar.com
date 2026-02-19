"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { content } from "@/content";

export function HeroVideo() {
    const { title, subtitle } = content.home.hero;

    return (
        <div className="relative h-screen w-full overflow-hidden bg-navy border-b-8 border-teal">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero-placeholder.jpg"
            >
                <source src="/assets/hero-video.mp4?v=2" type="video/mp4" />
            </video>

            {/* Overlay Gradient for text readability - keeping it subtle */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent" />

            {/* Content Container - Left Aligned */}
            <div className="absolute inset-0 container mx-auto px-4 md:px-8 flex flex-col justify-end pb-4 md:pb-8 z-10 pointer-events-none">

                {/* White Card Overlay - Glassmorphism */}
                <div className="bg-white/85 backdrop-blur-md text-navy p-6 md:p-8 max-w-md w-full md:w-auto rounded-xl md:rounded-tr-[3rem] md:rounded-bl-[3rem] shadow-2xl pointer-events-auto relative overflow-hidden animate-fade-in-up mt-24 md:mt-0 border border-white/50">
                    {/* Decorative bottom strip on the card */}
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 to-blue-600" />

                    <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight">
                        {title}
                    </h1>
                    <div className="text-navy/80 text-base leading-relaxed md:mb-2 whitespace-pre-line">
                        <p>
                            Bij Mentis Care draait het om rust, stabiliteit en perspectief. Wij ondersteunen (jong)volwassenen met een langdurige zorgvraag bij wonen, daginvulling en het dagelijks leven.
                        </p>
                    </div>

                    {/* Navigation Controls (Visual only as per image, or functional if needed) */}
                    {/* The image 1 shows carousel controls. We can just show buttons or keeping it simple.
                         Product requirement: "Overlay only the H1 + short tagline".
                         But user said "like image". Image has paragraph. I added a static paragraph above.
                         I will add the buttons if they fit, or just keep it text based as per original prompt + new style.
                         The user prompt "video kısmının sol tarafına görseldeki gibi bir yazı olucak" -> text like in visual.
                         Visual has text.
                      */}
                </div>
            </div>
        </div >
    );
}
