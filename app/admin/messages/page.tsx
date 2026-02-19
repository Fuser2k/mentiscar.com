import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { desc } from "drizzle-orm";
import { Mail, Check, Eye } from "lucide-react";
import { toggleMessageReadStatus } from "@/app/actions/contact"; // Assume deleteMessage exists or I add it
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { DeleteMessageButton } from "@/components/admin/DeleteMessageButton";

export const dynamic = 'force-dynamic';

export default async function MessagesPage() {
    const messages = await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-navy">Messages</h1>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {messages.length === 0 ? (
                    <div className="p-12 text-center text-gray-500">
                        <Mail size={48} className="mx-auto mb-4 text-gray-300" />
                        <p>No messages found.</p>
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`p-6 hover:bg-gray-50 transition-colors ${!msg.hasRead ? "bg-blue-50/50" : ""}`}>
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className={`text-lg font-semibold text-navy truncate ${!msg.hasRead ? "font-bold" : ""}`}>
                                                {msg.name}
                                            </h3>
                                            {!msg.hasRead && (
                                                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-medium">New</span>
                                            )}
                                            <span className="text-sm text-gray-400">
                                                {new Date(msg.createdAt!).toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-600 mb-2 flex flex-col sm:flex-row gap-1 sm:gap-4">
                                            <a href={`mailto:${msg.email}`} className="hover:text-teal transition-colors flex items-center gap-1">
                                                <Mail size={14} /> {msg.email}
                                            </a>
                                            {msg.phone && (
                                                <span className="hidden sm:inline text-gray-300">|</span>
                                            )}
                                            {msg.phone && (
                                                <a href={`tel:${msg.phone}`} className="hover:text-teal transition-colors">
                                                    {msg.phone}
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-gray-700 whitespace-pre-wrap mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                            {msg.message}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <form action={async () => {
                                            "use server";
                                            await toggleMessageReadStatus(msg.id, msg.hasRead || false);
                                        }}>
                                            <button
                                                type="submit"
                                                className={`p-2 rounded-lg transition-colors ${msg.hasRead ? "text-gray-400 hover:text-blue-600 hover:bg-blue-50" : "text-blue-600 bg-blue-50 hover:bg-blue-100"}`}
                                                title={msg.hasRead ? "Mark as unread" : "Mark as read"}
                                            >
                                                {msg.hasRead ? <Eye size={20} /> : <Check size={20} />}
                                            </button>
                                        </form>
                                        <DeleteMessageButton id={msg.id} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
