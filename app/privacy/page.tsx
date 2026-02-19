import { Section } from "@/components/ui/Section";
import React from "react";

export default function PrivacyPage() {
    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <h1 className="text-3xl font-bold text-navy mb-8">Privacyverklaring Mentis Care B.V.</h1>

                    <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                        <p className="border-l-4 border-teal pl-4 italic text-sm text-gray-500">
                            Versie: Februari 2026
                        </p>

                        <p>
                            Mentis Care B.V., gevestigd te Rotterdam, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
                        </p>

                        <h3>Persoonsgegevens die wij verwerken</h3>
                        <p>
                            Mentis Care verwerkt uw persoonsgegevens doordat u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij mogelijk verwerken:
                        </p>
                        <ul>
                            <li>Voor- en achternaam</li>
                            <li>Geslacht</li>
                            <li>Geboortedatum</li>
                            <li>Geboorteplaats</li>
                            <li>Adresgegevens</li>
                            <li>Telefoonnummer</li>
                            <li>E-mailadres</li>
                            <li>BSNnummer (indien noodzakelijk voor zorgverlening)</li>
                            <li>Bankrekeningnummer (indien noodzakelijk)</li>
                        </ul>

                        <h3>Bijzondere en/of gevoelige persoonsgegevens</h3>
                        <p>
                            Mentis Care verwerkt gegevens die nodig zijn voor uw behandeling of begeleiding. Dit omvat onder meer gegevens over uw gezondheid. Voor het verwerken van deze persoonsgegevens vragen wij om uw toestemming door middel van een behandelovereenkomst.
                        </p>

                        <h3>Met welk doel en op basis van welke grondslag wij persoonsgegevens verwerken</h3>
                        <p>
                            Mentis Care verwerkt uw persoonsgegevens voor de volgende doelen:
                        </p>
                        <ul>
                            <li>Het afhandelen van uw betaling</li>
                            <li>U te kunnen bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
                            <li>Om goederen en diensten bij u af te leveren</li>
                            <li>Mentis Care verwerkt ook persoonsgegevens als wij hier wettelijk toe verplicht zijn (zoals gegevens voor belastingaangifte of zorgdeclaraties).</li>
                        </ul>

                        <h3>Geautomatiseerde besluitvorming</h3>
                        <p>
                            Mentis Care neemt niet op basis van geautomatiseerde verwerkingen besluiten over zaken die (aanzienlijke) gevolgen kunnen hebben voor personen.
                        </p>

                        <h3>Hoe lang we persoonsgegevens bewaren</h3>
                        <p>
                            Mentis Care bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de wettelijke bewaartermijnen conform de WGBO (Wet op de geneeskundige behandelingsovereenkomst) voor medische dossiers (20 jaar) en de fiscale bewaarplicht (7 jaar).
                        </p>

                        <h3>Delen van persoonsgegevens met derden</h3>
                        <p>
                            Mentis Care verkoopt uw gegevens niet aan derden en verstrekt deze uitsluitend indien dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. Met bedrijven die uw gegevens verwerken in onze opdracht, sluiten wij een bewerkersovereenkomst om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van uw gegevens. Mentis Care blijft verantwoordelijk voor deze verwerkingen.
                        </p>

                        <h3>Cookies, of vergelijkbare technieken, die wij gebruiken</h3>
                        <p>
                            Mentis Care gebruikt alleen technische en functionele cookies. En analytische cookies die geen inbreuk maken op uw privacy. Een cookie is een klein tekstbestand dat bij het eerste bezoek aan deze website wordt opgeslagen op uw computer, tablet of smartphone. De cookies die wij gebruiken zijn noodzakelijk voor de technische werking van de website en uw gebruiksgemak. Ze zorgen ervoor dat de website naar behoren werkt en onthouden bijvoorbeeld uw voorkeursinstellingen. Ook kunnen wij hiermee onze website optimaliseren. U kunt zich afmelden voor cookies door uw internetbrowser zo in te stellen dat deze geen cookies meer opslaat. Daarnaast kunt u ook alle informatie die eerder is opgeslagen via de instellingen van uw browser verwijderen.
                        </p>

                        <h3>Gegevens inzien, aanpassen of verwijderen</h3>
                        <p>
                            U heeft het recht om uw persoonsgegevens in te zien, te corrigeren of te verwijderen. Daarnaast heeft u het recht om uw eventuele toestemming voor de gegevensverwerking in te trekken of bezwaar te maken tegen de verwerking van uw persoonsgegevens door Mentis Care en heeft u het recht op gegevensoverdraagbaarheid. Dat betekent dat u bij ons een verzoek kunt indienen om de persoonsgegevens die wij van u beschikken in een computerbestand naar u of een ander, door u genoemde organisatie, te sturen.
                        </p>
                        <p>
                            U kunt een verzoek tot inzage, correctie, verwijdering, gegevensoverdraging van uw persoonsgegevens of verzoek tot intrekking van uw toestemming of bezwaar op de verwerking van uw persoonsgegevens sturen naar <a href="mailto:info@mentiscare.nl" className="text-teal font-medium">info@mentiscare.nl</a>.
                        </p>
                        <p>
                            Om er zeker van te zijn dat het verzoek tot inzage door u is gedaan, vragen wij u een kopie van uw identiteitsbewijs met het verzoek mee te sturen. Maak in deze kopie uw pasfoto, MRZ (machine readable zone, de strook met nummers onderaan het paspoort), paspoortnummer en Burgerservicenummer (BSN) zwart. Dit ter bescherming van uw privacy. We reageren zo snel mogelijk, maar binnen vier weken, op uw verzoek.
                        </p>

                        <h3>Hoe wij persoonsgegevens beveiligen</h3>
                        <p>
                            Mentis Care neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als u de indruk heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact op met onze klantenservice of via <a href="mailto:info@mentiscare.nl" className="text-teal font-medium">info@mentiscare.nl</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
