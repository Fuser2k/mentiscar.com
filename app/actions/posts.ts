"use server";

import { db } from "@/db";
import { posts } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import { auth } from "@/auth";

const PostSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    gallery: z.string().optional(), // JSON string of array
    category: z.string().optional(),
    featured: z.preprocess((val) => val === "on" || val === true, z.boolean()),
    published: z.preprocess((val) => val === "on" || val === true, z.boolean()),
    date: z.string().min(1, "Date is required"),
});

function slugify(text: string) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

async function getUniqueSlug(title: string, currentId?: string) {
    let slug = slugify(title);
    let counter = 1;
    let originalSlug = slug;

    while (true) {
        const existing = await db.select().from(posts).where(eq(posts.slug, slug)).get();
        if (!existing || (currentId && existing.id === currentId)) {
            return slug;
        }
        slug = `${originalSlug}-${counter}`;
        counter++;
    }
}

export async function createPost(formData: FormData) {
    // 1. Check Authentication
    const session = await auth();
    if (!session) {
        throw new Error("Unauthorized");
    }

    // 2. Validate Input
    const rawData = {
        title: formData.get("title"),
        content: formData.get("content"),
        excerpt: formData.get("excerpt"),
        image: formData.get("image"),
        gallery: formData.get("gallery"),
        category: formData.get("category"),
        featured: formData.get("featured"),
        published: true, // Default
        date: formData.get("date"),
    };

    const validatedFields = PostSchema.safeParse(rawData);

    if (!validatedFields.success) {
        // In a real app, return errors to the form. For now, throw or log.
        console.error(validatedFields.error);
        throw new Error("Validation Failed");
    }

    const { title, content, excerpt, image, gallery, category, featured, date } = validatedFields.data;
    const slug = await getUniqueSlug(title);

    // Parse gallery JSON
    let galleryArray: string[] = [];
    try {
        if (gallery) {
            galleryArray = JSON.parse(gallery);
        }
    } catch (e) {
        console.error("Failed to parse gallery JSON", e);
    }

    await db.insert(posts).values({
        id: uuidv4(),
        title,
        slug,
        content,
        excerpt: excerpt || "",
        image: image || "",
        gallery: galleryArray,
        category: category || "",
        featured,
        published: true,
        date,
    });

    revalidatePath("/admin/posts");
    revalidatePath("/nieuws");
    redirect("/admin/posts");
}

export async function updatePost(id: string, formData: FormData) {
    // 1. Check Authentication
    const session = await auth();
    if (!session) {
        throw new Error("Unauthorized");
    }

    // 2. Validate Input
    const rawData = {
        title: formData.get("title"),
        content: formData.get("content"),
        excerpt: formData.get("excerpt"),
        image: formData.get("image"),
        gallery: formData.get("gallery"),
        category: formData.get("category"),
        featured: formData.get("featured"),
        published: formData.get("published"),
        date: formData.get("date"),
    };

    const validatedFields = PostSchema.safeParse(rawData);

    if (!validatedFields.success) {
        console.error(validatedFields.error);
        throw new Error("Validation Failed");
    }

    const { title, content, excerpt, image, gallery, category, featured, published, date } = validatedFields.data;
    const slug = await getUniqueSlug(title, id);

    // Parse gallery JSON
    let galleryArray: string[] = [];
    try {
        if (gallery) {
            galleryArray = JSON.parse(gallery);
        }
    } catch (e) {
        console.error("Failed to parse gallery JSON", e);
    }

    await db.update(posts).set({
        title,
        slug,
        content,
        excerpt: excerpt || "",
        image: image || "",
        gallery: galleryArray,
        category: category || "",
        featured,
        published,
        date,
        updatedAt: new Date(),
    }).where(eq(posts.id, id));

    revalidatePath("/admin/posts");
    revalidatePath("/nieuws");
    redirect("/admin/posts");
}

export async function deletePost(id: string) {
    const session = await auth();
    if (!session) {
        throw new Error("Unauthorized");
    }

    await db.delete(posts).where(eq(posts.id, id));
    revalidatePath("/admin/posts");
    revalidatePath("/nieuws");
}
