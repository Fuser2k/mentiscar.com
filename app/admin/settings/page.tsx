import { ChangePasswordForm } from "@/components/admin/ChangePasswordForm";
import { Lock } from "lucide-react";

export const dynamic = 'force-dynamic';

export default function SettingsPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-navy flex items-center gap-3">
                    <Lock size={32} className="text-teal" />
                    Instellingen
                </h1>
            </div>

            <div className="max-w-4xl">
                <ChangePasswordForm />
            </div>
        </div>
    );
}
