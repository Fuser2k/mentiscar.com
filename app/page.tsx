import { HeroVideo } from "@/components/sections/HeroVideo";
import { IntroSection } from "@/components/sections/IntroSection";
import { Section } from "@/components/ui/Section";
import { CardGrid } from "@/components/sections/CardGrid";
import { CTASection } from "@/components/sections/CTASection";
import { NewsSection } from "@/components/sections/NewsSection";
import { WhoWeSupport } from "@/components/sections/WhoWeSupport";
import { MethodSection } from "@/components/sections/MethodSection";
import { content } from "@/content";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { desc, like, or, eq } from "drizzle-orm";

export default async function Home() {
  const { intro, support, cards, whoWeSupport, method, ctaSection } = content.home;

  // Fetch specific posts for the homepage
  // We prioritize "Rotterdam West" and "Capelle aan den IJssel"
  let featuredPosts = await db.select().from(posts)
    .where(
      or(
        like(posts.title, "%Rotterdam West%"),
        like(posts.title, "%Capelle aan den IJssel%")
      )
    )
    .orderBy(desc(posts.date))
    .limit(2);

  // Fallback: If we don't find specific posts (or less than 2), fetch latest published posts
  if (featuredPosts.length < 2) {
    const latestPosts = await db.select().from(posts)
      .where(eq(posts.published, true))
      .orderBy(desc(posts.date))
      .limit(2);

    // Merge specific posts with latest to fill up to 2, avoiding duplicates
    const specificIds = new Set(featuredPosts.map(p => p.id));
    for (const p of latestPosts) {
      if (!specificIds.has(p.id) && featuredPosts.length < 2) {
        featuredPosts.push(p);
      }
    }
  }

  return (
    <div className="flex flex-col">
      {/* 1. Hero Video (Full Viewport) */}
      <HeroVideo />

      {/* 2. Intro Text */}
      <IntroSection />

      {/* 3. Support & Card Grid */}
      <Section background="soft-white">
        <div className="mb-16 relative">
          <div className="absolute top-0 left-0 w-20 h-1 bg-teal rounded-full mb-8"></div>

          <div className="pt-8">
            <span className="block text-teal font-bold tracking-widest uppercase text-sm mb-3">
              Waar wij voor staan
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-navy max-w-4xl leading-tight">
              {support.title}
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:items-end">
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                {support.description}
              </p>
              <Link
                href="/ondersteuning"
                className="group inline-flex items-center justify-center px-8 py-4 bg-navy text-white rounded-full font-bold text-lg shadow-lg hover:bg-teal transition-all duration-300 transform hover:-translate-y-1"
              >
                {support.cta} <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        <CardGrid cards={cards} columns={4} />
      </Section>

      {/* 4. Who We Support - Redesigned */}
      <WhoWeSupport />

      {/* 5. Our Method - Redesigned */}
      <MethodSection />

      {/* 6. News Section */}
      <NewsSection posts={featuredPosts} />

      {/* 7. CTA Section */}
      <CTASection
        title={ctaSection.title}
        body={ctaSection.body}
        bullets={ctaSection.bullets}
        closing={ctaSection.closing}
      />
    </div>
  );
}
