import { PostForm } from "@/components/admin/PostForm";
import { db } from "@/db";
import { posts } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = await db.select().from(posts).where(eq(posts.id, id)).get();

    if (!post) {
        notFound();
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-navy">Edit Post</h1>
            </div>
            <PostForm post={post} isEditing />
        </div>
    );
}
