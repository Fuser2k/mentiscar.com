import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";

export const revalidate = 60; // ISR
export const dynamicParams = true; // Allow new pages to be generated on demand

export async function generateStaticParams() {
    const allPosts = await db.select({ slug: posts.slug }).from(posts).where(eq(posts.published, true));
    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await db.select().from(posts).where(eq(posts.slug, slug)).get();

    if (!post) {
        notFound();
    }

    // Sanitize content with strict configuration
    // Security: Prevent XSS and extensive HTML features
    const cleanContent = DOMPurify.sanitize(post.content, {
        USE_PROFILES: { html: true },
        FORBID_TAGS: ['style', 'script', 'iframe', 'object', 'embed', 'form', 'input'],
        FORBID_ATTR: ['style', 'on*', 'data-*'],
        ADD_ATTR: ['target'],
    });

    // Security: Add rel="noopener noreferrer" to all external links to prevent Tabnabbing
    DOMPurify.addHook('afterSanitizeAttributes', function (node) {
        if ('target' in node && node.getAttribute('target') === '_blank') {
            node.setAttribute('rel', 'noopener noreferrer');
        }
    });

    return (
        <article className="min-h-screen bg-gray-50/50">
            {/* Hero Section */}
            <div className="w-full bg-navy text-white py-16 md:py-24 relative overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

                <div className="container mx-auto px-4 relative z-10">
                    <Link
                        href="/nieuws"
                        className="inline-flex items-center gap-2 text-cyan-accent hover:text-white transition-colors mb-8 font-medium bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm hover:bg-white/20"
                    >
                        <ArrowLeft size={20} />
                        Terug naar overzicht
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-300 mb-6">
                            {post.category && (
                                <span className="bg-cyan-600/20 text-cyan-accent px-3 py-1 rounded-full backdrop-blur-sm border border-cyan-500/20">
                                    {post.category}
                                </span>
                            )}
                            <span className="flex items-center gap-2">
                                <Calendar size={16} />
                                {new Date(post.date).toLocaleDateString("nl-NL", { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <Section background="white" className="py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto -mt-24 relative z-20 mb-12">
                        {post.image && (
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-200 aspect-video relative">
                                <ImageWithFallback
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {/* Lead / Excerpt */}
                        {post.excerpt && (
                            <div className="text-xl md:text-2xl text-navy font-medium mb-12 border-l-4 border-cyan-accent pl-6 leading-relaxed">
                                {post.excerpt.replace(/<[^>]*>/g, '').substring(0, 200)}...
                            </div>
                        )}

                        {/* Main Content */}
                        <div
                            className="prose prose-lg md:prose-xl prose-navy hover:prose-a:text-cyan-600 prose-img:rounded-xl prose-img:shadow-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: cleanContent }}
                        />

                        {/* Gallery Section */}
                        {post.gallery && post.gallery.length > 0 && (
                            <div className="mt-16 pt-8 border-t border-gray-100">
                                <h3 className="text-2xl font-bold text-navy mb-6">Galerij</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {post.gallery.map((url: string, index: number) => (
                                        <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-video bg-gray-100">
                                            <ImageWithFallback
                                                src={url}
                                                alt={`${post.title} - ${index + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
        </article>
    );
}
