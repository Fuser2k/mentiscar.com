"use client";

import Link from "next/link";
import { ChevronRight, Check, Quote } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { content } from "@/content";

export default function LerenEnWerkenPage() {
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
                        <span className="text-navy font-medium">Leren en werken</span>
                    </nav>
                </div>

                {/* H1 + Intro */}
                <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 relative">
                    {/* Decorative Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10" />

                    <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 max-w-4xl relative z-10">
                        Leren en werken
                    </h1>
                    <div className="relative z-10 pl-8 md:pl-12 border-l-4 border-teal/20">
                        {/* Side Decoration Left (Overlay) */}
                        <div className="hidden lg:block absolute -left-[3px] top-0 h-16 w-1 bg-teal rounded-full" />
                        <div className="hidden lg:block absolute -left-[3px] bottom-0 h-16 w-1 bg-teal rounded-full" />

                        <div className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-5xl space-y-6">
                            <p>
                                Bij Mentis Care geloven we dat actief bezig zijn bijdraagt aan structuur, zelfvertrouwen en zingeving. Voor veel cliënten betekent leren en werken een belangrijke stap richting meer zelfstandigheid en deelname aan het dagelijks leven.
                            </p>
                            <p>
                                Onze ondersteuning richt zich niet alleen op werk op zich, maar vooral op wat iemand nodig heeft om actief te kunnen zijn op een manier die past bij zijn of haar mogelijkheden.
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
                                    Ontwikkeling op eigen tempo
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Iedere cliënt is anders. Daarom sluiten we aan bij het tempo, de belastbaarheid en de wensen van de cliënt. Samen brengen we in kaart wat iemand kan, wil leren en wat haalbaar is.
                                    </p>
                                    <p>
                                        Dit kan variëren van het opbouwen van dagstructuur en arbeidsvaardigheden tot het toewerken naar (beschut) werk of andere vormen van zinvolle daginvulling.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="/assets/samen-werken-passend-werk.png" // Working/Laptop
                                    alt="Ontwikkeling op eigen tempo"
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
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" // Team meeting
                                    alt="Hoe ondersteunt Mentis Care?"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Hoe ondersteunt Mentis Care?
                                </h2>
                                <div className="prose prose-lg text-gray-600 mb-8">
                                    <p>
                                        Mentis Care biedt begeleiding bij leren en werken als onderdeel van de bredere ondersteuning. Afhankelijk van de situatie kan dit bestaan uit:
                                    </p>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Begeleiding bij arbeidsmatige dagbesteding",
                                        "Ondersteuning bij het ontwikkelen van werknemersvaardigheden",
                                        "Coaching op de werkplek of tijdens activiteiten",
                                        "Het opbouwen van ritme, verantwoordelijkheid en samenwerking"
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
                                    De begeleiding is praktisch, duidelijk en gericht op haalbare stappen vooruit.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section C: Full width */}
                <Section background="white" className="py-16 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy text-center">
                                Samen werken aan doelen
                            </h2>
                            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                                Samen met de cliënt stellen we doelen op die passen bij de persoonlijke situatie. Dit kan bijvoorbeeld gaan over:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-12">
                                {[
                                    "Het vergroten van zelfvertrouwen",
                                    "Het aanleren van vaardigheden",
                                    "Het opbouwen van structuur in de week",
                                    "Het leren samenwerken met anderen",
                                    "Het onderzoeken van mogelijkheden richting werk of vrijwilligersactiviteiten"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="mt-1 min-w-[24px] h-6 rounded-full bg-orange-100 flex items-center justify-center">
                                            <Check size={14} className="text-orange-500 stroke-[3]" />
                                        </div>
                                        <span className="text-lg font-medium text-navy">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-gray-500 italic text-lg">
                                De doelen worden regelmatig geëvalueerd en aangepast waar nodig.
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
                                    Voor wie is leren en werken bij Mentis Care?
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Leren en werken bij Mentis Care is bedoeld voor (jong)volwassenen met een WLZ-indicatie die ondersteuning nodig hebben bij daginvulling, ontwikkeling en participatie.
                                    </p>
                                    <p>
                                        Wanneer betaald werk (nog) niet haalbaar is, zoeken we samen naar andere passende vormen van activiteit die bijdragen aan ontwikkeling en welzijn.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop" // Coding/Learning
                                    alt="Voor wie is leren en werken?"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
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
                            "Mentis Care – ontwikkelen wat kan, werken waar mogelijk."
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
