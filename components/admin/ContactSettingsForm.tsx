"use client";

import { useFormStatus } from "react-dom";
import { updateContactSettings } from "@/app/actions/contact";
import { useState } from "react";
import { Button } from "@/components/ui/Button"; // Or standard button

function SubmitButton({ isPending }: { isPending: boolean }) {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending || isPending} className="bg-navy text-white px-6 py-2 rounded-lg hover:bg-deep-blue transition-colors">
            {pending || isPending ? "Saving..." : "Save Changes"}
        </Button>
    );
}

export function ContactSettingsForm({ settings }: { settings: any }) {
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsPending(true);
        setSuccess(false);
        try {
            await updateContactSettings(formData);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            console.error("Failed to update settings", error);
            alert("Failed to save settings");
        } finally {
            setIsPending(false);
        }
    }

    return (
        <form action={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-8 max-w-4xl">

            {success && (
                <div className="bg-green-100 text-green-700 px-4 py-3 rounded mb-4">
                    Settings saved successfully!
                </div>
            )}

            {/* Address & Contact Info */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">General Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            defaultValue={settings?.phone || ""}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            placeholder="010 - 123 45 67"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={settings?.email || ""}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            placeholder="info@mentiscare.nl"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Address (Bezoekadres)</label>
                    <textarea
                        name="address"
                        rows={3}
                        defaultValue={settings?.address || ""}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                        placeholder="Voorbeeldstraat 123, 3011 AA Rotterdam"
                    />
                </div>


            </div>

            {/* Social Media */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Social Media Links</h3>
                <p className="text-sm text-gray-500 mb-4">Leave empty to hide the icon.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Facebook URL</label>
                        <input
                            type="url"
                            name="facebook"
                            defaultValue={settings?.facebook || ""}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            placeholder="https://facebook.com/mentiscare"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Instagram URL</label>
                        <input
                            type="url"
                            name="instagram"
                            defaultValue={settings?.instagram || ""}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            placeholder="https://instagram.com/mentiscare"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">LinkedIn URL</label>
                        <input
                            type="url"
                            name="linkedin"
                            defaultValue={settings?.linkedin || ""}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            placeholder="https://linkedin.com/company/mentiscare"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Twitter / X URL</label>
                        <input
                            type="url"
                            name="twitter"
                            defaultValue={settings?.twitter || ""}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                            placeholder="https://twitter.com/mentiscare"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <SubmitButton isPending={isPending} />
            </div>
        </form>
    );
}
