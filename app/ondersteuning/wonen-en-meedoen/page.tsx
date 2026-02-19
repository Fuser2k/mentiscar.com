"use client";

import Link from "next/link";
import { ChevronRight, Check, Phone, ArrowRight, Quote } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { CTASection } from "@/components/sections/CTASection";
import { content } from "@/content";

export default function WonenEnMeedoenPage() {
    const { ctaSection } = content.home;

    return (
        <div className="min-h-screen flex flex-col font-sans">

            <main className="flex-grow pt-24 md:pt-32">
                {/* Breadcrumbs */}
                <div className="container mx-auto px-4 md:px-6 mb-8">
                    <nav className="flex items-center text-sm text-gray-500">
                        <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                        <ChevronRight size={14} className="mx-2" />
                        <Link href="/ondersteuning" className="hover:text-teal transition-colors">Ondersteuning</Link>
                        <ChevronRight size={14} className="mx-2" />
                        <span className="text-navy font-medium">Wonen en meedoen</span>
                    </nav>
                </div>

                {/* H1 + Intro */}
                <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 relative">
                    {/* Decorative Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10" />

                    <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 max-w-4xl relative z-10">
                        Wonen en meedoen
                    </h1>

                    <div className="relative z-10 pl-8 md:pl-12 border-l-4 border-teal/20">
                        {/* Side Decoration Left (Overlay) */}
                        <div className="hidden lg:block absolute -left-[3px] top-0 h-16 w-1 bg-teal rounded-full" />
                        <div className="hidden lg:block absolute -left-[3px] bottom-0 h-16 w-1 bg-teal rounded-full" />

                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-5xl">
                            Een veilige en prettige woonplek vormt de basis voor rust, stabiliteit en ontwikkeling. Bij Mentis Care geloven we dat wonen meer is dan een dak boven je hoofd. Het is de plek waar iemand tot zichzelf kan komen, vaardigheden kan ontwikkelen en stap voor stap kan deelnemen aan het dagelijks leven.
                        </p>

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
                                    Wonen en meedoen bij Mentis Care
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Mentis Care biedt begeleid wonen en intramurale woonzorg voor (jong)volwassenen met een langdurige zorgvraag binnen de WLZ. Onze woonlocaties bevinden zich in reguliere wijken en zijn gericht op veiligheid, structuur en een huiselijke sfeer.
                                    </p>
                                    <p>
                                        De begeleiding sluit aan bij het dagelijks leven en helpt cliënten om een zo normaal en stabiel mogelijk leven te leiden, passend bij hun mogelijkheden en tempo.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="/assets/wonen-en-meedoen.png"
                                    alt="Wonen en meedoen bij Mentis Care"
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
                                    src="/assets/voor-wie-is-mentis-care.png"
                                    alt="Voor wie is wonen met ondersteuning"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Voor wie is wonen met ondersteuning?
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-6">
                                        Wonen met ondersteuning bij Mentis Care is bedoeld voor (jong)volwassenen met:
                                    </p>
                                    <ul className="space-y-4 mb-8">
                                        {[
                                            "Een verstandelijke beperking",
                                            "Psychische of psychiatrische problematiek",
                                            "Een combinatie van beide"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1.5 min-w-[20px] h-5 rounded-full bg-teal/20 flex items-center justify-center">
                                                    <Check size={12} className="text-teal stroke-[3]" />
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-navy font-medium italic">
                                        De ondersteuning wordt afgestemd op de individuele zorgvraag en kan variëren in intensiteit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section C: Full width bullets (Checklist) */}
                <Section background="navy" className="py-16 md:py-24 text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
                                Waar werken we aan?
                            </h2>
                            <p className="text-xl text-center text-white/80 mb-12 max-w-3xl mx-auto">
                                Samen met de cliënt werken we aan doelen die bijdragen aan zelfstandigheid en kwaliteit van leven. Denk bijvoorbeeld aan:
                            </p>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                                {[
                                    "Het aanbrengen van structuur in het dagelijks leven",
                                    "Het voeren van een eigen huishouden",
                                    "Het versterken van zelfvertrouwen en weerbaarheid",
                                    "Het opbouwen en onderhouden van sociale contacten",
                                    "Het omgaan met financiën en administratie",
                                    "Het vinden van een passende daginvulling of dagbesteding"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/15 transition-colors">
                                        <div className="min-w-[32px] h-8 rounded-full bg-cyan-accent/20 flex items-center justify-center">
                                            <Check size={16} className="text-cyan-accent" />
                                        </div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-white/70 italic text-lg">
                                Doelen worden vastgelegd in een persoonlijk ondersteuningsplan en regelmatig geëvalueerd.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Section D: Text left, Photo right */}
                <Section background="white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Onze manier van werken
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        De begeleiding van Mentis Care is praktisch, betrokken en duidelijk. We sluiten aan bij wat iemand kan en stimuleren eigen regie waar mogelijk. Wat zelfstandig kan, blijft zelfstandig. Waar ondersteuning nodig is, bieden wij die stap voor stap.
                                    </p>
                                    <p>
                                        We werken samen met het netwerk rondom de cliënt, zoals naasten, buurtcontacten en betrokken professionals. Daarnaast werken we oplossingsgericht: we kijken vooruit en zoeken samen naar haalbare stappen die bijdragen aan stabiliteit en ontwikkeling.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="/assets/hoe-wij-werken.png" // Teamwork/Meeting
                                    alt="Onze manier van werken"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section E: Photo left, Text right */}
                <Section background="soft-white" className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="/assets/werkgebied.png" // Housing/Neighborhood
                                    alt="In de buurt en dichtbij"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    In de buurt en dichtbij
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Mentis Care ondersteunt cliënten in Rotterdam en omliggende gemeenten. De begeleiding vindt plaats op woonlocaties in de wijk en sluit aan bij de lokale omgeving.
                                    </p>
                                    <p>
                                        Zo zorgen we ervoor dat wonen en meedoen hand in hand gaan, dichtbij en passend bij het leven van de cliënt.
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
                            "Mentis Care – wonen met ondersteuning, meedoen op eigen tempo."
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
