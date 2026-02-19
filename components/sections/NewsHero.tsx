"use client";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { content } from "@/content";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    image: string | null;
    category: string | null;
    date: string;
}

interface NewsHeroProps {
    post?: Post;
}

export function NewsHero({ post }: NewsHeroProps) {
    const { hero } = content.newsPage;
    const activePost = post || null;

    const title = activePost ? activePost.title : hero.title;
    const description = activePost ? (activePost.excerpt?.replace(/<[^>]*>/g, '') || hero.description) : hero.description;
    const image = activePost ? (activePost.image || hero.image) : hero.image;
    const category = activePost ? (activePost.category || "Nieuws & Blogs") : "Mentis Care Actueel";
    const date = activePost ? new Date(activePost.date).getFullYear() : "2026";

    return (
        <Section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50/30">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-3xl" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-100/30 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 relative z-10">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100 text-teal font-semibold text-sm tracking-wide uppercase">
                            {category}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl mb-8 line-clamp-3">
                            {description}
                        </p>

                        {activePost && (
                            <Link
                                href={`/nieuws/${activePost.slug}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-full font-bold hover:bg-cyan-600 transition-colors shadow-lg group"
                            >
                                Lees artikel
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        )}
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Interactive-looking Background Shapes */}
                        <div className="absolute -top-10 -right-20 w-[120%] h-[120%] bg-teal/10 rounded-l-[100px] -z-10 hidden lg:block transform rotate-3 backdrop-blur-sm" />
                        <div className="absolute top-10 -right-20 w-[100%] h-[100%] bg-cyan-accent/20 rounded-l-[80px] -z-20 hidden lg:block transform -rotate-2" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] w-full border-4 border-white group">
                            {activePost ? (
                                <Link href={`/nieuws/${activePost.slug}`}>
                                    <ImageWithFallback
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                    />
                                </Link>
                            ) : (
                                <ImageWithFallback
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                            )}

                            {/* Gradient Overlay for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent mix-blend-multiply pointer-events-none" />
                        </div>

                        {/* Updated Decorator */}
                        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white p-3 rounded-2xl shadow-xl rotate-3 hidden md:block z-20 animate-float-slow">
                            <div className="w-full h-full border-2 border-dashed border-teal/30 rounded-xl flex items-center justify-center bg-cyan-50/30">
                                <div className="text-center">
                                    <span className="block text-2xl font-bold text-teal">{date}</span>
                                    <span className="text-xs font-bold text-navy text-center uppercase tracking-wider">Nieuws</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
