"use client";

import Link from "next/link";
import { ChevronRight, MapPin, Users, Clock, Home, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { content } from "@/content";

export default function LocationsPage() {
    const { contactInfo } = content.global;

    return (
        <div className="min-h-screen flex flex-col font-sans">
            <main className="flex-grow pt-24 md:pt-32">
                {/* Breadcrumbs */}
                <div className="container mx-auto px-4 md:px-6 mb-8">
                    <nav className="flex items-center text-sm text-gray-500">
                        <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                        <ChevronRight size={14} className="mx-2" />
                        <span className="text-navy font-medium">Locaties</span>
                    </nav>
                </div>

                {/* Header */}
                <div className="container mx-auto px-4 md:px-6 mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">Onze Locaties</h1>
                    <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                        Mentis Care biedt woonondersteuning in Rotterdam en omgeving. Onze locaties zijn kleinschalig, huiselijk en midden in de samenleving.
                    </p>
                </div>

                {/* Rotterdam West */}
                <Section background="white" className="py-12 md:py-20 border-t border-gray-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="order-2 md:order-1 relative h-[500px] rounded-3xl overflow-hidden shadow-xl group">
                                <ImageWithFallback
                                    src="/assets/werkgebied.png"
                                    alt="Locatie Rotterdam West"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-navy font-bold shadow-lg">
                                    <MapPin size={18} className="text-teal" />
                                    Rotterdam West
                                </div>
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-bold mb-4">Extramuraal begeleid wonen</div>
                                    <h2 className="text-3xl font-bold text-navy mb-4">Kleinschalig wonen in Rotterdam West</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Mentis Care biedt in Rotterdam West een kleinschalige woonvoorziening voor vijf cliënten met een verstandelijke beperking, al dan niet in combinatie met psychiatrische kwetsbaarheid. De locatie is ingericht als een 24-uurs intramurale setting met permanente begeleiding.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-4 rounded-2xl">
                                        <Users className="text-teal mb-2" size={24} />
                                        <div className="font-bold text-navy">5 Bewoners</div>
                                        <div className="text-sm text-gray-500">Capaciteit</div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-2xl">
                                        <Clock className="text-teal mb-2" size={24} />
                                        <div className="font-bold text-navy">24-uurs</div>
                                        <div className="text-sm text-gray-500">Begeleiding</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-bold text-navy text-lg">Voorzieningen per bewoner:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center gap-2"><Check size={16} className="text-teal" /> Eigen woon-/slaapkamer</li>
                                        <li className="flex items-center gap-2"><Check size={16} className="text-teal" /> Eigen sanitaire voorziening</li>
                                        <li className="flex items-center gap-2"><Check size={16} className="text-teal" /> Gezamenlijke woonkamer & keuken</li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 italic border-l-4 border-teal/30 pl-4">
                                    De locatie is gelegen in een bestaande woonwijk met voorzieningen en openbaar vervoer op loopafstand, wat maatschappelijke participatie ondersteunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Rotterdam Zuid */}
                <Section background="soft-white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6">
                                <div>
                                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">Extramuraal begeleid wonen</div>
                                    <h2 className="text-3xl font-bold text-navy mb-4">Zelfstandig wonen in Rotterdam Zuid</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        In Rotterdam Zuid biedt Mentis Care een extramurale woonsetting voor 12 cliënten. Hier wonen cliënten zelfstandig, met begeleiding die ambulant en planbaar wordt ingezet op basis van individuele zorgbehoefte.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
                                        <Home className="text-blue-500 mb-2" size={24} />
                                        <div className="font-bold text-navy">12 Bewoners</div>
                                        <div className="text-sm text-gray-500">Zelfstandige units</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-50">
                                        <Users className="text-blue-500 mb-2" size={24} />
                                        <div className="font-bold text-navy">Ambulant</div>
                                        <div className="text-sm text-gray-500">Begeleiding op maat</div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-bold text-navy text-lg">Doelgroep & Focus:</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-center gap-2"><Check size={16} className="text-blue-500" /> Zelfstandig wonen met structuur</li>
                                        <li className="flex items-center gap-2"><Check size={16} className="text-blue-500" /> Ondersteuning bij dagelijkse organisatie</li>
                                        <li className="flex items-center gap-2"><Check size={16} className="text-blue-500" /> Psychosociale stabiliteit</li>
                                    </ul>
                                </div>

                                <p className="text-gray-600 italic border-l-4 border-blue-200 pl-4">
                                    Onze visie: Een stabiele en duurzame woonomgeving binnen het stedelijk netwerk van Rotterdam, met maximale eigen regie.
                                </p>
                            </div>
                            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl group">
                                <ImageWithFallback
                                    src="/assets/home-wie-wij-ondersteunen.png"
                                    alt="Locatie Rotterdam Zuid"
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 text-navy font-bold shadow-lg">
                                    <MapPin size={18} className="text-blue-500" />
                                    Rotterdam Zuid
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* CTA */}
                <Section background="navy" className="py-20 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Meer weten over onze locaties?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Neem contact op voor actuele beschikbaarheid en aanmeldingsprocedures.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link href="/contact">
                                <Button size="lg" className="bg-teal hover:bg-teal/90 text-white">
                                    Neem contact op
                                </Button>
                            </Link>
                            <Link href="/aanmelden">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                    Aanmelden
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Section>
            </main>
        </div>
    );
}
