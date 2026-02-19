"use client";

import { useEditor, EditorContent } from "@tiptap/react";
// @ts-ignore
import { FloatingMenu } from "@tiptap/react/menus";
// If this fails, I will try splitting it. But first, let me try to see if I can simply remove FloatingMenu from here and import it from where it might be.
// Actually, let's check if it's named export.
// The error says "Export FloatingMenu doesn't exist in target module ... @tiptap/react/dist/index.js".
// The package.json shows "./menus": "./dist/menus/index.js".
// So I should import FloatingMenu from "@tiptap/react" ?? NO.
// I should import it from "@tiptap/extension-floating-menu"? NO, that is the extension. The react component is usually in @tiptap/react.
// Wait, looking at Tiptap docs for v2 it was in @tiptap/react. In v3 maybe it moved?
// Let's try importing from "@tiptap/react" again but maybe I need to check if it's a default export? No.
// Let's try importing `FloatingMenu` from `@tiptap/react` is failing.
// Let's look at `node_modules/@tiptap/react/package.json` again.
// It has `exports` -> `./menus`.
// So likely the component `FloatingMenu` is now in `@tiptap/react/menus`?
// Let's TRY that first.
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import FloatingMenuExtension from "@tiptap/extension-floating-menu";
import {
    Bold, Italic, List, ListOrdered, Image as ImageIcon,
    Heading1, Heading2, Quote, Undo, Redo, Plus
} from "lucide-react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";

interface TiptapEditorProps {
    value: string;
    onChange: (value: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) {
        return null;
    }

    const addImage = useCallback(() => {
        const url = window.prompt("URL");
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    const activeClass = "bg-gray-200 text-black";
    const buttonClass = "p-2 rounded hover:bg-gray-100 transition-colors text-gray-600 shrink-0";

    return (
        <div className="flex flex-wrap gap-1 md:gap-2 border-b border-gray-200 p-2 bg-gray-50 rounded-t-lg sticky top-0 z-10 bg-white">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={cn(buttonClass, editor.isActive("bold") && activeClass)}
            >
                <Bold size={18} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={cn(buttonClass, editor.isActive("italic") && activeClass)}
            >
                <Italic size={18} />
            </button>

            <div className="w-px h-6 bg-gray-300 mx-1 self-center" />

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={cn(buttonClass, editor.isActive("heading", { level: 2 }) && activeClass)}
            >
                <Heading1 size={18} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={cn(buttonClass, editor.isActive("heading", { level: 3 }) && activeClass)}
            >
                <Heading2 size={18} />
            </button>

            <div className="w-px h-6 bg-gray-300 mx-1 self-center hidden sm:block" />

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={cn(buttonClass, editor.isActive("bulletList") && activeClass)}
            >
                <List size={18} />
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={cn(buttonClass, editor.isActive("orderedList") && activeClass)}
            >
                <ListOrdered size={18} />
            </button>

            <div className="w-px h-6 bg-gray-300 mx-1 self-center hidden sm:block" />

            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={cn(buttonClass, editor.isActive("blockquote") && activeClass)}
            >
                <Quote size={18} />
            </button>

            <button type="button" onClick={addImage} className={buttonClass}>
                <ImageIcon size={18} />
            </button>
        </div>
    );
};

export function TiptapEditor({ value, onChange }: TiptapEditorProps) {
    const editor = useEditor({
        extensions: [StarterKit, Image, FloatingMenuExtension],
        content: value,
        editorProps: {
            attributes: {
                class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none p-4 min-h-[300px]",
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        immediatelyRender: false,
    });

    const addImage = useCallback(() => {
        if (!editor) return;
        const url = window.prompt("URL");
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden bg-white relative">
            <MenuBar editor={editor} />

            {editor && (
                <FloatingMenu editor={editor}>
                    <div className="flex gap-1 bg-white border border-gray-200 shadow-lg rounded-lg p-1">
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                            className={cn("p-1.5 rounded hover:bg-gray-100", editor.isActive("heading", { level: 2 }) && "bg-gray-100")}
                        >
                            <Heading1 size={16} />
                        </button>
                        <button
                            type="button"
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                            className={cn("p-1.5 rounded hover:bg-gray-100", editor.isActive("bulletList") && "bg-gray-100")}
                        >
                            <List size={16} />
                        </button>
                        <button
                            type="button"
                            onClick={addImage}
                            className="p-1.5 rounded hover:bg-gray-100"
                        >
                            <ImageIcon size={16} />
                        </button>
                    </div>
                </FloatingMenu>
            )}

            <EditorContent editor={editor} />
        </div>
    );
}
