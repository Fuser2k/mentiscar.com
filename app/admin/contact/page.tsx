import { ContactSettingsForm } from "@/components/admin/ContactSettingsForm";
import { getContactSettings } from "@/app/actions/contact";
import { db } from "@/db";
import { contactSettings } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = 'force-dynamic';

export default async function ContactSettingsPage() {
    let currentSettings;
    try {
        currentSettings = await db.select().from(contactSettings).where(eq(contactSettings.id, "default")).get();
    } catch (error) {
        console.error("Failed to fetch contact settings:", error);
        // Default empty object if fetch fails to allow form to render (though empty)
        currentSettings = {};
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-navy">Contact Settings</h1>
            </div>
            <ContactSettingsForm settings={currentSettings} />
        </div>
    );
}
