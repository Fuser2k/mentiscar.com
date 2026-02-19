
import { Section } from "@/components/ui/Section";
import { CardGrid } from "@/components/sections/CardGrid";
import { CTASection } from "@/components/sections/CTASection";
import { content } from "@/content";

export default function InformatieVoorPage() {
    const { ctaSection } = content.home;

    const cards = [
        {
            title: "Cliënten en naasten",
            description: "Alles over aanmelden, indicaties en de start van de zorg.",
            href: "/informatie/clienten-en-naasten",
            image: "/assets/home-wie-wij-ondersteunen.png",
        },
        {
            title: "Verwijzers",
            description: "Informatie voor huisartsen, wijkteams en andere verwijzers.",
            href: "/informatie/verwijzers",
            image: "/assets/samenwerken-doorverwijzing.png",
        },
        {
            title: "Werkgevers",
            description: "Samenwerking met Mentis Care voor werkplekken en dagbesteding.",
            href: "/informatie/werkgevers",
            image: "/assets/samen-werken-passend-werk.png",
        },
        {
            title: "Opdrachtgevers",
            description: "Voor gemeenten, zorgkantoren en ketenpartners.",
            href: "/informatie/opdrachtgevers",
            image: "/assets/hoe-kun-je-meedenken.png",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">


            <main className="flex-grow pt-20">
                <Section background="white">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy">Informatie voor...</h1>
                        <p className="text-xl text-gray-700 max-w-2xl mb-8">
                            Mentis Care biedt verschillende doelgroepen gerichte informatie over onze werkwijze, aanmelding en samenwerking.
                        </p>
                    </div>
                </Section>

                <Section background="soft-white">
                    <CardGrid cards={cards} columns={2} />
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
