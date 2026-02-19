"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { content } from "@/content";

export function WhoWeSupport() {
    const { whoWeSupport } = content.home;

    return (
        <section className="py-20 md:py-28 bg-soft-white">
            <div className="container mx-auto px-4">
                <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">

                    {/* Left Gradient Strip */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 md:w-4 bg-gradient-to-b from-emerald-400 to-emerald-600 z-10" />

                    {/* Left Content Area */}
                    <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative z-0">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-navy leading-tight">
                            {whoWeSupport.title}
                        </h2>

                        <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
                            {whoWeSupport.text}
                        </div>

                        <div>
                            <Link
                                href="/voor-wie-en-waar"
                                className="inline-flex items-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-full shadow-lg hover:bg-emerald-600 transition-transform transform hover:-translate-y-1"
                            >
                                Naar 'Voor wie en waar'
                            </Link>
                        </div>
                    </div>

                    {/* Right Image/Map Area */}
                    <div className="flex-1 relative bg-teal min-h-[300px] md:min-h-auto">
                        {/* We use a map-like image or a specific graphic here. 
                             Since we don't have the exact vector map, we'll use a high-quality abstract map image 
                             or a placeholder that looks stylish. */}
                        <div className="absolute inset-0 bg-teal/20 z-10 mix-blend-multiply" />

                        <ImageWithFallback
                            src="/assets/home-wie-wij-ondersteunen.png" // Rotterdam/Map ish image
                            alt="Map of Rotterdam region"
                            className="w-full h-full object-cover"
                        />

                        {/* overlay effect to match the colorful vibe if needed */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal/80 to-emerald-500/30 mix-blend-overlay" />
                    </div>
                </div>
            </div>
        </section>
    );
}
