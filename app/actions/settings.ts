"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function changePassword(currentState: any, formData: FormData) {
    const currentPassword = formData.get("currentPassword") as string;
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!currentPassword || !newPassword || !confirmPassword) {
        return { error: "Vul alle velden in." };
    }

    if (newPassword !== confirmPassword) {
        return { error: "Nieuwe wachtwoorden komen niet overeen." };
    }

    if (newPassword.length < 6) {
        return { error: "Wachtwoord moet minimaal 6 tekens lang zijn." };
    }

    const session = await auth();

    if (!session?.user?.email) {
        return { error: "Niet ingelogd." };
    }

    const user = await db.select().from(users).where(eq(users.email, session.user.email)).get();

    if (!user) {
        return { error: "Gebruiker niet gevonden." };
    }

    const passwordsMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordsMatch) {
        return { error: "Huidige wachtwoord is onjuist." };
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await db.update(users).set({ password: hashedPassword }).where(eq(users.email, session.user.email));

    return { success: "Wachtwoord succesvol gewijzigd!" };
}
