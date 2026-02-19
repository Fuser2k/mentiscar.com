"use client";

import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { content } from "@/content";

export default function VoorWieEnWaarPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">


            <main className="flex-grow pt-24 md:pt-32">
                {/* Breadcrumbs */}
                <div className="container mx-auto px-4 md:px-6 mb-8">
                    <nav className="flex items-center text-sm text-gray-500">
                        <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                        <ChevronRight size={14} className="mx-2" />
                        <span className="text-navy font-medium">Voor wie en waar</span>
                    </nav>
                </div>

                {/* H1 + Intro */}
                <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 max-w-4xl">
                        Voor wie en waar
                    </h1>
                    <div className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-5xl space-y-6">
                        <p>
                            Mentis Care is er voor mensen met een blijvende zorgvraag (WLZ). Onze expertise ligt bij de ondersteuning van mensen met een (licht) verstandelijke beperking (VG) en volwassenen met psychische problematiek (GGZ Wonen).
                        </p>
                        <p>
                            Wij geloven dat iedereen, ongeacht beperking of achtergrond, recht heeft op een plek in de samenleving die bij hen past.
                        </p>
                    </div>
                </div>

                {/* Section A: Text left, Photo right */}
                <Section background="white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Voor wie is Mentis Care?
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Onze cliënten kunnen te maken hebben met:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Een verstandelijke beperking",
                                        "Psychiatrische problematiek (zoals autisme, angststoornissen)",
                                        "Moeite met het organiseren van het dagelijks leven",
                                        "Behoefte aan een prikkelarme en gestructureerde omgeving"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1.5 min-w-[20px] h-5 rounded-full bg-teal/20 flex items-center justify-center">
                                                <Check size={12} className="text-teal stroke-[3]" />
                                            </div>
                                            <span className="text-lg text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-navy font-medium italic">
                                    Onze focus ligt op volwassenen (18+). In specifieke gevallen kunnen wij in overleg kijken naar mogelijkheden voor jongeren (18-).
                                </p>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="/assets/voor-wie-is-mentis-care.png" // Diverse/People
                                    alt="Voor wie is Mentis Care"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section B: Photo left, Text right */}
                <Section background="soft-white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="/assets/werkgebied.png" // Rotterdam/City
                                    alt="Waar zijn wij actief"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Waar zijn wij actief?
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Mentis Care biedt ondersteuning in de regio Rotterdam en omliggende gemeenten. Onze woonlocaties zijn gevestigd in reguliere woonwijken, met goede bereikbaarheid van openbaar vervoer, winkels en groen.
                                    </p>
                                    <p>
                                        Wij vinden het belangrijk dat cliënten deel uitmaken van de wijk en zich thuis voelen in hun omgeving.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section C: Full width */}
                <Section background="white" className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
                                Begeleiding en behandeling
                            </h2>
                            <div className="text-xl text-gray-600 leading-relaxed space-y-6 mb-8">
                                <p>
                                    Mentis Care biedt begeleiding gericht op het dagelijks leven. Wij bieden géén specialistische behandeling. Indien behandeling nodig is, werken wij samen met huisartsen, GGZ-instellingen, VG-artsen en gedragsdeskundigen.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section D: Text left, Photo right */}
                <Section background="soft-white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Vrijwillige zorg en eigen regie
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Onze zorg is in principe vrijwillig. Dat betekent dat de cliënt instemt met de begeleiding en het wonen bij Mentis Care.
                                    </p>
                                    <p className="mb-4">
                                        In situaties waar onvrijwillige zorg (Wet zorg en dwang / Wvggz) aan de orde is, volgen wij strikt de wet- en regelgeving. Mentis Care streeft er echter naar om dwang en drang te voorkomen door in te zetten op preventie, de-escalatie en het opbouwen van een sterke vertrouwensrelatie.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1000&auto=format&fit=crop" // Trust/Support
                                    alt="Vrijwillige zorg"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Global CTA Section */}
                <div className="py-20 bg-teal relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Aanmelden of contact
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
                            Wilt u zich aanmelden of eerst kennismaken? Dat kan eenvoudig.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
                            <Link href="/aanmelden">
                                <Button variant="outline" className="bg-white text-teal hover:bg-navy hover:text-white border-white px-8 py-6 text-lg h-auto shadow-lg hover:shadow-xl w-full md:w-auto">
                                    Aanmelden als cliënt of namens een cliënt
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-teal px-8 py-6 text-lg h-auto w-full md:w-auto">
                                    Contact voor vragen of overleg
                                </Button>
                            </Link>
                        </div>

                        <p className="text-lg opacity-90 leading-relaxed font-medium">
                            We denken graag met u mee over passende ondersteuning.<br />
                            <span className="opacity-75 font-normal">Mentis Care – betrokken begeleiding, met oog voor het dagelijks leven.</span>
                        </p>
                    </div>
                    {/* Background pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl opacity-30" />
                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy rounded-full blur-3xl opacity-30" />
                    </div>
                </div>
            </main>


        </div>
    );
}
