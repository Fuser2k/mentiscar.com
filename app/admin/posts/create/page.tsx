import { PostForm } from "@/components/admin/PostForm";

export default function CreatePostPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-navy">Create New Post</h1>
            </div>
            <PostForm />
        </div>
    );
}
