"use client";

import Link from "next/link";
import { ChevronRight, Check, Quote } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

import { content } from "@/content";

export default function ClientenEnNaastenPage() {
    const stepsData = [
        {
            title: "Stap 1 – Indicatie",
            description: "Om ondersteuning te ontvangen is een geldige WLZ-indicatie nodig. We denken graag mee over wat daarvoor nodig is."
        },
        {
            title: "Stap 2 – Aanmelding",
            description: "Aanmelden kan door contact met ons op te nemen. Samen bespreken we de zorgvraag en de mogelijkheden."
        },
        {
            title: "Stap 3 – Kennismaking",
            description: "We plannen een kennismakingsgesprek om elkaar te leren kennen en om te bekijken of Mentis Care passend is."
        },
        {
            title: "Stap 4 – Afstemming",
            description: "Samen stemmen we de ondersteuning af. Soms hoort daar een locatiebezoek bij."
        },
        {
            title: "Stap 5 – Start van de begeleiding",
            description: "Wanneer alles duidelijk is, maken we afspraken over de start en de inhoud van de ondersteuning. Indien nodig wordt een wachttijd besproken."
        }
    ];

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
                        <span className="text-navy font-medium">Cliënten en naasten</span>
                    </nav>
                </div>

                {/* H1 + Intro */}
                <div className="container mx-auto px-4 md:px-6 mb-16 md:mb-24 relative">
                    {/* Decorative Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10" />

                    <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6 max-w-4xl relative z-10">
                        Cliënten en naasten
                    </h1>
                    <div className="relative z-10 pl-8 md:pl-12 border-l-4 border-teal/20">
                        {/* Side Decoration Left (Overlay) */}
                        <div className="hidden lg:block absolute -left-[3px] top-0 h-16 w-1 bg-teal rounded-full" />
                        <div className="hidden lg:block absolute -left-[3px] bottom-0 h-16 w-1 bg-teal rounded-full" />

                        <div className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-5xl space-y-6">
                            <p>
                                Bij Mentis Care begrijpen we dat het leven soms ingewikkeld kan zijn. Wonen, structuur, daginvulling, omgaan met anderen of zelfstandig blijven functioneren: het zijn thema’s waar ondersteuning bij nodig kan zijn.
                            </p>
                            <p>
                                Wij kijken samen met jou en de mensen om je heen wat helpend is, passend bij jouw situatie en mogelijkheden. Onze begeleiding sluit aan bij jouw dagelijks leven en is gericht op rust, overzicht en vooruitgang. Niet alles hoeft in één keer; ontwikkeling ontstaat vaak stap voor stap.
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
                                    Ondersteuning die bij je past
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        De ondersteuning van Mentis Care is persoonlijk en maatgericht. We sluiten aan bij jouw doelen, tempo en behoeften. Dat kan betekenen dat we ondersteuning bieden in je woonomgeving, tijdens de daginvulling of bij praktische en sociale vaardigheden.
                                    </p>
                                    <p>
                                        We werken vanuit het principe: zelf waar het kan, samen waar het nodig is. Wat je zelf kunt, blijf je zelf doen. Waar het lastig is, ondersteunen we je om vaardigheden te ontwikkelen of om stabiliteit te behouden.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1000&auto=format&fit=crop" // Supportive/Client focus
                                    alt="Ondersteuning die bij je past"
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
                                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop" // Community/Together
                                    alt="Hoe wij werken"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Hoe wij werken
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    <p className="mb-4">
                                        Onze begeleiding richt zich op het versterken van wat al aanwezig is. Door overzicht, duidelijke afspraken en een vaste begeleidingsstructuur helpen we je om grip te krijgen op het dagelijks leven.
                                    </p>
                                    <p>
                                        We betrekken waar mogelijk mensen uit jouw omgeving, zoals familie, naasten of andere belangrijke personen. Daarnaast werken we samen met professionals en organisaties in de regio, zodat de ondersteuning goed aansluit en duurzaam is.
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
                                Voor wie is Mentis Care?
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Mentis Care is er voor (jong)volwassenen vanaf 18 jaar met een langdurige zorgvraag binnen de WLZ. Wij ondersteunen mensen met:
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    "een verstandelijke beperking",
                                    "psychische of psychiatrische problematiek",
                                    "een combinatie van beide"
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-teal/10 px-6 py-3 rounded-full text-teal font-medium">
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <p className="text-lg md:text-xl font-medium text-navy italic">
                                Onze zorg richt zich op wonen, begeleiding en daginvulling, met als doel het vergroten van zelfstandigheid en kwaliteit van leven.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Section D: Steps timeline */}
                <Section background="navy" className="py-20 md:py-32 text-white overflow-hidden relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-white">
                            Hoe start ondersteuning bij Mentis Care?
                        </h2>
                        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
                            Stap voor stap werken we samen aan een passende oplossing.
                        </p>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Vertical line connecting steps */}
                                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-teal via-white/20 to-teal hidden md:block" />

                                <div className="space-y-12">
                                    {stepsData.map((step, idx) => (
                                        <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
                                            {/* Number Circle */}
                                            <div className="flex-shrink-0 flex items-center md:justify-center">
                                                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-navy border-2 border-teal text-white font-bold text-2xl shadow-[0_0_15px_rgba(45,212,191,0.3)] z-10 transition-transform duration-300 group-hover:scale-110 group-hover:bg-teal group-hover:border-white">
                                                    {idx + 1}
                                                </div>
                                            </div>

                                            {/* Content Card */}
                                            <div className="flex-grow bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors duration-300 shadow-lg">
                                                <h3 className="text-xl md:text-2xl font-bold text-teal mb-3 group-hover:text-white transition-colors">
                                                    {step.title.split(' – ')[1] || step.title}
                                                </h3>
                                                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-white transition-colors">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA in context */}
                        <div className="mt-16 text-center">
                            <Link href="/contact" className="inline-flex items-center text-teal hover:text-white font-bold text-lg transition-colors border-b-2 border-teal pb-1 hover:border-white">
                                Direct kennismaken <ChevronRight className="ml-2" size={20} />
                            </Link>
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
                            "Mentis Care – ondersteuning die aansluit bij jouw leven."
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
