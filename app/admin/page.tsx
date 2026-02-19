import { db } from "@/db";
import { posts } from "@/db/schema";
import { count, desc } from "drizzle-orm";
import Link from "next/link";
import { Plus } from "lucide-react";
import { DeletePostButton } from "@/components/admin/DeletePostButton";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
    const postCount = await db.select({ count: count(posts.id) }).from(posts);
    const recentPosts = await db.select().from(posts).orderBy(desc(posts.date)).limit(5);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-navy">Dashboard</h1>
                <Link
                    href="/admin/posts/create"
                    className="flex items-center gap-2 bg-navy text-white px-4 py-2 rounded-lg hover:bg-deep-blue transition-colors"
                >
                    <Plus size={20} />
                    Create Post
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 font-medium mb-1">Total Posts</h3>
                    <p className="text-3xl font-bold text-navy">{postCount[0].count}</p>
                </div>
                {/* Add more stats here later */}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="font-bold text-navy">Recent Posts</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 text-gray-500 font-medium text-sm">
                            <tr>
                                <th className="px-6 py-3">Title</th>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {recentPosts.map((post) => (
                                <tr key={post.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-navy">{post.title}</td>
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
                                        <Link
                                            href={`/admin/posts/${post.id}`}
                                            className="text-cyan-600 hover:text-cyan-800 font-medium text-sm"
                                        >
                                            Edit
                                        </Link>
                                        <DeletePostButton id={post.id} title={post.title} className="ml-4" />
                                    </td>
                                </tr>
                            ))}
                            {recentPosts.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
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
