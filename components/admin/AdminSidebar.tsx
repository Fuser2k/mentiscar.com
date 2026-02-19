"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Settings, Mail, MapPin, LogOut, X } from "lucide-react";
import { signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/posts", label: "Posts", icon: FileText },
    { href: "/admin/messages", label: "Messages", icon: Mail },
    { href: "/admin/contact", label: "Contact Info", icon: MapPin },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

interface AdminSidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export function AdminSidebar({ isOpen = true, onClose }: AdminSidebarProps) {
    const pathname = usePathname();
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768; // Simple check, handling prop is better

    // Close on navigation (mobile only)
    useEffect(() => {
        if (onClose) onClose();
    }, [pathname, onClose]);

    const SidebarContent = (
        <div className="flex flex-col h-full bg-navy text-white">
            {/* Header */}
            <div className="p-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-cyan-accent">MentisAdmin</h2>
                {onClose && (
                    <button onClick={onClose} className="md:hidden text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                )}
            </div>

            <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                                isActive
                                    ? "bg-cyan-accent/20 text-cyan-accent border-l-4 border-cyan-accent"
                                    : "text-gray-300 hover:bg-white/5 hover:text-white border-l-4 border-transparent"
                            )}
                        >
                            <Icon size={20} />
                            <span>{item.label}</span>
                        </Link>
                    );
                })}

                <div className="pt-8 border-t border-white/10 mt-4">
                    <button
                        onClick={() => {
                            const callbackUrl = window.location.origin + "/admin/login";
                            signOut({ callbackUrl });
                        }}
                        className="flex items-center gap-3 px-4 py-3 w-full text-left text-red-400 hover:text-red-300 hover:bg-white/5 rounded-lg transition-colors"
                    >
                        <LogOut size={20} />
                        <span>Uitloggen</span>
                    </button>
                </div>
            </nav>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar (Always visible md+) */}
            <aside className="hidden md:flex w-64 h-screen flex-col shrink-0">
                {SidebarContent}
            </aside>

            {/* Mobile Sidebar (AnimatePresence) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }} // Only drag left to close is simpler logic-wise via dragEnd
                            dragElastic={{ left: 0.2, right: 0 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                if (offset.x < -100 || velocity.x < -500) {
                                    onClose?.();
                                }
                            }}
                            className="fixed top-0 left-0 w-64 h-[100dvh] z-50 md:hidden shadow-xl"
                        >
                            {SidebarContent}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
