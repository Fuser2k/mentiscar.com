import { db } from "@/db";
import { posts } from "@/db/schema";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { Plus, Edit } from "lucide-react";
import { DeletePostButton } from "@/components/admin/DeletePostButton";

export const dynamic = 'force-dynamic';

export default async function PostsPage() {
    const allPosts = await db.select().from(posts).orderBy(desc(posts.date));

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-navy">All Blog Posts</h1>
                <Link
                    href="/admin/posts/create"
                    className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg hover:bg-deep-blue transition-colors"
                >
                    <Plus size={20} />
                    Create Post
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 font-medium text-sm">
                            <tr>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Category</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {allPosts.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-navy">{post.title}</td>
                                    <td className="px-6 py-4 text-gray-500">{post.category}</td>
                                    <td className="px-6 py-4 text-gray-500">{new Date(post.date).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${post.published
                                            ? "bg-green-100 text-green-700"
                                            : "bg-yellow-100 text-yellow-700"
                                            }`}>
                                            {post.published ? "Published" : "Draft"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-3">
                                            <Link
                                                href={`/admin/posts/${post.id}`}
                                                className="text-cyan-600 hover:text-cyan-800 transition-colors"
                                                title="Edit"
                                            >
                                                <Edit size={18} />
                                            </Link>
                                            <DeletePostButton id={post.id} title={post.title} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {allPosts.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        No posts found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
