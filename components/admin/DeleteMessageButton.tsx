"use client";

import { Trash2 } from "lucide-react";
import { deleteMessage } from "@/app/actions/contact";
import { useState } from "react";

export function DeleteMessageButton({ id }: { id: string }) {
    const [isPending, setIsPending] = useState(false);

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!confirm("Are you sure you want to delete this message?")) {
            return;
        }

        setIsPending(true);
        try {
            await deleteMessage(id);
        } catch (error) {
            console.error("Failed to delete message:", error);
            alert("Failed to delete message");
        } finally {
            setIsPending(false);
        }
    };

    return (
        <form onSubmit={handleDelete}>
            <button
                type="submit"
                className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                title="Delete message"
                disabled={isPending}
            >
                <Trash2 size={20} />
            </button>
        </form>
    );
}
