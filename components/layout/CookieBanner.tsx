"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Cookie } from "lucide-react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (consent === null) {
            // Show only if no decision made yet
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "true");
        setIsVisible(false);
        // Here you would typically initialize analytics
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:flex md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4 mb-6 md:mb-0">
                    <div className="bg-teal/10 p-3 rounded-xl text-teal shrink-0 hidden sm:block">
                        <Cookie size={24} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-navy mb-2">Wij gebruiken cookies</h3>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                            Deze website gebruikt cookies om uw ervaring te verbeteren en om inzicht te krijgen in hoe onze website wordt gebruikt.
                            Door op 'Accepteren' te klikken, gaat u akkoord met het gebruik van functionele en analytische cookies.
                            Lees meer in ons <Link href="/cookies" className="text-teal hover:underline font-medium">cookiebeleid</Link>.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                    <Button
                        variant="primary"
                        onClick={handleAccept}
                        className="w-full sm:w-auto shadow-md hover:shadow-lg transition-shadow"
                    >
                        Accepteren
                    </Button>
                </div>
            </div>
        </div>
    );
}

