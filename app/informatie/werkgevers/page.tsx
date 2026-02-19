"use client";

import Link from "next/link";
import { ChevronRight, Check, Quote } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { content } from "@/content";

export default function WerkgeversPage() {
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
                        <span className="text-navy font-medium">Werkgevers</span>
                    </nav>
                </div>

                {/* H1 + Intro */}
                <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 relative">
                    {/* Decorative Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10" />

                    <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 max-w-4xl relative z-10">
                        Werkgevers
                    </h1>

                    <div className="relative z-10 pl-8 md:pl-12 border-l-4 border-teal/20">
                        {/* Side Decoration Left (Overlay) */}
                        <div className="hidden lg:block absolute -left-[3px] top-0 h-16 w-1 bg-teal rounded-full" />
                        <div className="hidden lg:block absolute -left-[3px] bottom-0 h-16 w-1 bg-teal rounded-full" />

                        <div className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-5xl space-y-6">
                            <p>
                                Mentis Care werkt samen met werkgevers die ruimte willen bieden aan mensen met een ondersteuningsvraag. Samen verkennen we mogelijkheden voor passende werkzaamheden en een duurzame samenwerking, afgestemd op de mogelijkheden en belastbaarheid van de cliënt.
                            </p>
                            <p>
                                Wij geloven dat meedoen op de arbeidsmarkt op verschillende manieren kan plaatsvinden en dat maatwerk hierbij essentieel is.
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
                                    Samen werken aan passend werk
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Voor veel cliënten draagt (arbeidsmatige) activiteit bij aan structuur, zelfvertrouwen en zingeving. Dit betekent niet altijd regulier betaald werk. Samen met werkgevers kijken we naar werkzaamheden die haalbaar, zinvol en passend zijn.
                                    </p>
                                    <p>
                                        Mentis Care ondersteunt cliënten bij het uitvoeren van werkzaamheden en begeleidt waar nodig het proces, zodat verwachtingen voor alle betrokkenen helder zijn.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop" // Meeting/Collaboration
                                    alt="Samen werken aan passend werk"
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
                                    src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=1000&auto=format&fit=crop" // Office/Team
                                    alt="Wat Mentis Care kan betekenen"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Wat Mentis Care kan betekenen
                                </h2>
                                <p className="text-lg text-gray-600 mb-6">
                                    Mentis Care ondersteunt werkgevers onder andere door:
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Het meedenken over passende werkzaamheden",
                                        "Afstemming op tempo, belastbaarheid en structuur",
                                        "Begeleiding van cliënten tijdens activiteiten of werk",
                                        "Ondersteuning bij communicatie en afstemming",
                                        "Het bieden van duidelijkheid over rollen en verwachtingen"
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
                                    De samenwerking is altijd maatgericht en afgestemd op de situatie van zowel de cliënt als de werkgever.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section C: Full width */}
                <Section background="white" className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy">
                                Voor wie is samenwerking met Mentis Care?
                            </h2>
                            <div className="text-xl text-gray-600 leading-relaxed space-y-6 mb-8">
                                <p>
                                    Mentis Care werkt samen met werkgevers die openstaan voor inclusie en maatschappelijk betrokken ondernemen. Dit kunnen reguliere bedrijven zijn, sociale ondernemingen of organisaties die ruimte hebben voor arbeidsmatige dagbesteding of werkervaring.
                                </p>
                                <p>
                                    Samen kijken we wat haalbaar is binnen de bestaande werkomgeving, zonder druk of onrealistische verwachtingen.
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
                                    Begeleiding en ondersteuning
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Cliënten die via Mentis Care deelnemen aan werkzaamheden blijven altijd onder begeleiding. Wij zorgen voor afstemming tussen cliënt, werkgever en andere betrokken partijen.
                                    </p>
                                    <p>
                                        Waar nodig bieden wij ondersteuning bij het opbouwen van werkritme, het leren samenwerken en het omgaan met verantwoordelijkheden.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" // Support/Coaching/Team
                                    alt="Begeleiding en ondersteuning"
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
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" // Office/Workspace
                                    alt="Werkgebied en samenwerking"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Werkgebied en samenwerking
                                </h2>
                                <div className="prose prose-lg text-gray-600 mb-8">
                                    <p className="mb-4">
                                        Mentis Care is actief in Rotterdam en omliggende gemeenten. Wij werken samen met werkgevers, gemeenten en andere partners binnen regionale netwerken.
                                    </p>
                                    <p>
                                        Door korte lijnen en duidelijke afspraken zorgen we voor samenwerking die overzichtelijk en duurzaam is.
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
                            "Mentis Care – samen werken aan mogelijkheden."
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
