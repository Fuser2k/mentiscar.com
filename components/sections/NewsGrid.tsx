"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { content } from "@/content";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function NewsGrid() {
    const { items } = content.newsPage;

    return (
        <Section background="white" className="py-20 bg-gray-50/50">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-accent/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {items.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Image Container */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <ImageWithFallback
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {item.category && (
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy uppercase tracking-wider shadow-sm">
                                        {item.category}
                                    </span>
                                )}
                            </div>

                            {/* Cyan Accent Strip */}
                            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow relative">
                                <div className="mb-3 text-sm text-gray-400 font-medium">
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-cyan-600 transition-colors line-clamp-3">
                                    {item.title}
                                </h3>

                                <div className="mt-auto flex items-center justify-end">
                                    <span className="flex items-center gap-2 text-sm font-bold text-navy group-hover:text-cyan-accent transition-colors">
                                        Lees meer
                                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Section>
    );
}
