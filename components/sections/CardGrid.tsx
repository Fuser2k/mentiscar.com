"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback"; // Ensure this path is correct

interface Card {
    title: string;
    description: string;
    href: string;
    image?: string;
}

interface CardGridProps {
    cards: Card[];
    columns?: 2 | 3 | 4;
}

export function CardGrid({ cards, columns = 3 }: CardGridProps) {
    // Determine grid columns class dynamically
    const gridCols = {
        2: "md:grid-cols-2",
        3: "md:grid-cols-3",
        4: "md:grid-cols-2 lg:grid-cols-4" // Responsive: 2 on tablet, 4 on desktop
    }[columns] || "md:grid-cols-3";

    return (
        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
            {cards.map((card, idx) => (
                <Link
                    key={idx}
                    href={card.href}
                    className="group flex flex-col bg-white rounded-[2rem] shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full"
                >
                    {/* Image Area - Height increased for visual impact */}
                    <div className="relative h-64 md:h-72 w-full bg-gray-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                        {/* Title Overlay on Image for a more modern look */}
                        <div className="absolute bottom-0 left-0 p-6 z-20 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl md:text-2xl font-bold text-white shadow-sm group-hover:text-teal-accent transition-colors leading-tight">
                                {card.title}
                            </h3>
                        </div>

                        {card.image ? (
                            <ImageWithFallback
                                src={card.image}
                                alt={card.title}
                                className="object-cover object-top w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full bg-navy/5 flex items-center justify-center text-gray-400">
                                {/* Abstract pattern or icon could go here if no image */}
                                <span className="sr-only">No Image</span>
                            </div>
                        )}
                    </div>

                    {/* Colored Strip - matching brand colors */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-teal to-cyan-accent" />

                    {/* Content Area */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                        <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                            {card.description}
                        </p>

                        <div className="mt-auto flex items-center text-teal font-bold group-hover:text-navy transition-colors">
                            <span className="mr-2">Lees meer</span>
                            <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
