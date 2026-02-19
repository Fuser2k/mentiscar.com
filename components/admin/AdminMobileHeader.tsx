"use client";

import { Menu, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assuming you have a utils file, if not I'll adjust
import { Button } from "@/components/ui/Button";

interface AdminMobileHeaderProps {
    onOpenSidebar: () => void;
}

export function AdminMobileHeader({ onOpenSidebar }: AdminMobileHeaderProps) {
    const pathname = usePathname();

    // Generate breadcrumbs from pathname
    // e.g., /admin/posts/create -> Admin > Posts > Create
    const paths = pathname.split('/').filter(Boolean);

    const breadcrumbs = paths.map((path, index) => {
        const href = `/${paths.slice(0, index + 1).join('/')}`;
        const label = path.charAt(0).toUpperCase() + path.slice(1);
        const isLast = index === paths.length - 1;

        return {
            href,
            label,
            isLast
        };
    });

    return (
        <header className="md:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200 sticky top-0 z-40">
            <div className="flex items-center gap-3 overflow-hidden">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onOpenSidebar}
                    className="shrink-0"
                >
                    <Menu size={24} className="text-navy" />
                    <span className="sr-only">Open Menu</span>
                </Button>

                <nav className="flex items-center text-sm text-gray-500 overflow-hidden whitespace-nowrap mask-linear-fade">
                    {breadcrumbs.map((crumb, index) => (
                        <div key={crumb.href} className="flex items-center">
                            {index > 0 && <ChevronRight size={14} className="mx-1 shrink-0" />}
                            <Link
                                href={crumb.href}
                                className={cn(
                                    "truncate",
                                    crumb.isLast ? "font-semibold text-navy pointer-events-none" : "hover:text-cyan-600 transition-colors"
                                )}
                            >
                                {crumb.label}
                            </Link>
                        </div>
                    ))}
                </nav>
            </div>

            <div className="shrink-0">
                {/* Placeholder for future actions like notifications */}
            </div>
        </header>
    );
}
