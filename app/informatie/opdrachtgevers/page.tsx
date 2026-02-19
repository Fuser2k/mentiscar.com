"use client";

import Link from "next/link";
import { ChevronRight, Check, Quote } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { content } from "@/content";

export default function OpdrachtgeversPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">

            <main className="flex-grow pt-24 md:pt-32">
                {/* Breadcrumbs */}
                <div className="container mx-auto px-4 md:px-6 mb-8">
                    <nav className="flex items-center text-sm text-gray-500">
                        <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                        <ChevronRight size={14} className="mx-2" />
                        <Link href="/informatie-voor" className="hover:text-teal transition-colors">Informatie</Link>
                        <ChevronRight size={14} className="mx-2" />
                        <span className="text-navy font-medium">Opdrachtgevers</span>
                    </nav>
                </div>

                {/* H1 + Intro */}
                <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 relative">
                    {/* Decorative Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10" />

                    <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 max-w-4xl relative z-10">
                        Opdrachtgevers
                    </h1>

                    <div className="relative z-10 pl-8 md:pl-12 border-l-4 border-teal/20">
                        {/* Side Decoration Left (Overlay) */}
                        <div className="hidden lg:block absolute -left-[3px] top-0 h-16 w-1 bg-teal rounded-full" />
                        <div className="hidden lg:block absolute -left-[3px] bottom-0 h-16 w-1 bg-teal rounded-full" />

                        <div className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-5xl space-y-6">
                            <p>
                                Mentis Care biedt zorg en begeleiding aan mensen die langdurige ondersteuning nodig hebben om zo stabiel, zelfstandig en volwaardig mogelijk te leven. In opdracht van gemeenten, zorgkantoren en andere publieke opdrachtgevers leveren wij zorg binnen de Wet langdurige zorg (WLZ).
                            </p>
                            <p>
                                Wij werken vanuit partnerschap: transparant, professioneel en met oog voor kwaliteit en continuïteit.
                            </p>
                        </div>

                        {/* Side Decoration Right */}
                        <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 opacity-60">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="48" stroke="#2DD4BF" strokeWidth="1" strokeDasharray="4 4" />
                                <circle cx="50" cy="50" r="30" stroke="#2DD4BF" strokeWidth="2" />
                                <circle cx="50" cy="50" r="10" fill="#2DD4BF" fillOpacity="0.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Section A: Text left, Photo right */}
                <Section background="white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Passende ondersteuning met blijvend effect
                                </h2>
                                <div className="prose prose-lg text-gray-600 mb-8">
                                    <p className="mb-4">
                                        Mentis Care richt zich op ondersteuning die aansluit bij de leefwereld en mogelijkheden van de cliënt. Onze zorg is doelgericht en proportioneel: intensief waar nodig en afbouwend waar mogelijk.
                                    </p>
                                    <p className="mb-4">
                                        Wij ondersteunen cliënten onder andere bij:
                                    </p>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Wonen en dagelijks functioneren",
                                        "Structuur en stabiliteit in het dagelijks leven",
                                        "Dagbesteding en maatschappelijke participatie",
                                        "Het versterken van sociale vaardigheden en netwerken"
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
                                    Door zorg zorgvuldig af te stemmen op de indicatie en de persoonlijke situatie dragen wij bij aan duurzame ontwikkeling en kwaliteit van leven.
                                </p>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" // Professional/Planning/Strategy
                                    alt="Passende ondersteuning"
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
                                    src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1000&auto=format&fit=crop" // Focus/Results/Chart
                                    alt="Resultaatgericht en verantwoord"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Resultaatgericht en verantwoord
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Waar mogelijk richten wij ons op het voorkomen van zwaardere zorg door tijdig passende ondersteuning te bieden. Binnen de WLZ betekent dit dat wij inzetten op ontwikkelingsgerichte zorg, met regelmatige evaluatie en bijstelling.
                                    </p>
                                    <p>
                                        Wanneer de situatie van een cliënt dat toelaat, wordt de zorg verantwoord afgeschaald. Elke stap richting meer zelfstandigheid en stabiliteit zien wij als een waardevol resultaat.
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
                                Inzet en ontwikkelrichtingen
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Mentis Care werkt vanuit een heldere koers gericht op toekomstbestendige zorg. In samenwerking met opdrachtgevers zetten wij in op:
                            </p>

                            <div className="grid md:grid-cols-3 gap-8 mb-16 text-left relative z-10">
                                {[
                                    {
                                        title: "Zinvolle daginvulling",
                                        desc: "Een zinvolle en passende daginvulling voor cliënten die bijdraagt aan structuur en welzijn."
                                    },
                                    {
                                        title: "Toekomstbestendige zorg",
                                        desc: "Zorg die aansluit bij veranderende zorgvragen, zoals ouder wordende cliënten en complexere casuïstiek."
                                    },
                                    {
                                        title: "Netwerkversterking",
                                        desc: "Het actief betrekken en versterken van het netwerk rondom de cliënt voor duurzame resultaten."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-2">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-teal/10 transition-colors" />

                                        <div className="mb-6 w-14 h-14 rounded-2xl bg-navy flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                                            <Check size={28} strokeWidth={3} />
                                        </div>

                                        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {item.desc}
                                        </p>

                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal to-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </div>
                                ))}
                            </div>

                            <p className="text-lg md:text-xl font-medium text-navy italic">
                                Deze uitgangspunten vormen de basis voor onze samenwerking en verdere ontwikkeling.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Section D: Text left, Photo right */}
                <Section background="soft-white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Samenwerking en netwerkzorg
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Mentis Care werkt samen met gemeenten, zorgkantoren, woningcorporaties en andere zorg- en welzijnspartners. Door samen te werken binnen regionale netwerken zorgen we voor samenhangende ondersteuning en korte lijnen.
                                    </p>
                                    <p>
                                        Wij geloven dat goede zorg niet op zichzelf staat, maar ontstaat in verbinding met andere partijen in het sociaal en zorgdomein.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop" // Network/Connection
                                    alt="Samenwerking en netwerkzorg"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section E: Photo left, Text right */}
                <Section background="white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" // Digital/Tablet
                                    alt="Digitale ondersteuning"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Digitale ondersteuning
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p>
                                        Digitale middelen zetten wij ondersteunend in om overzicht, communicatie en zelfredzaamheid te vergroten. Waar passend combineren wij fysieke begeleiding met digitale ondersteuning, altijd afgestemd op de mogelijkheden van de cliënt.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section F: Full width */}
                <Section background="soft-white" className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
                                Offertes en samenwerking
                            </h2>
                            <div className="text-xl text-gray-600 leading-relaxed space-y-6 mb-8">
                                <p>
                                    Voor aanvragen, samenwerkingen en contractuele trajecten is Mentis Care een betrouwbare en professionele partner. Wij beoordelen opdrachten zorgvuldig op haalbaarheid, kwaliteit en aansluiting bij onze visie en expertise.
                                </p>
                                <p>
                                    Wij staan open voor overleg en denken graag mee over passende oplossingen binnen het geldende beleids- en financieringskader.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section G: Photo left, Text right */}
                <Section background="white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1449824913929-224866192abd?q=80&w=1000&auto=format&fit=crop" // City/Region
                                    alt="Werkgebied"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Werkgebied
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p>
                                        Mentis Care is actief in Rotterdam en omliggende gemeenten. Onze zorg vindt plaats op woonlocaties in reguliere wijken en sluit aan bij de lokale context.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Closing Tagline */}
                <div className="container mx-auto px-4 md:px-6 pb-20 pt-10 text-center relative">
                    <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                        {/* Left Decoration */}
                        <div className="hidden md:flex items-center gap-3 opacity-30">
                            <div className="w-12 h-[1px] bg-teal" />
                            <div className="w-2 h-2 rounded-full bg-teal" />
                            <Quote size={32} className="text-teal transform rotate-180 mb-4" />
                        </div>

                        <p className="text-3xl md:text-4xl font-serif text-teal italic font-light max-w-4xl leading-tight relative z-10">
                            "Mentis Care – een betrouwbare partner in langdurige zorg."
                        </p>

                        {/* Right Decoration */}
                        <div className="hidden md:flex items-center gap-3 opacity-30">
                            <Quote size={32} className="text-teal mt-4" />
                            <div className="w-2 h-2 rounded-full bg-teal" />
                            <div className="w-12 h-[1px] bg-teal" />
                        </div>
                    </div>
                </div>

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
