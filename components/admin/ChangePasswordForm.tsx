"use client";

import { useActionState } from "react";
import { changePassword } from "@/app/actions/settings";
import { Button } from "@/components/ui/Button";

const initialState: { error?: string; success?: string } = {};

export function ChangePasswordForm() {
    const [state, formAction, isPending] = useActionState(changePassword, initialState);

    return (
        <form action={formAction} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 max-w-2xl space-y-6">
            <h2 className="text-xl font-bold text-navy mb-4">Wachtwoord Wijzigen</h2>

            {state?.error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-100 text-sm">
                    {state.error}
                </div>
            )}

            {state?.success && (
                <div className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-100 text-sm">
                    {state.success}
                </div>
            )}

            <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Huidig Wachtwoord</label>
                <input
                    type="password"
                    name="currentPassword"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Nieuw Wachtwoord</label>
                    <input
                        type="password"
                        name="newPassword"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Bevestig Wachtwoord</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                    />
                </div>
            </div>

            <div className="pt-4 flex justify-end">
                <Button
                    type="submit"
                    disabled={isPending}
                    className="bg-navy text-white px-8 py-3 rounded-xl hover:bg-deep-blue shadow-lg py-2 disabled:opacity-50"
                >
                    {isPending ? "Opslaan..." : "Opslaan"}
                </Button>
            </div>
        </form>
    );
}
