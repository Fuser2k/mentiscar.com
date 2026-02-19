import React from "react";
import Link from "next/link";

export default function CookiesPage() {
    return (
        <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                    <h1 className="text-3xl font-bold text-navy mb-8">Cookiebeleid</h1>

                    <div className="prose prose-lg text-gray-700 max-w-none space-y-6">
                        <p>
                            Mentis Care maakt gebruik van cookies en andere technieken op haar website. Omdat wij uw privacy willen waarborgen én de gebruiksvriendelijkheid van uw bezoek(en) aan onze website willen verbeteren, vinden wij het belangrijk dat u weet hoe en waarom wij cookies gebruiken.
                        </p>

                        <h3>Wat zijn cookies?</h3>
                        <p>
                            Cookies zijn kleine, eenvoudige tekstbestanden die uw computer of mobiele apparaat opslaat wanneer u onze website gebruikt. Door gebruik te maken van cookies zorgen wij er bijvoorbeeld voor dat:
                        </p>
                        <ul>
                            <li>Het surfen op de website van Mentis Care leuker en makkelijker wordt;</li>
                            <li>U bij uw bezoek aan onze website niet steeds dezelfde informatie ontvangt of moet invoeren;</li>
                            <li>We kunnen meten hoe onze website wordt gebruikt en waar we deze nog kunnen verbeteren.</li>
                        </ul>

                        <h3>Welke cookies gebruiken wij?</h3>

                        <h4>Functionele cookies of noodzakelijke cookies</h4>
                        <p>
                            Functionele cookies zorgen ervoor dat onze website correct functioneert. Denk bijvoorbeeld aan functionaliteiten zoals het contactformulier of de weergave van lettertypes.
                        </p>

                        <h4>Analytische cookies</h4>
                        <p>
                            Met analytische cookies verzamelen wij met behulp van derden (zoals Google Analytics) statistieken over het gebruik van onze website. Door dit gebruik te meten kunnen we onze website blijven verbeteren in het voordeel van onze gebruikers.
                            Wij hebben Google Analytics privacyvriendelijk ingesteld conform de handleiding van de Autoriteit Persoonsgegevens.
                        </p>

                        <h3>Browserinstellingen</h3>
                        <p>
                            Als u niet wilt dat websites cookies op uw computer opslaan, kunt u uw browserinstellingen aanpassen. U krijgt dan een waarschuwing voordat er cookies worden geplaatst. Ook kunt u uw instellingen zo aanpassen dat uw browser alle cookies of alleen de cookies van derde partijen weigert. Ook kunt u cookies die al zijn geplaatst verwijderen. Let erop dat u de instellingen apart voor elke browser en computer die u gebruikt moet aanpassen.
                        </p>

                        <p>
                            Wij willen u er wel op wijzen dat als u geen gebruik wilt maken van cookies, wij helaas niet kunnen garanderen dat onze website goed werkt. Het kan zijn dat enkele functies van de site verloren gaan of dat u bepaalde pagina's zelfs helemaal niet meer kunt zien.
                        </p>

                        <h3>Slottoepassing</h3>
                        <p>
                            Wij zullen deze verklaringen af en toe aan moeten passen, omdat bijvoorbeeld onze website of de regels rondom cookies wijzigen. We mogen de inhoud van de verklaringen en de cookies die opgenomen staan in de lijsten altijd en zonder waarschuwing vooraf wijzigen. U kunt deze webpagina raadplegen voor de laatste versie.
                        </p>

                        <p>
                            Mocht u nog vragen en/of opmerkingen hebben, neem dan contact op via <a href="mailto:info@mentiscare.nl" className="text-teal font-medium">info@mentiscare.nl</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
