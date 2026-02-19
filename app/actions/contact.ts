"use server";

import { db } from "@/db";
import { contactMessages, contactSettings } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { eq, desc } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";

// CONTACT SETTINGS

export async function getContactSettings() {
    const result = await db.select().from(contactSettings).where(eq(contactSettings.id, "default")).get();
    return result;
}

export async function updateContactSettings(formData: FormData) {
    const settings = {
        address: formData.get("address") as string,
        phone: formData.get("phone") as string,
        email: formData.get("email") as string,
        facebook: formData.get("facebook") as string,
        instagram: formData.get("instagram") as string,
        linkedin: formData.get("linkedin") as string,
        twitter: formData.get("twitter") as string,
        mapEmbedUrl: formData.get("mapEmbedUrl") as string,
    };

    const existing = await getContactSettings();

    if (existing) {
        await db.update(contactSettings).set(settings).where(eq(contactSettings.id, "default"));
    } else {
        await db.insert(contactSettings).values({
            id: "default",
            ...settings,
        });
    }

    revalidatePath("/admin/contact");
    revalidatePath("/contact");
    revalidatePath("/"); // Footer might update
}

// CONTACT MESSAGES

export async function submitContactForm(formData: FormData) {
    const messageData = {
        id: uuidv4(),
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };

    await db.insert(contactMessages).values(messageData);

    // In a real app, send email notification here
    return { success: true };
}

export async function getContactMessages() {
    return await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
}

export async function toggleMessageReadStatus(id: string, currentStatus: boolean) {
    await db.update(contactMessages).set({ hasRead: !currentStatus }).where(eq(contactMessages.id, id));
    revalidatePath("/admin/messages");
}

export async function deleteMessage(id: string) {
    await db.delete(contactMessages).where(eq(contactMessages.id, id));
    revalidatePath("/admin/messages");
}
