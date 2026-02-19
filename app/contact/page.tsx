import { Section } from "@/components/ui/Section";
import { content } from "@/content";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { getContactSettings } from "@/app/actions/contact";
import { ContactForm } from "@/components/sections/ContactForm";

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
    let dbSettings = null;
    try {
        dbSettings = await getContactSettings();
    } catch (e) {
        console.error("Failed to load contact settings, using defaults. Error:", e);
        // Fallback or ignore if DB migration isn't applied yet
    }

    const { contactInfo } = content.global;

    const displaySettings = {
        address: dbSettings?.address || contactInfo.address,
        phone: dbSettings?.phone || contactInfo.phone,
        email: dbSettings?.email || contactInfo.email,
        facebook: dbSettings?.facebook,
        instagram: dbSettings?.instagram,
        linkedin: dbSettings?.linkedin,
        twitter: dbSettings?.twitter,
    };

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-blue-100 via-blue-50 to-white relative overflow-hidden">
            {/* Decorative Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-70" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4 opacity-70" />

            <main className="flex-grow pt-24 md:pt-32 relative z-10">
                <Section className="pb-20">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy">Contact</h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Hoe kunnen we je helpen? Heb je een vraag, wil je overleggen of kom je graag eens langs? Neem gerust contact met ons op.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Left Column: Contact Info & Socials */}
                            <div className="space-y-8">
                                {/* Contact Cards */}
                                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
                                    <div className="flex items-start gap-5 group">
                                        <div className="bg-teal/10 p-4 rounded-2xl text-teal group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                                            <MapPin size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-navy mb-2">Bezoekadres</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">{displaySettings.address}</p>
                                            <p className="text-teal font-medium mt-1 text-sm bg-teal/5 inline-block px-3 py-1 rounded-full">Alleen op afspraak</p>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-gray-100"></div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="bg-blue-50 p-4 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                            <Phone size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-navy mb-2">Telefoon</h3>
                                            <a href={`tel:${displaySettings.phone.replace(/\s/g, "")}`} className="text-gray-600 hover:text-teal transition-colors text-lg font-medium block mb-1">
                                                {displaySettings.phone}
                                            </a>
                                            <p className="text-gray-400 text-sm">Bereikbaar op werkdagen van 09:00 tot 17:00</p>
                                        </div>
                                    </div>

                                    <div className="w-full h-px bg-gray-100"></div>

                                    <div className="flex items-start gap-5 group">
                                        <div className="bg-purple-50 p-4 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                                            <Mail size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-navy mb-2">E-mail</h3>
                                            <a href={`mailto:${displaySettings.email}`} className="text-gray-600 hover:text-teal transition-colors text-lg font-medium">
                                                {displaySettings.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Media Section */}
                                <div className="bg-navy p-8 rounded-3xl shadow-lg text-white text-center">
                                    <h3 className="text-2xl font-bold mb-6">Volg ons op social media</h3>
                                    <div className="flex justify-center gap-4">
                                        {displaySettings.facebook && (
                                            <Link href={displaySettings.facebook} target="_blank" className="bg-white/10 hover:bg-teal text-white p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                                <Facebook size={24} />
                                            </Link>
                                        )}
                                        {displaySettings.instagram && (
                                            <Link href={displaySettings.instagram} target="_blank" className="bg-white/10 hover:bg-teal text-white p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                                <Instagram size={24} />
                                            </Link>
                                        )}
                                        {displaySettings.linkedin && (
                                            <Link href={displaySettings.linkedin} target="_blank" className="bg-white/10 hover:bg-teal text-white p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                                <Linkedin size={24} />
                                            </Link>
                                        )}
                                        {displaySettings.twitter && (
                                            <Link href={displaySettings.twitter} target="_blank" className="bg-white/10 hover:bg-teal text-white p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.901 0H22.581L14.541 9.184L24 21.691H16.594L10.796 14.106L4.156 21.691H0.474L9.088 11.838L0 0H7.593L12.827 6.921L18.901 0ZM17.61 19.489H19.649L6.486 2.086H4.298L17.61 19.489Z" />
                                                </svg>
                                            </Link>
                                        )}
                                        {!displaySettings.facebook && !displaySettings.instagram && !displaySettings.linkedin && !displaySettings.twitter && (
                                            <p className="text-gray-400">Geen social media gekoppeld.</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Contact Form */}
                            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 sticky top-32">
                                <h2 className="text-3xl font-bold mb-2 text-navy">Stuur een bericht</h2>
                                <p className="text-gray-500 mb-8">Vul het formulier in en we nemen zo snel mogelijk contact op.</p>
                                <ContactForm />
                            </div>
                        </div>

                    </div>
                </Section>
            </main>
        </div>
    );
}
