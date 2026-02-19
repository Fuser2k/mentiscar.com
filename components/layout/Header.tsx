"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { content } from "@/content";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileSubmenu = (label: string) => {
        if (mobileSubmenuOpen === label) {
            setMobileSubmenuOpen(null);
        } else {
            setMobileSubmenuOpen(label);
        }
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-[10000] transition-all duration-300 w-full max-w-[100vw]",
                    scrolled ? "bg-navy py-3 shadow-md" : "bg-navy/90 py-5 backdrop-blur-sm"
                )}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between text-white relative">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tight z-50 relative">
                        Mentis<span className="text-cyan-accent">Care</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center xl:gap-3 2xl:gap-8">
                        {content.global.navigation.map((item) => (
                            <div key={item.label} className="relative group">
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 xl:text-xs 2xl:text-sm font-medium hover:text-cyan-accent transition-colors py-2"
                                >
                                    {item.label}
                                    {item.subItems && (
                                        <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {item.subItems && (
                                    <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                                        <div className="bg-white rounded-xl shadow-xl overflow-hidden py-2 border-t-4 border-cyan-accent">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.href}
                                                    href={subItem.href}
                                                    className="block px-4 py-3 text-navy hover:bg-gray-50 hover:text-cyan-600 transition-colors text-sm font-medium border-b border-gray-50 last:border-0"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden xl:flex items-center gap-2 2xl:gap-3">
                        <Link href="/aanmelden">
                            <Button variant="primary" size="sm" className="xl:px-3 2xl:px-4 xl:text-xs 2xl:text-sm">
                                Aanmelden
                            </Button>
                        </Link>

                    </div>


                </div>

                {/* Mobile Menu Toggle - Positioned Absolute to Header */}
                <button
                    className="xl:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 text-white hover:bg-white/20 rounded-md flex items-center justify-center w-12 h-12 z-[10001]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    )}
                </button>
            </header>

            {/* Mobile Nav Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-navy z-[9999] xl:hidden transition-transform duration-300 ease-in-out pt-24 px-6 overflow-y-auto",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <nav className="flex flex-col gap-2">
                    {content.global.navigation.map((item) => (
                        <div key={item.label} className="border-b border-white/10 last:border-0">
                            <div
                                className="flex items-center justify-between py-4 cursor-pointer"
                                onClick={(e) => {
                                    if (item.subItems) {
                                        e.preventDefault();
                                        toggleMobileSubmenu(item.label);
                                    }
                                }}
                            >
                                <Link
                                    href={item.href}
                                    className="text-lg font-medium text-white hover:text-cyan-accent flex-1"
                                    onClick={(e) => {
                                        if (item.subItems) {
                                            e.preventDefault();
                                            // The parent onClick will handle the toggle, but preventDefault is crucial here to stop navigation
                                        } else {
                                            setIsOpen(false);
                                        }
                                    }}
                                >
                                    {item.label}
                                </Link>
                                {item.subItems && (
                                    <button
                                        className="p-2 text-white/70 hover:text-white"
                                    >
                                        <ChevronDown
                                            size={20}
                                            className={cn("transition-transform", mobileSubmenuOpen === item.label ? "rotate-180" : "")}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Submenu */}
                            {item.subItems && (
                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300",
                                        mobileSubmenuOpen === item.label ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="flex flex-col gap-1 pl-4 border-l-2 border-cyan-accent/30 ml-2">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className="py-2 text-white/80 hover:text-cyan-accent text-sm"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex flex-col gap-3 mt-8">
                        <Link href="/aanmelden" onClick={() => setIsOpen(false)}>
                            <Button variant="primary" className="w-full justify-center">
                                Aanmelden
                            </Button>
                        </Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <Button variant="outline" className="w-full justify-center border-white text-white hover:bg-white hover:text-navy">
                                Contact
                            </Button>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}
