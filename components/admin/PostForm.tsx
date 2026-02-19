"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TiptapEditor } from "@/components/admin/TiptapEditor";
import { Image as ImageIcon, Loader2, Save, Trash2, Plus } from "lucide-react";
import { DeletePostButton } from "@/components/admin/DeletePostButton";
import { createPost, updatePost } from "@/app/actions/posts";
import { useAutoSave } from "@/hooks/useAutoSave";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface PostFormProps {
    post?: any;
    isEditing?: boolean;
}

export function PostForm({ post, isEditing = false }: PostFormProps) {
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    // Auto-save key depends on editing mode and ID
    const autoSaveKey = isEditing ? `post_draft_${post.id}` : "post_draft_new";

    const { value: formData, setValue: setFormData, isSaving, clearSave } = useAutoSave(autoSaveKey, {
        title: post?.title || "",
        date: post?.date || new Date().toISOString().split("T")[0],
        category: post?.category || "",
        excerpt: post?.excerpt || "",
        image: post?.image || "",
        gallery: post?.gallery || [],
        content: post?.content || "",
        featured: post?.featured || false,
        published: post?.published ?? true,
    });

    const handleChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const formDataUpload = new FormData();
        formDataUpload.append("file", file);

        try {
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formDataUpload,
            });

            if (!res.ok) throw new Error("Upload failed");

            const data = await res.json();
            handleChange("image", data.url);
            toast.success("Image uploaded successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to upload image");
        } finally {
            setUploading(false);
        }
    };

    const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        setUploading(true);
        try {
            const newUrls: string[] = [];
            for (let i = 0; i < files.length; i++) {
                const formDataUpload = new FormData();
                formDataUpload.append("file", files[i]);
                const res = await fetch("/api/upload", { method: "POST", body: formDataUpload });
                if (res.ok) {
                    const data = await res.json();
                    newUrls.push(data.url);
                }
            }
            const currentGallery = formData.gallery || [];
            handleChange("gallery", [...currentGallery, ...newUrls]);
            toast.success(`${newUrls.length} images uploaded`);
        } catch (error) {
            console.error(error);
            toast.error("Failed to upload images");
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (submitFormData: FormData) => {
        setLoading(true);
        // Append manually from state
        submitFormData.append("title", formData.title);
        submitFormData.append("date", formData.date);
        submitFormData.append("category", formData.category);
        submitFormData.append("excerpt", formData.excerpt);
        submitFormData.append("image", formData.image);
        submitFormData.append("gallery", JSON.stringify(formData.gallery || []));
        submitFormData.append("content", formData.content);

        if (formData.featured) submitFormData.append("featured", "on");
        if (formData.published) submitFormData.append("published", "on");

        try {
            if (isEditing && post?.id) {
                await updatePost(post.id, submitFormData);
                toast.success("Post updated successfully");
            } else {
                await createPost(submitFormData);
                toast.success("Post created successfully");
            }
            clearSave();
            // We could redirect here if needed
        } catch (error) {
            console.error(error);
            toast.error("Failed to save post");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form action={handleSubmit} className="space-y-8 max-w-4xl mx-auto pb-24 md:pb-12">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-navy">
                    {isEditing ? "Edit Post" : "Create Post"}
                </h1>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    {isSaving ? (
                        <>
                            <Loader2 size={14} className="animate-spin" />
                            <span>Saving draft...</span>
                        </>
                    ) : (
                        <span>Draft saved</span>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    />
                </div>

                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    />
                </div>

                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={(e) => handleChange("category", e.target.value)}
                        placeholder="e.g. Locaties"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    />
                </div>

                <div className="space-y-4">
                    <label className="flex items-center space-x-3 mt-8">
                        <input
                            type="checkbox"
                            checked={formData.featured}
                            onChange={(e) => handleChange("featured", e.target.checked)}
                            className="h-5 w-5 text-cyan-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-gray-700 font-medium">Featured Post</span>
                    </label>
                    <label className="flex items-center space-x-3 mt-2">
                        <input
                            type="checkbox"
                            checked={formData.published}
                            onChange={(e) => handleChange("published", e.target.checked)}
                            className="h-5 w-5 text-cyan-600 rounded focus:ring-cyan-500"
                        />
                        <span className="text-gray-700 font-medium">Published</span>
                    </label>
                </div>
            </div>

            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Excerpt (Short Summary)</label>
                <textarea
                    rows={3}
                    value={formData.excerpt}
                    onChange={(e) => handleChange("excerpt", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                />
            </div>

            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Cover Image</label>
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-1 w-full">
                        <div className="flex items-center gap-4">
                            <label className={cn(
                                "cursor-pointer bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2",
                                uploading && "opacity-50 pointer-events-none"
                            )}>
                                {uploading ? <Loader2 size={18} className="animate-spin" /> : <ImageIcon size={18} />}
                                <span>{uploading ? "Uploading..." : "Upload Image"}</span>
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                            </label>
                            <span className="text-sm text-gray-500">or paste URL below</span>
                        </div>
                        <input
                            type="text"
                            value={formData.image}
                            onChange={(e) => handleChange("image", e.target.value)}
                            placeholder="https://..."
                            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        />
                    </div>
                    {formData.image && (
                        <div className="w-full md:w-32 h-48 md:h-24 rounded-lg overflow-hidden border border-gray-200 relative bg-gray-100 shrink-0">
                            <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Gallery (Multiple Images)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.gallery && formData.gallery.length > 0 && formData.gallery.map((url: string, index: number) => (
                        <div key={index} className="relative group aspect-square rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                            <img src={url} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                            <button
                                type="button"
                                onClick={() => {
                                    const newGallery = [...(formData.gallery || [])];
                                    newGallery.splice(index, 1);
                                    handleChange("gallery", newGallery);
                                }}
                                className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>
                    ))}
                    <label className={cn(
                        "cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50 transition-colors aspect-square text-gray-400 hover:text-gray-600 bg-white",
                        uploading && "opacity-50 pointer-events-none"
                    )}>
                        {uploading ? <Loader2 size={24} className="animate-spin" /> : <Plus size={24} />}
                        <span className="text-xs mt-2 font-medium">Add Image</span>
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            multiple
                            onChange={handleGalleryUpload}
                        />
                    </label>
                </div>
            </div>

            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Content</label>
                <div className="min-h-[400px]">
                    <TiptapEditor value={formData.content} onChange={(val) => handleChange("content", val)} />
                </div>
            </div>

            {/* Sticky bottom bar on mobile, normal on desktop */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 md:static md:bg-transparent md:border-0 md:p-0 z-30 flex justify-end gap-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:shadow-none">
                <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-deep-blue transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2"
                >
                    {loading && <Loader2 size={18} className="animate-spin" />}
                    {loading ? "Saving..." : (isEditing ? "Update Post" : "Create Post")}
                </button>
                {isEditing && post?.id && (
                    <DeletePostButton
                        id={post.id}
                        title={post.title}
                        className="px-6 py-2 border border-red-200 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors ml-4"
                        iconOnly={false}
                    />
                )}
            </div>
        </form>
    );
}
