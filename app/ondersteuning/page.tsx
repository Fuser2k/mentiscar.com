
import { Section } from "@/components/ui/Section";
import { CardGrid } from "@/components/sections/CardGrid";
import { CTASection } from "@/components/sections/CTASection";
import { content } from "@/content";

export default function OndersteuningPage() {
    const { ctaSection } = content.home;

    const cards = [
        {
            title: "Wonen en meedoen",
            description: "Een veilige en prettige woonplek vormt de basis voor rust en ontwikkeling...",
            href: "/ondersteuning/wonen-en-meedoen",
            image: "/assets/wonen-en-meedoen.png",
        },
        {
            title: "Opgroeien en opvoeden",
            description: "Mentis Care biedt geen jeugdzorg...",
            href: "/ondersteuning/opgroeien-en-opvoeden",
            image: "/assets/ondersteuning-grip-leven.png",
        },
        {
            title: "Leren en werken",
            description: "Leren en werken dragen bij aan structuur...",
            href: "/ondersteuning/leren-en-werken",
            image: "/assets/samen-werken-passend-werk.png",
        },
        {
            title: "Behandelen",
            description: "Mentis Care biedt zelf geen specialistische behandeling...",
            href: "/ondersteuning/behandelen",
            image: "/assets/behandelen.png",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans">


            <main className="flex-grow pt-20">
                <Section background="white">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy">Ondersteuning</h1>
                        <div className="prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                            Bij Mentis Care bieden we begeleiding die aansluit bij het dagelijks leven van (jong)volwassenen met een langdurige zorgvraag. Onze ondersteuning is gericht op wonen, structuur, daginvulling en het versterken van zelfstandigheid. We kijken samen wat nodig is om stabiliteit en overzicht te creëren, passend bij iemands mogelijkheden en tempo.

                            De ondersteuning van Mentis Care is helder afgebakend en sluit aan bij de Wet langdurige zorg (WLZ).
                        </div>
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
