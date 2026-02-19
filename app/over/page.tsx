"use client";


import { Section } from "@/components/ui/Section";
import { SplitSection } from "@/components/sections/SplitSection";
import { CTASection } from "@/components/sections/CTASection";
import { content } from "@/content";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { Check, Heart, Users, Shield, Target, Sparkles } from "lucide-react";

export default function OverPage() {
    const { ctaSection } = content.home;

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-blue-50 via-white to-blue-50/30 relative">
            {/* Decorative Background Effects */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />



            <main className="flex-grow pt-20 relative z-10">
                {/* Hero / Intro */}
                <div className="bg-navy py-20 md:py-28 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#001f3f] opacity-50"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Over Mentis Care</h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Betrokken begeleiding, met oog voor het dagelijks leven.
                        </p>
                    </div>
                </div>

                {/* Intro */}
                {/* Intro */}
                <div className="py-20 md:py-28 relative overflow-hidden">
                    <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2 mix-blend-multiply" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 mix-blend-multiply" />

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                            <div className="md:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-teal/20 to-blue-200/50 rounded-3xl transform -rotate-2 group-hover:rotate-1 transition-transform duration-500 ease-out"></div>
                                <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl transform rotate-3 group-hover:-rotate-2 transition-transform duration-500 ease-out delay-75"></div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-square transform group-hover:scale-[1.02] transition-transform duration-500">
                                    <ImageWithFallback src="/assets/home-voor-wie-zijn-wij.png" alt="Mentis Care sfeer" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="md:w-1/2 space-y-6">
                                <div className="inline-block px-4 py-2 bg-blue-50 rounded-full text-teal font-medium text-sm mb-2">Wie wij zijn</div>
                                <h2 className="text-3xl md:text-5xl font-bold text-navy leading-tight">Een leven met rust, stabiliteit en perspectief</h2>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Bij Mentis Care geloven wij dat iedereen recht heeft op een plek waar ze zichzelf kunnen zijn. Wij ondersteunen (jong)volwassenen met een langdurige zorgvraag.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Onze begeleiding is gericht op wat wél kan, met aandacht voor wie iemand is. We kijken niet naar beperkingen, maar naar mogelijkheden en talenten.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Onze kijk & Kracht cards */}
                <div className="container mx-auto px-4 md:px-6 pb-20">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-blue-100 group hover:-translate-y-2 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-navy mb-6 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                                <Users size={32} className="group-hover:text-blue-700 transition-colors" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-navy">Onze kijk op meedoen</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Meedoen in de samenleving is belangrijk, maar het moet wel passen. Voor de één betekent dat betaald werk, voor de ander vrijwilligerswerk of dagbesteding in de buurt. Wij zoeken samen naar een invulling die voldoening geeft en haalbaar is.
                            </p>
                        </div>

                        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-blue-100 group hover:-translate-y-2 hover:shadow-xl hover:border-teal/30 transition-all duration-300">
                            <div className="bg-teal/10 w-14 h-14 rounded-2xl flex items-center justify-center text-teal mb-6 group-hover:scale-110 group-hover:bg-teal/20 transition-all duration-300">
                                <Sparkles size={32} className="group-hover:rotate-12 transition-transform" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 text-navy">Onze kracht</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Wij zijn kleinschalig, persoonlijk en duidelijk. Bij Mentis Care geen ingewikkelde procedures, maar korte lijnen en vaste gezichten. We doen wat we zeggen en we zeggen wat we doen.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Waar wij voor staan */}
                <div className="bg-navy py-20 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-5"></div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="md:w-1/2 space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold">Waar wij voor staan</h2>
                                <p className="text-blue-100 text-lg">Onze kernwaarden vormen de basis van alles wat we doen. Ze zijn het kompas voor onze begeleiding en samenwerking.</p>
                                <ul className="space-y-4">
                                    {[
                                        "Mensgerichte begeleiding",
                                        "Respect voor eigen regie en tempo",
                                        "Duidelijke structuur en afspraken",
                                        "Samenwerking met het netwerk",
                                        "Professionele en betrouwbare zorg",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="bg-teal rounded-full p-1">
                                                <Check size={16} className="text-white" />
                                            </div>
                                            <span className="text-lg font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="md:w-1/2">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-4 translate-y-8">
                                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm group hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default border border-white/5 hover:border-white/20 shadow-lg">
                                            <Heart className="text-teal mb-3 group-hover:scale-110 group-hover:text-pink-400 transition-all duration-300" size={32} />
                                            <h3 className="font-bold text-lg">Pasie</h3>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm group hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default border border-white/5 hover:border-white/20 shadow-lg">
                                            <Shield className="text-teal mb-3 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" size={32} />
                                            <h3 className="font-bold text-lg">Vertrouwen</h3>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm group hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default border border-white/5 hover:border-white/20 shadow-lg">
                                            <Target className="text-teal mb-3 group-hover:scale-110 group-hover:text-amber-400 transition-all duration-300" size={32} />
                                            <h3 className="font-bold text-lg">Doelgericht</h3>
                                        </div>
                                        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm group hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default border border-white/5 hover:border-white/20 shadow-lg">
                                            <Users className="text-teal mb-3 group-hover:scale-110 group-hover:text-green-300 transition-all duration-300" size={32} />
                                            <h3 className="font-bold text-lg">Samen</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Voor wie is Mentis Care? & Inspraak */}
                <div className="py-20 container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-50 flex flex-col md:flex-row">
                        <div className="md:w-1/2 h-64 md:h-auto relative">
                            <ImageWithFallback src="/assets/voor-wie-is-mentis-care.png" alt="Doelgroep" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-navy/20"></div>
                        </div>
                        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-navy mb-6">Voor wie is Mentis Care?</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Wij zijn er voor (jong)volwassenen met een WLZ-indicatie (VG en/of GGZ). Onze cliënten hebben behoefte aan nabijheid, structuur en ondersteuning bij het dagelijks leven. Wij bieden een veilige basis van waaruit ze zich verder kunnen ontwikkelen.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="container mx-auto px-4 md:px-6 pb-20 max-w-5xl">
                    <div className="flex flex-col gap-16 md:gap-24">
                        {/* Vision */}
                        <div id="visie" className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-blue-50 rounded-[2.5rem] transform rotate-1 transition-transform group-hover:rotate-0"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-blue-100">
                                <div className="inline-block px-5 py-2 bg-teal/10 rounded-full text-teal font-bold tracking-wide text-sm mb-6">ONZE VISIE</div>
                                <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">Samenbouwen aan gewoon leven in de stad</h2>
                                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                                    <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                        Bij Mentis Care geloven wij dat zorg ondersteunend moet zijn aan het gewone leven. Mensen met een verstandelijke beperking, ook op latere leeftijd verdienen het om midden in de samenleving te blijven wonen, mee te doen en zich verbonden te voelen met hun omgeving.
                                    </p>
                                    <p>
                                        Niet de zorgstructuur, maar het dagelijks leven van de cliënt staat centraal. In de grootstedelijke dynamiek van Rotterdam brengen wij rust, structuur en nabijheid. Wij kijken altijd eerst naar wat iemand zelf kan en wil, hoe het netwerk kan bijdragen en welke ondersteuning aanvullend nodig is. Zo versterken wij eigen regie en behouden cliënten hun vertrouwde woonomgeving.
                                    </p>
                                    <p>
                                        Innovatie en samenwerking zijn daarbij essentieel. Door slim gebruik te maken van technologie en intensief samen te werken met gemeenten en partners in de wijk, organiseren wij zorg toekomstbestendig en duurzaam.
                                    </p>
                                    <div className="border-l-4 border-teal pl-6 py-2 italic text-navy font-medium bg-teal/5 rounded-r-xl">
                                        Onze visie is een inclusieve stad waarin ook kwetsbare en ouder wordende mensen met een verstandelijke beperking zichtbaar, zelfstandig en volwaardig kunnen blijven meedoen. Zorg als fundament voor leven – niet als eindpunt, maar als vertrekpunt.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mission */}
                        <div id="missie" className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-blue-50 to-indigo-50/50 rounded-[2.5rem] transform -rotate-1 transition-transform group-hover:rotate-0"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm p-10 md:p-14 rounded-[2.5rem] shadow-sm border border-blue-100">
                                <div className="inline-block px-5 py-2 bg-blue-50 rounded-full text-blue-600 font-bold tracking-wide text-sm mb-6">ONZE MISSIE</div>
                                <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">Een plek in de stad voor iedereen</h2>
                                <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
                                    <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                        Bij Mentis Care B.V. geloven wij dat goede zorg begint bij het zien van de mens achter de beperking.
                                    </p>
                                    <p>
                                        Onze missie is om mensen met een verstandelijke beperking – in het bijzonder ouder wordende cliënten – te ondersteunen bij het leiden van een waardig, stabiel en betekenisvol leven binnen de grootstedelijke omgeving van Rotterdam en Capelle aan den IJssel.
                                    </p>
                                    <p>
                                        In een stad waar culturen, talen en leefwerelden samenkomen, vraagt zorg om meer dan alleen deskundigheid. Het vraagt om aandacht, begrip en de bereidheid om verantwoordelijkheid te nemen wanneer situaties complex worden. Daarom kiezen wij voor een persoonlijke en directe benadering, waarin iedere cliënt wordt gezien als uniek individu met een eigen verhaal, achtergrond en toekomst.
                                    </p>
                                    <p>
                                        Wij zetten ons dagelijks in om rust en structuur te brengen in een dynamische omgeving. Met betrokkenheid en daadkracht zorgen wij voor continuïteit, veiligheid en vertrouwen. Wij blijven staan wanneer de zorgvraag verandert en anticiperen tijdig op signalen van achteruitgang of nieuwe behoeften, zodat cliënten hun vertrouwde woonomgeving en sociale netwerk kunnen behouden.
                                    </p>
                                    <div className="border-l-4 border-blue-500 pl-6 py-2 italic text-navy font-medium bg-blue-50 rounded-r-xl">
                                        Onze missie is helder: zorg bieden die niet overneemt waar het niet nodig is, maar ondersteunt waar het moet. Zorg die zelfstandigheid stimuleert, waardigheid beschermt en het mogelijk maakt om midden in de samenleving te blijven staan.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <CTASection
                    title={ctaSection.title}
                    body={ctaSection.body}
                    bullets={ctaSection.bullets}
                    closing={ctaSection.closing}
                />
            </main>


        </div>
    );
}

