import { NewsSection } from "@/components/sections/NewsSection";
import { PostGrid } from "@/components/sections/PostGrid";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = 'force-dynamic';

export default async function NewsPage() {
    const publishedPosts = await db.select().from(posts)
        .where(eq(posts.published, true))
        .orderBy(desc(posts.date));

    // Specific posts to prioritize
    const priorityKeywords = ["Rotterdam West", "Capelle aan den IJssel"];

    // Sort: Priority posts first, then keep original order (date desc)
    publishedPosts.sort((a, b) => {
        const aPriority = priorityKeywords.some(k => a.title.includes(k));
        const bPriority = priorityKeywords.some(k => b.title.includes(k));

        if (aPriority && !bPriority) return -1;
        if (!aPriority && bPriority) return 1;
        return 0;
    });

    return (
        <main>
            {/* Show NewsSection as the hero slider */}
            <NewsSection
                posts={publishedPosts}
                introTitle="Nieuws & Blogs"
                introDescription="Blijf op de hoogte van onze laatste ontwikkelingen, blogs en verhalen uit de praktijk."
            />
            <PostGrid posts={publishedPosts} />
        </main>
    );
}
