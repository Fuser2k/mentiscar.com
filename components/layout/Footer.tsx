import Link from "next/link";
import { content } from "@/content";
import { Button } from "@/components/ui/Button"; // Or direct link styling if preferred
import { Instagram, MapPin, Phone, Mail, Facebook, Linkedin } from "lucide-react";
import { getContactSettings } from "@/app/actions/contact";

export async function Footer() {
    let dbSettings = null;
    try {
        dbSettings = await getContactSettings();
    } catch (e) {
        console.error("Failed to load footer settings:", e);
    }

    const { brandName, contactInfo, tagline } = content.global;

    const displayInfo = {
        address: dbSettings?.address || contactInfo.address,
        phone: dbSettings?.phone || contactInfo.phone,
        email: dbSettings?.email || contactInfo.email,
        facebook: dbSettings?.facebook,
        instagram: dbSettings?.instagram,
        linkedin: dbSettings?.linkedin,
        twitter: dbSettings?.twitter,
    };

    return (
        <footer className="bg-navy text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                {/* Top CTA Area */}
                <div className="flex flex-col md:flex-row items-center justify-between bg-deep-blue rounded-2xl p-8 mb-12 shadow-lg">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">Klaar om te starten?</h2>
                        <p className="text-soft-white/80">Neem contact op of meld u direct aan.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/aanmelden">
                            <Button variant="primary" size="lg">
                                Aanmelden
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                                Contact
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold mb-4">
                            Mentis<span className="text-cyan-accent">Care</span>
                        </h3>
                        <p className="text-soft-white/70 mb-6 leading-relaxed">
                            {tagline}
                        </p>

                        <div className="flex gap-3">
                            {displayInfo.facebook && (
                                <a
                                    href={displayInfo.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-deep-blue hover:bg-cyan-accent transition-colors text-white"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={20} />
                                </a>
                            )}
                            {displayInfo.instagram && (
                                <a
                                    href={displayInfo.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-deep-blue hover:bg-cyan-accent transition-colors text-white"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={20} />
                                </a>
                            )}
                            {displayInfo.linkedin && (
                                <a
                                    href={displayInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-deep-blue hover:bg-cyan-accent transition-colors text-white"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={20} />
                                </a>
                            )}
                            {displayInfo.twitter && (
                                <a
                                    href={displayInfo.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-deep-blue hover:bg-cyan-accent transition-colors text-white"
                                    aria-label="X (formerly Twitter)"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.901 0H22.581L14.541 9.184L24 21.691H16.594L10.796 14.106L4.156 21.691H0.474L9.088 11.838L0 0H7.593L12.827 6.921L18.901 0ZM17.61 19.489H19.649L6.486 2.086H4.298L17.61 19.489Z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-cyan-accent">Navigatie</h4>
                        <ul className="space-y-2">
                            {content.global.navigation.slice(0, 5).map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-soft-white/70 hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-cyan-accent">Informatie</h4>
                        <ul className="space-y-2">
                            {content.global.navigation.slice(5).map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="text-soft-white/70 hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/over#visie" className="text-soft-white/70 hover:text-white transition-colors">
                                    Onze Visie
                                </Link>
                            </li>
                            <li>
                                <Link href="/over#missie" className="text-soft-white/70 hover:text-white transition-colors">
                                    Onze Missie
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-soft-white/70 hover:text-white transition-colors">
                                    Privacyverklaring
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-soft-white/70 hover:text-white transition-colors">
                                    Cookiebeleid
                                </Link>
                            </li>
                            <li>
                                <Link href="/algemene-voorwaarden" className="text-soft-white/70 hover:text-white transition-colors">
                                    Algemene Voorwaarden
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="text-soft-white/70 hover:text-white transition-colors">
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-cyan-accent">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-soft-white/70">
                                <MapPin className="shrink-0 text-cyan-accent" size={20} />
                                <span className="whitespace-pre-wrap">{displayInfo.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-soft-white/70">
                                <Phone className="shrink-0 text-cyan-accent" size={20} />
                                <a href={`tel:${displayInfo.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                                    {displayInfo.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-soft-white/70">
                                <Mail className="shrink-0 text-cyan-accent" size={20} />
                                <a href={`mailto:${displayInfo.email}`} className="hover:text-white transition-colors">
                                    {displayInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 text-center text-sm text-soft-white/40">
                    <p>&copy; {new Date().getFullYear()} {brandName}. Alle rechten voorbehouden.</p>
                </div>
            </div>
        </footer>
    );
}
