"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { content } from "@/content";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    image: string | null;
    category: string | null;
    date: string;
}

interface NewsSectionProps {
    posts?: Post[];
    introTitle?: string;
    introDescription?: string;
}

export function NewsSection({ posts, introTitle, introDescription }: NewsSectionProps) {
    const { intro } = content.home;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    // Filter posts to safe length if needed, but we expect at least 2.
    const sliderPosts = posts && posts.length > 0 ? posts : [];

    useEffect(() => {
        if (sliderPosts.length <= 1) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 6000); // 6 seconds auto-slide
        return () => clearInterval(interval);
    }, [currentIndex, sliderPosts.length]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % sliderPosts.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + sliderPosts.length) % sliderPosts.length);
    };

    // Extract first paragraph of intro text for the general info section
    const introText = intro.text.split('\n')[0];

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    if (sliderPosts.length === 0) return null;

    const currentPost = sliderPosts[currentIndex];

    return (
        <Section background="soft-white" className="py-20 md:py-32 overflow-hidden bg-gradient-to-br from-white to-gray-50/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">

                    {/* LEFT COLUMN: General Info */}
                    <div className="w-full lg:w-5/12 space-y-8 relative z-10">
                        <div>
                            <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-3 block">
                                Over Mentis Care
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight mb-6">
                                Betrokken begeleiding & perspectief voor de toekomst
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-cyan-500/30 pl-6">
                                {introText}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/over"
                                className="inline-flex items-center px-8 py-3 bg-navy text-white font-bold rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
                            >
                                Meer over ons
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/nieuws"
                                className="inline-flex items-center px-8 py-3 border-2 border-navy text-navy font-bold rounded-full hover:bg-navy hover:text-white transition-colors duration-300 backdrop-blur-sm"
                            >
                                Alle nieuwsberichten
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Slider */}
                    <div className="w-full lg:w-7/12 relative">
                        {/* Decorative Background for Slider */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-[3rem] blur-2xl -z-10" />

                        {/* Slider Container */}
                        <div className="relative rounded-[2.5rem] overflow-hidden bg-white shadow-2xl border border-gray-100 aspect-[4/5] md:aspect-[16/9] group">
                            <div className="absolute inset-0 w-full h-full">
                                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                    <motion.div
                                        key={currentIndex}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: "spring", stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 }
                                        }}
                                        className="absolute inset-0 flex flex-col md:flex-row h-full w-full"
                                    >
                                        {/* Image Side (Top/Left) */}
                                        <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-gray-100">
                                            <Link href={`/nieuws/${currentPost.slug}`} className="block h-full w-full cursor-pointer">
                                                <ImageWithFallback
                                                    src={currentPost.image || "/assets/placeholder.jpg"}
                                                    alt={currentPost.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                                />
                                                {/* Badge Overlay */}
                                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm border border-white/50">
                                                    <span className="text-cyan-600 font-black text-xl leading-none block">
                                                        {new Date(currentPost.date).getFullYear()}
                                                    </span>
                                                    <span className="text-[10px] font-bold text-navy uppercase tracking-widest leading-none">
                                                        Nieuws
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* Content Side (Bottom/Right) */}
                                        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white p-8 md:p-10 flex flex-col justify-center relative z-20">
                                            {/* Decorative Element */}
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-50 to-transparent rounded-bl-full -z-10 opacity-60" />

                                            <div className="flex items-center gap-2 text-sm text-gray-400 font-medium mb-4">
                                                <Calendar size={14} className="text-cyan-500" />
                                                <span className="uppercase tracking-wider text-xs">
                                                    {new Date(currentPost.date).toLocaleDateString("nl-NL", { day: 'numeric', month: 'long' })}
                                                </span>
                                            </div>

                                            <Link href={`/nieuws/${currentPost.slug}`} className="group/title block mb-4">
                                                <h3 className="text-2xl font-bold text-navy group-hover/title:text-cyan-600 transition-colors leading-tight line-clamp-3 md:line-clamp-4">
                                                    {currentPost.title}
                                                </h3>
                                            </Link>

                                            {currentPost.excerpt && (
                                                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-2 text-sm md:text-base hidden md:block">
                                                    {currentPost.excerpt.replace(/<[^>]*>/g, '')}
                                                </p>
                                            )}

                                            <div className="mt-auto">
                                                <Link
                                                    href={`/nieuws/${currentPost.slug}`}
                                                    className="inline-flex items-center text-sm font-bold text-navy hover:text-cyan-600 transition-colors uppercase tracking-wide group/link"
                                                >
                                                    Lees artikel
                                                    <span className="ml-2 p-2 bg-gray-50 rounded-full group-hover/link:bg-cyan-600 group-hover/link:text-white transition-all duration-300">
                                                        <ArrowRight size={16} />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Controls Overlay */}
                            <div className="absolute bottom-6 right-6 flex gap-3 z-30">
                                <button
                                    onClick={(e) => { e.preventDefault(); prevSlide(); }}
                                    className="p-3 bg-white hover:bg-navy hover:text-white rounded-full shadow-lg transition-all duration-300 border border-gray-100 active:scale-95"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={(e) => { e.preventDefault(); nextSlide(); }}
                                    className="p-3 bg-white hover:bg-navy hover:text-white rounded-full shadow-lg transition-all duration-300 border border-gray-100 active:scale-95"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
