"use client";

import Link from "next/link";
import { ChevronRight, MessageCircle, Heart, Users, ArrowRight, Quote } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { content } from "@/content";

export default function MeedenkenEnInspraakPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">


            <main className="flex-grow pt-24 md:pt-32">
                {/* Breadcrumbs */}
                <div className="container mx-auto px-4 md:px-6 mb-8">
                    <nav className="flex items-center text-sm text-gray-500">
                        <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                        <ChevronRight size={14} className="mx-2" />
                        <span className="text-navy font-medium">Meedenken en inspraak</span>
                    </nav>
                </div>

                {/* H1 + Intro (Page Opening) */}
                <div className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
                    <h1 className="text-4xl md:text-6xl font-bold text-navy mb-8 max-w-4xl tracking-tight">
                        Meedenken en inspraak
                    </h1>
                    <div className="max-w-4xl space-y-8">
                        <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light">
                            Bij Mentis Care geloven we dat goede zorg ontstaat in samenspraak. Cliënten weten zelf het beste wat voor hen belangrijk is. Daarom vinden wij het essentieel dat cliënten, hun naasten en onze medewerkers actief kunnen meedenken, meepraten en invloed hebben op hoe zorg en begeleiding worden vormgegeven.
                        </p>
                        <div className="border-l-4 border-teal pl-6 py-2">
                            <p className="text-xl md:text-2xl font-medium text-teal italic">
                                Eigen regie staat hierbij centraal: wat kan iemand zelf, wat wil iemand zelf en waarbij is ondersteuning nodig?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section A: Waarom meedenken belangrijk is (Text left, Photo right) */}
                <Section background="white" className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                    Waarom meedenken belangrijk is
                                </h2>
                                <div className="prose prose-xl text-gray-600 leading-loose">
                                    <p className="mb-6">
                                        Meedenken en inspraak dragen bij aan passende zorg, tevredenheid en vertrouwen. Door ervaringen, wensen en ideeën te delen, ontstaat begeleiding die beter aansluit bij het dagelijks leven van cliënten.
                                    </p>
                                    <p>
                                        Bij Mentis Care zien we inspraak niet als een verplicht onderdeel, maar als een waardevolle bron om samen te leren en te verbeteren.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-all duration-700">
                                <ImageWithFallback
                                    src="/assets/wat-mentis-care-kan-betekenen.png" // Conversation/Listening
                                    alt="Waarom meedenken belangrijk is"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section B: Hoe kun je meedenken? (Photo left, Text right) */}
                <Section background="soft-white" className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                            <div className="order-2 md:order-1 relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl -rotate-1 hover:rotate-0 transition-all duration-700 top-8">
                                <ImageWithFallback
                                    src="/assets/hoe-kun-je-meedenken.png" // Group/Circle/Meeting
                                    alt="Hoe kun je meedenken?"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                    Hoe kun je meedenken bij Mentis Care?
                                </h2>
                                <p className="text-xl text-gray-600 mb-12">
                                    Meedenken kan op verschillende niveaus en op verschillende manieren, afhankelijk van wat past bij de cliënt en de situatie.
                                </p>

                                <div className="space-y-10">
                                    <div className="pl-6 border-l-2 border-teal/30">
                                        <h3 className="text-2xl font-bold text-navy mb-3">Zeggenschap</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            Iedere cliënt heeft zeggenschap over het eigen leven en de eigen ondersteuning. Samen met de begeleiding maakt de cliënt keuzes over doelen, daginvulling en de manier van begeleiden. De wensen en mogelijkheden van de cliënt vormen altijd het vertrekpunt.
                                        </p>
                                    </div>
                                    <div className="pl-6 border-l-2 border-teal/30">
                                        <h3 className="text-2xl font-bold text-navy mb-3">Inspraak</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            Cliënten en – waar passend – hun naasten kunnen hun ervaringen, wensen en ideeën delen over het wonen, de begeleiding en het dagelijks leven op de locatie. Deze signalen worden actief meegenomen in verbeteringen.
                                        </p>
                                    </div>
                                    <div className="pl-6 border-l-2 border-teal/30">
                                        <h3 className="text-2xl font-bold text-navy mb-3">Medezeggenschap</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            Mentis Care stimuleert gezamenlijke vertegenwoordiging van cliëntenbelangen. Via cliëntenvertegenwoordiging en overlegmomenten krijgen cliënten en/of hun wettelijk vertegenwoordigers invloed op organisatiebrede onderwerpen.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section C: Meedenken als cliënt (Full width, calm background) */}
                <Section background="white" className="py-24 md:py-32 bg-teal/5">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md mb-8">
                                <MessageCircle size={32} className="text-teal" />
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-navy">
                                Meedenken als cliënt
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-light">
                                Ben je cliënt bij Mentis Care en wil je iets delen? Dat kan op verschillende manieren:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-12 text-left max-w-3xl mx-auto">
                                {[
                                    "In gesprek met je begeleider",
                                    "Tijdens locatie-overleggen of gezamenlijke momenten",
                                    "Via vertegenwoordiging of cliëntenoverleg",
                                    "Door het geven van feedback, een compliment of een zorgpunt"
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-teal/10 flex items-center gap-4">
                                        <div className="min-w-[10px] h-10 w-1 bg-teal rounded-full" />
                                        <span className="text-lg font-medium text-navy">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <p className="text-lg md:text-xl font-medium text-navy italic opacity-80">
                                We vinden het belangrijk dat jouw stem wordt gehoord en nemen signalen actief mee in onze werkwijze.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Section D: Meedenken als naaste (Photo right, Text left) - prompt said photo right */}
                <Section background="white" className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Meedenken als naaste of vertegenwoordiger
                                </h2>
                                <div className="prose prose-xl text-gray-600 leading-relaxed">
                                    <p className="mb-6">
                                        Naasten en wettelijk vertegenwoordigers spelen een belangrijke rol in het leven van cliënten. Mentis Care betrekt hen waar passend bij de ondersteuning en nodigt hen uit om mee te denken over kwaliteit van zorg, samenwerking en ontwikkeling.
                                    </p>
                                    <p>
                                        Dit kan via gesprekken met de begeleiding, overlegmomenten of via cliëntenvertegenwoordiging.
                                    </p>
                                </div>
                            </div>
                            <div className="relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                                <ImageWithFallback
                                    src="/assets/image-2.png" // Family/Connection
                                    alt="Meedenken als naaste"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section E: Meedenken als medewerker (Photo left, Text right) */}
                <Section background="soft-white" className="py-20 md:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                            <div className="order-2 md:order-1 relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                                <ImageWithFallback
                                    src="/assets/samenwerken-doorverwijzing.png" // Team/Employees
                                    alt="Meedenken als medewerker"
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="order-1 md:order-2">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                                    Meedenken als medewerker
                                </h2>
                                <div className="prose prose-xl text-gray-600 leading-relaxed">
                                    <p className="mb-6">
                                        Onze medewerkers dragen dagelijks bij aan de kwaliteit van zorg. Hun ervaring en ideeën zijn van grote waarde. Via interne overleggen en formele medezeggenschap denken medewerkers mee over organisatieontwikkeling, werkwijze en arbeidsomstandigheden.
                                    </p>
                                    <p className="font-medium text-navy">
                                        Samen bouwen we aan een lerende organisatie.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Section F: Zorgen, klachten... (With styled background) */}
                <Section background="soft-white" className="py-24 md:py-32 relative overflow-hidden">
                    {/* Background Blobs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/5 rounded-full blur-3xl -z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none opacity-60" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center bg-white rounded-[3rem] shadow-xl p-8 md:p-16 border border-gray-100 relative overflow-hidden">
                            {/* Card Decoration */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal via-navy to-teal" />

                            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 text-teal rounded-full mb-8 transform hover:scale-110 transition-transform duration-300">
                                <Heart size={32} fill="currentColor" className="opacity-20 absolute" />
                                <Heart size={28} className="relative z-10" />
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-navy tracking-tight">
                                Zorgen, klachten of complimenten?
                            </h2>

                            <div className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                                <p className="mb-6">
                                    Heb je een zorg, klacht, vraag of juist een compliment? Dan nodigen we je uit om dit met ons te delen. Dat kan laagdrempelig en in gesprek.
                                </p>
                                <p>
                                    Waar nodig bieden wij een formele klachtenprocedure, conform de Wkkgz. Samen leren en verbeteren we — met respect voor ieders perspectief.
                                </p>
                            </div>

                            <Link href="/klachten-en-zorgen">
                                <Button className="bg-navy text-white hover:bg-teal px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    Naar Klachten en zorgen
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Section>

                {/* Closing Reflection */}
                <div className="container mx-auto px-4 md:px-6 pb-20 pt-10 text-center relative">
                    <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                        {/* Left Decoration */}
                        <div className="hidden md:flex items-center gap-3 opacity-30">
                            <div className="w-12 h-[1px] bg-teal" />
                            <div className="w-2 h-2 rounded-full bg-teal" />
                            <Quote size={32} className="text-teal transform rotate-180 mb-4" />
                        </div>

                        <p className="text-3xl md:text-4xl font-serif text-teal italic font-light max-w-4xl leading-tight relative z-10">
                            "Goede zorg maak je samen. Door te luisteren, in gesprek te blijven en elkaar serieus te nemen, ontstaat ruimte voor vertrouwen en ontwikkeling."
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
                <div className="py-24 bg-teal relative overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Aanmelden of contact
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto font-light">
                            Wilt u zich aanmelden of eerst kennismaken? Dat kan eenvoudig.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
                            <Link href="/aanmelden">
                                <Button variant="outline" className="bg-white text-teal hover:bg-navy hover:text-white border-white px-8 py-6 text-lg h-auto shadow-lg hover:shadow-xl w-full md:w-auto rounded-xl">
                                    Aanmelden als cliënt of namens een cliënt
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-teal px-8 py-6 text-lg h-auto w-full md:w-auto rounded-xl">
                                    Contact voor vragen of overleg
                                </Button>
                            </Link>
                        </div>

                        <p className="text-lg opacity-90 leading-relaxed font-medium">
                            We denken graag met u mee over passende ondersteuning.<br />
                            <span className="opacity-75 font-normal">Mentis Care – betrokken begeleiding, met oog voor het dagelijks leven.</span>
                        </p>
                    </div>
                    {/* Background pattern (softer) */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-40" />
                        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy rounded-full blur-[100px] opacity-40" />
                    </div>
                </div>

            </main>

        </div>
    );
}
