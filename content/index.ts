export const content = {
    global: {
        brandName: "Mentis Care",
        tagline: "Betrokken begeleiding, met oog voor het dagelijks leven.",
        navigation: [
            {
                label: "Home",
                href: "/"
            },
            {
                label: "Ondersteuning",
                href: "/ondersteuning",
                subItems: [
                    { label: "Wonen en meedoen", href: "/ondersteuning/wonen-en-meedoen" },
                    { label: "Opgroeien en opvoeden", href: "/ondersteuning/opgroeien-en-opvoeden" },
                    { label: "Leren en werken", href: "/ondersteuning/leren-en-werken" },
                    { label: "Behandelen", href: "/ondersteuning/behandelen" },
                ]
            },
            {
                label: "Informatie voor",
                href: "/informatie-voor",
                subItems: [
                    { label: "Cliënten en naasten", href: "/informatie/clienten-en-naasten" },
                    { label: "Verwijzers", href: "/informatie/verwijzers" },
                    { label: "Werkgevers", href: "/informatie/werkgevers" },
                    { label: "Opdrachtgevers", href: "/informatie/opdrachtgevers" },
                ]
            },
            { label: "Voor wie en waar", href: "/voor-wie-en-waar" },
            { label: "Locaties", href: "/locaties" },
            { label: "Meedenken en inspraak", href: "/meedenken-en-inspraak" },
            {
                label: "Over Mentis Care",
                href: "/over",
                subItems: [
                    { label: "Nieuws", href: "/nieuws" }
                ]
            },
            { label: "Contact", href: "/contact" },
        ],
        contactInfo: {
            phone: "010 - 123 45 67",
            email: "info@mentiscare.nl",
            address: "Voorbeeldstraat 123, 3011 AA Rotterdam",
        },
    },
    home: {
        hero: {
            title: "Samen leven met ondersteuning",
            subtitle: "Mentis Care",
        },
        intro: {
            text: "Bij Mentis Care draait het om rust, stabiliteit en perspectief. Wij ondersteunen (jong)volwassenen met een langdurige zorgvraag bij wonen, daginvulling en het dagelijks leven. Altijd met aandacht voor wie iemand is, wat iemand kan en wat nodig is om grip te houden op het leven.\n\nOnze begeleiding is persoonlijk, duidelijk en professioneel. We werken samen met cliënten, naasten en netwerkpartners om ondersteuning te bieden die past bij het leven van alledag.",
        },
        support: {
            title: "Ondersteuning bij Mentis Care",
            description: "Mentis Care biedt begeleiding binnen de Wet langdurige zorg (WLZ). De ondersteuning is gericht op structuur, zelfstandigheid en kwaliteit van leven.",
            cta: "Meer weten over onze ondersteuning?",
        },
        cards: [
            {
                title: "Wonen en meedoen",
                description: "Begeleid wonen en intramurale woonzorg, gericht op veiligheid, structuur en deelname aan het dagelijks leven.",
                href: "/ondersteuning/wonen-en-meedoen",
                image: "/assets/wonen-en-meedoen.png", // Social gathering / Participation
            },
            {
                title: "Opgroeien en opvoeden",
                description: "Ondersteuning bij opgroeien, ook al biedt Mentis Care geen jeugdzorg, wij kijken naar de overgang naar volwassenheid.",
                href: "/ondersteuning/opgroeien-en-opvoeden",
                image: "/assets/ondersteuning-grip-leven.png", // Family / Parenting
            },
            {
                title: "Leren en werken",
                description: "Ondersteuning bij dagbesteding en ontwikkeling van vaardigheden, passend bij belastbaarheid en mogelijkheden.",
                href: "/ondersteuning/leren-en-werken",
                image: "/assets/samen-werken-passend-werk.png", // Working / Learning
            },
            {
                title: "Behandelen",
                description: "Begeleiding in samenhang met behandeling door externe zorgverleners.",
                href: "/ondersteuning/behandelen",
                image: "/assets/behandelen.png", // Therapy / Consultation
            },
        ],
        whoWeSupport: {
            title: "Wie wij ondersteunen",
            text: "Mentis Care richt zich op (jong)volwassenen met een WLZ-indicatie (VG en/of GGZ). Onze cliënten hebben behoefte aan duidelijke begeleiding, een stabiele woonomgeving en ondersteuning bij het dagelijks functioneren.\n\nWij zijn actief in Rotterdam en omliggende gemeenten en werken vanuit woonlocaties in reguliere wijken.",
        },
        method: {
            title: "Onze manier van werken",
            text: "Mentis Care staat voor begeleiding die aansluit bij het dagelijks leven. We werken met vaste begeleiders, heldere afspraken en duidelijke doelen. Wat iemand zelf kan, blijft zelf. Waar ondersteuning nodig is, bieden wij die stap voor stap.\n\nSamenwerking met naasten en ketenpartners is daarbij vanzelfsprekend.",
        },
        ctaSection: {
            title: "Aanmelden of contact",
            body: "Wilt u zich aanmelden of eerst kennismaken? Dat kan eenvoudig.",
            bullets: [
                "Aanmelden als cliënt of namens een cliënt",
                "Contact voor vragen of overleg",
            ],
            closing: "We denken graag met u mee over passende ondersteuning.\nMentis Care – betrokken begeleiding, met oog voor het dagelijks leven.",
        },
        news: {
            title: "Laatste nieuws",
            items: [
                {
                    title: "Nieuwe samenwerking: Werkstad van start",
                    date: "30 januari 2026",
                    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
                    href: "/nieuws/werkstad-van-start"
                },
                {
                    title: "Nieuwe samenwerking met Woonbron Spijkenisse",
                    date: "28 januari 2026",
                    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
                    href: "/nieuws/samenwerking-woonbron"
                },
                {
                    title: "Theater Babel: Op hoop van zegen",
                    date: "13 januari 2026",
                    image: "https://images.unsplash.com/photo-1503095392269-27528ca388ec?q=80&w=1000&auto=format&fit=crop",
                    href: "/nieuws/theater-babel"
                }
            ],
            cta: "Bekijk alle nieuwsberichten"
        },
    },
    newsPage: {
        hero: {
            title: "Nieuws & Blogs",
            description: "Blijf op de hoogte van onze laatste ontwikkelingen, blogs en verhalen uit de praktijk.",
            image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop"
        },
        items: [
            {
                title: "Een nieuw thuis in Capelle aan den IJssel",
                date: "16 februari 2026",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop", // Modern home/architecture
                href: "/nieuws/een-nieuw-thuis-capelle",
                category: "Locaties",
                featured: true,
                body: `
                    <p class="lead">In de zomer van 2026 opent Mentis Care een gloednieuwe locatie in Capelle aan den IJssel. Een plek die niet is ontworpen als zorginstelling, maar als thuis. Een plek waar ouder wordende cliënten met een verstandelijke beperking in rust, veiligheid en verbondenheid kunnen blijven wonen - midden in de samenleving.</p>
                    
                    <p>Want bij Mentis Care geloven wij dat zorg ondersteunend moet zijn aan het gewone leven. Ook wanneer iemand ouder wordt.</p>

                    <h3>Wonen met privacy, leven in verbinding</h3>
                    <p>De nieuwe locatie wordt ingericht als een 24-uurs intramurale woonvoorziening voor cliënten binnen VG en GGZ Wonen 1 tot en met 4.</p>
                    <p>Iedere bewoner beschikt over een eigen moderne studio met:</p>
                    <ul>
                        <li>Een eigen keuken</li>
                        <li>Een eigen natte ruimte</li>
                        <li>Volledige privacy</li>
                        <li>Een veilige, stabiele woonbasis</li>
                    </ul>
                    <p>Hier combineren we zelfstandigheid met nabijheid van zorg. Bewoners behouden hun persoonlijke leefruimte, terwijl begeleiding altijd dichtbij is.</p>
                    <p>Naast de individuele woonstudio’s zijn er gezamenlijke woon- en leefruimtes waar samen wordt gekookt, gegeten en geleefd. Want ouder worden betekent niet dat verbinding verdwijnt - juist niet.</p>

                    <h3>24-uurs begeleiding, met aandacht voor ouder worden</h3>
                    <p>Ouder worden met een verstandelijke beperking vraagt om specifieke deskundigheid en tijdige signalering.</p>
                    <p>Daarom is op deze locatie:</p>
                    <ul>
                        <li>24 uur per dag een vast team van begeleiders aanwezig</li>
                        <li>Vijf dagen per week twee interne behandelaren (gedragswetenschappers) aanwezig</li>
                        <li>Integratie van begeleiding en behandeling vanzelfsprekend</li>
                    </ul>
                    <p>Wij blijven staan wanneer de zorgvraag verandert. Wanneer fysieke belastbaarheid afneemt, wanneer er sprake is van rouw of verlies, wanneer somatische zorg toeneemt — dan bewegen wij mee.</p>
                    <p>Niet door cliënten te verplaatsen, maar door zorg zorgvuldig op te schalen binnen hun vertrouwde woonomgeving.</p>
                    <p>Stabiliteit is voor ons geen streven, maar een uitgangspunt.</p>

                    <h3>Dagbesteding die aansluit bij levensfase</h3>
                    <p>Ouder worden betekent ook dat dagstructuur en belastbaarheid veranderen.</p>
                    <p>Binnen deze nieuwe locatie realiseren wij een breed aanbod aan dagbestedingsmogelijkheden, afgestemd op verschillende ondersteuningsbehoeften. Rustige activiteiten, sociale interactie, zinvolle invulling van de dag - altijd passend bij de persoonlijke mogelijkheden en energie van de cliënt.</p>
                    <p>Dagbesteding is geen verplicht programma, maar een manier om:</p>
                    <ul>
                        <li>Ritme te behouden</li>
                        <li>Sociale verbondenheid te versterken</li>
                        <li>Zelfvertrouwen te ondersteunen</li>
                        <li>Betekenis te ervaren</li>
                    </ul>
                    <p>Wij kijken altijd eerst naar wat iemand zelf kan en wil. Niet de zorgstructuur staat centraal, maar het dagelijks leven.</p>

                    <h3>Een plek midden in de stad</h3>
                    <p>Onze visie is helder: zorg hoort midden in de samenleving.</p>
                    <p>Ook in Capelle aan den IJssel kiezen wij bewust voor een locatie in een bestaande woonomgeving, dichtbij voorzieningen en sociale netwerken. Wij bouwen geen geïsoleerde zorgstructuur, maar een duurzame woonoplossing in de wijk.</p>
                    <p>Ouder wordende cliënten blijven zichtbaar, onderdeel van de stad, verbonden met hun omgeving.</p>
                    <p>Zorg als fundament voor leven - niet als eindpunt, maar als vertrekpunt.</p>

                    <h3>Voor wie is deze locatie bedoeld?</h3>
                    <p>Deze woonvoorziening is speciaal ingericht voor:</p>
                    <ul>
                        <li>Ouder wordende cliënten met een verstandelijke beperking</li>
                        <li>Cliënten met gecombineerde VG- en GGZ-problematiek</li>
                        <li>Mensen die behoefte hebben aan continuïteit en stabiliteit</li>
                        <li>Cliënten bij wie de zorgvraag in de toekomst kan toenemen</li>
                    </ul>
                    <p>Wij bieden geen tijdelijke oplossing, maar langdurige wooncontinuïteit.</p>

                    <h3>Samenbouwen aan gewoon leven</h3>
                    <p>Mentis Care ziet de mens achter de beperking. Iedere cliënt heeft een eigen verhaal, achtergrond en toekomst.</p>
                    <p>Onze missie is om rust en structuur te brengen in een dynamische omgeving. Met betrokkenheid en daadkracht zorgen wij voor continuïteit, veiligheid en vertrouwen.</p>
                    <p>In Capelle aan den IJssel bouwen wij verder aan onze overtuiging:</p>
                    <p class="quote">Een inclusieve stad waarin ook kwetsbare en ouder wordende mensen met een verstandelijke beperking zichtbaar, zelfstandig en volwaardig kunnen blijven meedoen.</p>
                    <p>Zorg die niet overneemt waar het niet nodig is, maar ondersteunt waar het moet.</p>
                    <p>Zorg die waardigheid beschermt en zelfstandigheid stimuleert.</p>
                    <p>Zorg die meebeweegt met het leven.</p>
                `
            },
            {
                title: "Je hoeft het niet alleen te doen: wanneer praten de eerste stap naar herstel is",
                date: "10 februari 2026",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop", // Talking/Therapy
                href: "/nieuws/je-hoeft-het-niet-alleen-te-doen",
                category: "Mentale Gezondheid",
                body: `
                    <h3>Wanneer moet je hulp zoeken voor mentale klachten?</h3>
                    <p>Veel mensen lopen langer rond met mentale klachten dan nodig is. Ze denken:</p>
                    <ul>
                        <li>“Het gaat vanzelf wel over.”</li>
                        <li>“Anderen hebben het erger.”</li>
                        <li>“Ik moet me niet aanstellen.”</li>
                    </ul>
                    <p>Toch is mentale gezondheid net zo belangrijk als fysieke gezondheid. Je wacht bij aanhoudende pijn in je rug of borst immers ook niet maanden voordat je hulp inschakelt. Maar wanneer is het moment om wél professionele ondersteuning te zoeken?</p>

                    <h3>“Ik red me wel” – de grootste misvatting</h3>
                    <p>We zijn gewend om sterk te zijn. Doorzetten. Niet zeuren. Maar mentale klachten verdwijnen niet altijd vanzelf. Sterker nog: hoe langer je wacht, hoe groter de impact kan worden op je werk, relaties en dagelijks functioneren.</p>
                    <p>Hulp zoeken betekent niet dat je zwak bent. Het betekent dat je verantwoordelijkheid neemt voor je welzijn.</p>

                    <h3>Signalen dat het tijd is om hulp te zoeken</h3>
                    <p>Herken je één of meerdere van onderstaande signalen, en houden ze langer dan enkele weken aan? Dan kan het verstandig zijn om in gesprek te gaan met een professional:</p>
                    <ul>
                        <li>Je voelt je langdurig somber, leeg of prikkelbaar</li>
                        <li>Je piekert veel en kunt moeilijk ontspannen</li>
                        <li>Je slaapt slecht of juist extreem veel</li>
                        <li>Je ervaart paniekgevoelens of angst zonder duidelijke aanleiding</li>
                        <li>Je hebt minder energie en motivatie</li>
                        <li>Je trekt je terug uit sociale contacten</li>
                        <li>Je werk of studie lijdt onder je klachten</li>
                    </ul>
                    <p>Belangrijk: je klachten hoeven niet “ernstig genoeg” te zijn om hulp te mogen vragen. Twijfel is vaak al een signaal op zichzelf.</p>

                    <h3>Wat kun je verwachten van een eerste gesprek?</h3>
                    <p>Veel mensen zien op tegen die eerste afspraak. Onzekerheid is normaal. Wat kun je verwachten?</p>
                    <ul>
                        <li>Een veilige en vertrouwelijke omgeving</li>
                        <li>Ruimte om je verhaal te doen</li>
                        <li>Geen oordeel</li>
                        <li>Samen kijken naar wat je nodig hebt</li>
                        <li>Inzicht in mogelijke vervolgstappen</li>
                    </ul>
                    <p>Een eerste gesprek is vooral bedoeld om helderheid te krijgen. Soms lucht het al op om alles eens hardop uit te spreken.</p>

                    <h3>Drempels: schaamte en stigma</h3>
                    <p>Ondanks dat mentale gezondheid steeds bespreekbaarder wordt, rust er nog altijd een stigma op het zoeken van hulp. Mensen zijn bang om als “zwak” of “instabiel” gezien te worden.</p>
                    <p>De realiteit? Steeds meer mensen zoeken ondersteuning. Mentale klachten horen bij het mens-zijn. Net zoals fysieke klachten.</p>

                    <h3>Je hoeft niet te wachten tot het erger wordt</h3>
                    <p>Veel cliënten geven achteraf aan:</p>
                    <p class="quote">“Had ik maar eerder aan de bel getrokken.”</p>
                    <p>Vroegtijdige ondersteuning kan voorkomen dat klachten verergeren en kan helpen om sneller weer grip te krijgen op je leven.</p>
                    <p>Bij Mentis Care kijken we samen naar jouw situatie, tempo en behoeften. Geen standaardoplossingen, maar begeleiding die past bij jou. Twijfel je? Dan is dat misschien precies het moment om het gesprek aan te gaan.</p>
                `
            },
            {
                title: "Mentale gezondheid op de werkvloer: van verzuim naar veerkracht",
                date: "5 februari 2026",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop", // Office/Working
                href: "/nieuws/mentale-gezondheid-op-de-werkvloer",
                category: "Werk & Gezondheid",
                body: `
                    <p>Mentale gezondheid is allang geen privékwestie meer. Werkdruk, prestatiedruk, hybride werken en constante bereikbaarheid zorgen ervoor dat steeds meer werknemers kampen met stressklachten, burn-outverschijnselen en verminderde motivatie.</p>
                    <p>Toch wordt mentale gezondheid binnen organisaties nog te vaak pas besproken wanneer iemand al is uitgevallen.</p>
                    <p>In deze blog lees je waarom mentale gezondheid een strategisch thema is voor iedere organisatie — én wat werkgevers concreet kunnen doen om een gezonde, veerkrachtige werkomgeving te creëren.</p>

                    <h3>Waarom mentale gezondheid geen HR-bijzaak is</h3>
                    <p>Mentale gezondheid raakt de kern van je organisatie. Het beïnvloedt:</p>
                    <ul>
                        <li>Productiviteit</li>
                        <li>Betrokkenheid</li>
                        <li>Teamdynamiek</li>
                        <li>Creativiteit</li>
                        <li>Ziekteverzuim</li>
                        <li>Werkgeversimago</li>
                    </ul>
                    <p>Onderzoek laat zien dat psychische klachten één van de grootste oorzaken zijn van langdurig verzuim. Maar de impact begint al veel eerder. Denk aan medewerkers die wel aanwezig zijn, maar niet optimaal functioneren (presenteïsme).</p>
                    <p>Een gezonde organisatie investeert daarom niet alleen in prestaties, maar ook in welzijn.</p>

                    <h3>De stille signalen van overbelasting</h3>
                    <p>Stress bouwt zich vaak geleidelijk op. Medewerkers trekken niet altijd direct aan de bel. Let daarom op subtiele veranderingen, zoals:</p>
                    <ul>
                        <li>Toenemende prikkelbaarheid</li>
                        <li>Verminderde concentratie</li>
                        <li>Meer fouten maken</li>
                        <li>Terugtrekken uit teamoverleg</li>
                        <li>Cynisme of motivatieverlies</li>
                        <li>Regelmatig kort verzuim</li>
                    </ul>
                    <p>Leidinggevenden spelen hierin een cruciale rol. Niet om te diagnosticeren, maar om signalen bespreekbaar te maken.</p>

                    <h3>De rol van leiderschap: veiligheid creëren</h3>
                    <p>Psychologische veiligheid is de basis van een gezonde werkcultuur. Medewerkers moeten het gevoel hebben dat ze:</p>
                    <ul>
                        <li>Zich kwetsbaar mogen opstellen</li>
                        <li>Fouten mogen maken</li>
                        <li>Hulp mogen vragen</li>
                        <li>Grenzen mogen aangeven</li>
                    </ul>
                    <p>Dit vraagt om leiders die luisteren zonder oordeel en ruimte creëren voor open gesprekken.</p>
                    
                    <p><strong>Praktische tips voor leidinggevenden:</strong></p>
                    <ul>
                        <li>Plan regelmatig één-op-één gesprekken</li>
                        <li>Stel open vragen (“Hoe gaat het écht met je?”)</li>
                        <li>Normaliseer gesprekken over werkdruk</li>
                        <li>Geef zelf het goede voorbeeld in balans</li>
                    </ul>

                    <h3>Werkdruk vs. werkstress: het verschil begrijpen</h3>
                    <p>Werkdruk is niet per definitie negatief. Een gezonde mate van uitdaging kan juist motiverend werken. Werkstress ontstaat wanneer:</p>
                    <ul>
                        <li>De belasting structureel hoger is dan de belastbaarheid</li>
                        <li>Er weinig autonomie wordt ervaren</li>
                        <li>Er onduidelijkheid is over verwachtingen</li>
                        <li>Er onvoldoende herstelmomenten zijn</li>
                    </ul>
                    <p>Het is belangrijk om als organisatie niet alleen naar taken te kijken, maar ook naar energiebronnen binnen het werk.</p>

                    <h3>Wat werkgevers concreet kunnen doen</h3>
                    <ol>
                        <li><strong>Preventieve programma’s aanbieden</strong><br/>Denk aan workshops over stressmanagement, timemanagement of veerkrachttraining.</li>
                        <li><strong>Toegang tot professionele ondersteuning</strong><br/>Laagdrempelige begeleiding of coaching kan escalatie voorkomen.</li>
                        <li><strong>Flexibiliteit faciliteren</strong><br/>Hybride werken, aangepaste uren of tijdelijke taakverlichting kunnen veel verschil maken.</li>
                        <li><strong>Heldere communicatie</strong><br/>Onzekerheid vergroot stress. Transparantie vermindert spanning.</li>
                        <li><strong>Cultuurverandering stimuleren</strong><br/>Welzijn moet onderdeel zijn van de organisatiewaarden — niet alleen van beleid.</li>
                    </ol>

                    <h3>De kosten van niets doen</h3>
                    <p>Langdurig verzuim door psychische klachten brengt niet alleen financiële kosten met zich mee, maar ook:</p>
                    <ul>
                        <li>Verlies van talent</li>
                        <li>Hogere werkdruk voor collega’s</li>
                        <li>Verminderde teammoraal</li>
                        <li>Reputatieschade</li>
                    </ul>
                    <p>Investeren in mentale gezondheid is daarom geen kostenpost, maar risicobeheersing én strategische groei.</p>

                    <h3>Van reactief naar preventief denken</h3>
                    <p>Veel organisaties handelen pas wanneer een medewerker uitvalt. Een toekomstgerichte organisatie:</p>
                    <ul>
                        <li>Meet werkbeleving regelmatig</li>
                        <li>Stimuleert open dialoog</li>
                        <li>Biedt preventieve ondersteuning</li>
                        <li>Ziet welzijn als prestatieversterker</li>
                    </ul>
                    <p>Preventie is altijd effectiever én menselijker dan herstel achteraf.</p>

                    <h3>Hoe Mentis Care organisaties ondersteunt</h3>
                    <p>Bij Mentis Care geloven we dat gezonde medewerkers de basis vormen voor een gezonde organisatie. Wij ondersteunen bedrijven met:</p>
                    <ul>
                        <li>Individuele begeleiding bij stress, burn-out en angstklachten</li>
                        <li>Preventieve workshops en trainingen</li>
                        <li>Advies aan leidinggevenden</li>
                        <li>Cultuur- en welzijnstrajecten</li>
                        <li>Vertrouwelijke ondersteuningstrajecten</li>
                    </ul>
                    <p>Onze aanpak is praktisch, mensgericht en afgestemd op de specifieke dynamiek van uw organisatie.</p>

                    <h3>Mentale gezondheid als strategisch voordeel</h3>
                    <p>Organisaties die investeren in welzijn:</p>
                    <ul>
                        <li>Hebben hogere medewerkerstevredenheid</li>
                        <li>Behouden talent langer</li>
                        <li>Ervaren minder verzuim</li>
                        <li>Presteren duurzamer</li>
                    </ul>
                    <p>Mentale gezondheid is geen zachte factor. Het is een harde succesfactor.</p>

                    <h3>Samenbouwen aan een veerkrachtige werkcultuur</h3>
                    <p>Wilt u weten hoe Mentis Care uw organisatie kan ondersteunen bij het versterken van mentale gezondheid op de werkvloer?</p>
                    <p>Neem vrijblijvend contact met ons op voor een kennismakingsgesprek.</p>
                `
            },
            {
                title: "Waarom dagbesteding meer is dan alleen je dag vullen",
                date: "2 februari 2026",
                image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop", // Activity/Painting/Group
                href: "/nieuws/waarom-dagbesteding-meer-is",
                category: "Dagbesteding",
                body: `
                    <p>Wanneer mensen het woord dagbesteding horen, denken ze soms aan “beziggehouden worden”. Alsof het alleen draait om de tijd doorkomen.</p>
                    <p>Maar dagbesteding is veel meer dan dat.</p>
                    <p>Voor mensen die herstellen van mentale klachten, een moeilijke periode of langdurige overbelasting, kan dagbesteding juist het verschil maken tussen stilstand en vooruitgang. Het biedt structuur, verbinding, ontwikkeling en misschien wel het belangrijkste perspectief.</p>
                    <p>In deze blog lees je waarom dagbesteding zoveel meer is dan alleen het vullen van een dag.</p>

                    <h3>Structuur als basis voor herstel</h3>
                    <p>Wanneer je mentale klachten ervaart, kan je dagritme snel verdwijnen. Laat opstaan, weinig energie, geen vaste afspraken — het lijkt klein, maar het heeft grote impact.</p>
                    <p>Structuur geeft houvast. Een vaste plek waar je verwacht wordt:</p>
                    <ul>
                        <li>Helpt je op tijd op te staan</li>
                        <li>Geeft ritme aan je week</li>
                        <li>Zorgt voor een duidelijk begin en einde van je dag</li>
                        <li>Brengt overzicht in plaats van chaos</li>
                    </ul>
                    <p>Voor veel cliënten is dit de eerste stap richting stabiliteit. En stabiliteit is de basis van herstel.</p>

                    <h3>Verbinding voorkomt isolement</h3>
                    <p>Mentale klachten kunnen ervoor zorgen dat je je terugtrekt. Sociale contacten worden minder. Je wereld wordt kleiner.</p>
                    <p>Dagbesteding doorbreekt dat patroon. In een veilige omgeving ontmoet je anderen die:</p>
                    <ul>
                        <li>Begrijpen hoe het is om het moeilijk te hebben</li>
                        <li>Niet oordelen</li>
                        <li>Zelf ook werken aan herstel</li>
                    </ul>
                    <p>Die herkenning en erkenning verminderen gevoelens van eenzaamheid. Je merkt: ik ben niet de enige. Samen koffiedrinken, samenwerken aan een activiteit of gewoon een gesprek voeren — het zijn ogenschijnlijk kleine momenten die veel betekenen.</p>

                    <h3>Kleine successen, groot effect</h3>
                    <p>Wanneer je zelfvertrouwen laag is, kunnen simpele taken al overweldigend voelen. Dagbesteding biedt ruimte om stap voor stap succeservaringen op te doen. Dat kan zijn:</p>
                    <ul>
                        <li>Een creatieve opdracht afronden</li>
                        <li>Een nieuwe vaardigheid leren</li>
                        <li>Een taak zelfstandig uitvoeren</li>
                        <li>Iets durven delen in de groep</li>
                    </ul>
                    <p>Elke kleine overwinning versterkt het gevoel: ik kan dit. En juist dat gevoel is essentieel om verder te groeien.</p>

                    <h3>Actief bezig zijn geeft rust in je hoofd</h3>
                    <p>Veel mentale klachten gaan gepaard met piekeren. Wanneer je thuis zit zonder duidelijke invulling, krijgen negatieve gedachten vaak meer ruimte.</p>
                    <p>Actief bezig zijn — creatief, praktisch of sociaal — helpt om:</p>
                    <ul>
                        <li>Je aandacht te verleggen</li>
                        <li>Je hoofd tot rust te brengen</li>
                        <li>Positieve prikkels te ervaren</li>
                        <li>Meer in het moment te zijn</li>
                    </ul>
                    <p>Beweging, creativiteit en samenwerken activeren andere delen van het brein dan piekeren en stress.</p>

                    <h3>Herstellen in je eigen tempo</h3>
                    <p>Dagbesteding betekent niet dat je meteen grote stappen moet zetten. Het gaat juist om opbouw in een tempo dat bij jou past. Misschien begin je met:</p>
                    <ul>
                        <li>Eén of twee dagdelen per week</li>
                        <li>Rustige activiteiten</li>
                        <li>Kleine sociale interacties</li>
                    </ul>
                    <p>Van daaruit kun je verder bouwen. Zonder druk. Zonder vergelijking met anderen.</p>
                    <p>Herstel is geen wedstrijd. Het is een persoonlijk proces.</p>

                    <h3>Ontwikkeling en toekomstperspectief</h3>
                    <p>Dagbesteding is niet alleen gericht op het “nu”, maar ook op de toekomst. Het helpt bij:</p>
                    <ul>
                        <li>Het ontdekken van talenten</li>
                        <li>Het ontwikkelen van werkritme</li>
                        <li>Het vergroten van zelfstandigheid</li>
                        <li>Het voorbereiden op vrijwilligerswerk, opleiding of werk</li>
                    </ul>
                    <p>Soms ontdek je tijdens dagbesteding kwaliteiten waarvan je niet wist dat je ze had. Van overleven naar weer vooruitkijken — dát is de kracht.</p>

                    <h3>Veiligheid als fundament</h3>
                    <p>Een belangrijk onderdeel van effectieve dagbesteding is een veilige omgeving. Een plek waar je:</p>
                    <ul>
                        <li>Jezelf mag zijn</li>
                        <li>Fouten mag maken</li>
                        <li>Vragen mag stellen</li>
                        <li>Je grenzen mag aangeven</li>
                    </ul>
                    <p>Veiligheid zorgt ervoor dat je durft te groeien.</p>

                    <h3>Meer dan een activiteit - een stap naar herstel</h3>
                    <p>Dagbesteding draait niet om tijd vullen. Het draait om structuur, verbinding, zelfvertrouwen, ontwikkeling en hoop.</p>
                    <p>Voor veel mensen is het de eerste stap naar meer stabiliteit en zelfstandigheid.</p>
                    <p>Bij Mentis Care kijken we samen naar wat jij nodig hebt. Geen standaardprogramma, maar begeleiding afgestemd op jouw situatie en tempo. Want herstel begint met een veilige plek waar je weer mag groeien.</p>
                `
            },
            {
                title: "Nieuwe samenwerking: Werkstad van start",
                date: "30 januari 2026",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
                href: "/nieuws/werkstad-van-start",
                category: "Samenwerking",
                body: `<p>Vandaag is de officiële start van Werkstad...</p>` // Placeholder for older items if needed
            },
            {
                title: "Nieuwe samenwerking met Woonbron Spijkenisse",
                date: "28 januari 2026",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
                href: "/nieuws/samenwerking-woonbron",
                category: "Samenwerking"
            },
            {
                title: "Theater Babel: Op hoop van zegen",
                date: "13 januari 2026",
                image: "https://images.unsplash.com/photo-1503095392269-27528ca388ec?q=80&w=1000&auto=format&fit=crop",
                href: "/nieuws/theater-babel",
                category: "Cultuur"
            }
        ]
    },
};
