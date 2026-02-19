"use client";

import { Trash2, Loader2 } from "lucide-react";
import { deletePost } from "@/app/actions/posts";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface DeletePostButtonProps {
    id: string;
    title: string;
    className?: string;
    iconOnly?: boolean;
}

export function DeletePostButton({ id, title, className, iconOnly = false }: DeletePostButtonProps) {
    const [isPending, setIsPending] = useState(false);

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!confirm(`Are you sure you want to delete "${title}"?`)) {
            return;
        }

        setIsPending(true);
        try {
            await deletePost(id);
            toast.success("Post deleted successfully");
        } catch (error) {
            console.error("Failed to delete post:", error);
            toast.error("Failed to delete post");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <form onSubmit={handleDelete} className="inline-block">
            <button
                type="submit"
                className={cn("text-red-400 hover:text-red-600 transition-colors disabled:opacity-50 flex items-center gap-2", className)}
                title="Delete"
                disabled={isPending}
            >
                {isPending ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
                {!iconOnly && <span>Delete</span>}
            </button>
        </form>
    );
}
