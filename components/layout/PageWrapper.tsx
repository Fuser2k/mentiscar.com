"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function PageWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <main
            className={cn(
                "min-h-screen flex-grow transition-all duration-300",
                !isHome && "pt-[80px]" // Add top padding for all pages except Home, matching Header height approx
            )}
        >
            {children}
        </main>
    );
}
