
import { Section } from "@/components/ui/Section";
import { CTASection } from "@/components/sections/CTASection";
import { content } from "@/content";

export default function KlachtenPage() {
    const { ctaSection } = content.home;

    return (
        <div className="min-h-screen flex flex-col font-sans">


            <main className="flex-grow pt-20">
                <Section background="white" className="relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4" />

                    <div className="max-w-4xl relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-navy">Klachten en zorgen</h1>

                        <div className="space-y-12 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Bij Mentis Care doen we er alles aan om goede ondersteuning te bieden. Toch kan het gebeuren dat je niet tevreden bent of je zorgen maakt. Dat horen we graag, zodat we er samen iets aan kunnen doen.
                            </p>

                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-navy">Maak je je zorgen?</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Bespreek je zorgen eerst met de begeleider.</li>
                                    <li>Kom je er samen niet uit? Neem dan contact op met de leidinggevende.</li>
                                    <li>Ook familie en naasten kunnen hun zorgen uiten. Wij nemen elk signaal serieus.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-navy">Heb je een klacht?</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Probeer de klacht eerst te bespreken met de betrokkene.</li>
                                    <li>Lukt dat niet of ben je niet tevreden met de oplossing? Dan kun je een officiële klacht indienen.</li>
                                    <li>Mentis Care werkt volgens de Wet kwaliteit, klachten en geschillen zorg (Wkkgz).</li>
                                </ul>
                            </div>

                            <div className="bg-soft-white p-6 rounded-xl border border-teal/20">
                                <h2 className="text-2xl font-bold mb-4 text-navy">Ondersteuning bij klachten</h2>

                                <h3 className="text-xl font-bold mb-2 text-navy mt-4">Vertrouwenspersoon</h3>
                                <p className="mb-4">
                                    Je kunt gratis gebruikmaken van een onafhankelijke vertrouwenspersoon. Deze persoon luistert naar je verhaal en helpt je bij het zoeken naar een oplossing of het indienen van een klacht.
                                </p>

                                <h3 className="text-xl font-bold mb-2 text-navy">Klachtenfunctionaris</h3>
                                <p className="mb-4">
                                    Mentis Care is aangesloten bij een onafhankelijke klachtenfunctionaris. Deze bemiddelt tussen jou en Mentis Care om tot een oplossing te komen.
                                </p>

                                <h3 className="text-xl font-bold mb-2 text-navy">Geschillencommissie</h3>
                                <p>
                                    Als de bemiddeling niet leidt tot een oplossing, kun je de klacht voorleggen aan de geschillencommissie waarbij Mentis Care is aangesloten.
                                </p>
                            </div>

                            <div className="bg-soft-white p-4 rounded-lg text-sm text-gray-600 mt-8">
                                <p className="font-bold mb-1">Onvrijwillige zorg (Wzd/Wvggz)</p>
                                <p>
                                    Voor klachten over onvrijwillige zorg gelden specifieke regels. Ook hierbij kan de vertrouwenspersoon ondersteunen.
                                </p>
                            </div>

                        </div>
                    </div>
                </Section>

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
