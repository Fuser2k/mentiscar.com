"use client";


import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { CheckCircle, ChevronRight, Info, Home, User, Users, Phone, FileText, HelpCircle, MapPin, Calendar, Mail } from "lucide-react";
import Link from "next/link";

export default function AanmeldenPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        woonvorm: "",
        voornaam: "",
        achternaam: "",
        geboortedatum: "",
        geslacht: "",
        adres: "",
        straat: "",
        woonplaats: "",
        postcode: "",
        email: "",
        telefoon: "",
        kinderen: "",
        vertegenwoordiger: "",
        contactpersoon_type: "Mezelf",
        hulpverlener_naam: "",
        hulpverlener_achternaam: "",
        hulpverlener_organisatie: "",
        hulpverlener_functie: "",
        hulpverlener_email: "",
        hulpverlener_telefoon: "",
        eerder_aangemeld: "",
        reden: "",
        verstandelijke_beperking: "",
        psychische_klachten: "",
        verslaving: "",
        strafblad: "",
        samen_wonen: "",
        kinderen_wonen: "",
        kind_ouder_dan_12: "",
        indicatie: "",
        indicatie_type: "",
        indicatie_aanvraag: "",
        gevonden_via: "",
        documenten: {
            indicatiebesluit: false,
            beschikking: false,
            onderzoeksgegevens: false,
            rapportages: false
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (category: string, name: string, checked: boolean) => {
        if (category === "documenten") {
            setFormData(prev => ({
                ...prev,
                documenten: { ...prev.documenten, [name]: checked }
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex flex-col font-sans">

                <main className="flex-grow pt-32 pb-20 flex items-center justify-center bg-soft-white">
                    <div className="bg-white p-12 rounded-2xl shadow-lg max-w-lg text-center animate-fade-in-up">
                        <div className="flex justify-center mb-6">
                            <div className="bg-teal/10 p-5 rounded-full">
                                <CheckCircle size={64} className="text-teal" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold mb-4 text-navy">Bedankt voor uw aanmelding</h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We hebben uw gegevens in goede orde ontvangen. We nemen zo snel mogelijk contact met u op om de vervolgstappen te bespreken.
                        </p>
                        <Link href="/">
                            <Button variant="primary" className="px-8">
                                Terug naar home
                            </Button>
                        </Link>
                    </div>
                </main>

            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-blue-50/50 to-white">


            <main className="flex-grow pt-28 md:pt-36">

                {/* 1) Breadcrumbs */}
                <div className="container mx-auto px-4 md:px-6 mb-8">
                    <nav className="flex items-center text-sm text-gray-500 bg-white/50 inline-flex px-4 py-2 rounded-full backdrop-blur-sm border border-white shadow-sm">
                        <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                        <ChevronRight size={14} className="mx-2 text-gray-400" />
                        <span className="text-navy font-medium">Aanmelden</span>
                    </nav>
                </div>

                {/* 2) Page Title & Intro */}
                <div className="container mx-auto px-4 md:px-6 mb-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 tracking-tight">
                            Aanmelden
                        </h1>
                        <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-4 max-w-3xl mx-auto">
                            <p>
                                Bij Mentis Care kunt u zichzelf aanmelden voor begeleiding, of iemand anders aanmelden. We zorgen ervoor dat dit proces zorgvuldig en aandachtig verloopt.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3) Calm information block */}
                <div className="container mx-auto px-4 md:px-6 mb-12">
                    <div className="max-w-3xl mx-auto bg-white border border-blue-100 rounded-2xl p-6 md:p-8 flex gap-5 items-start shadow-sm shadow-blue-50/50">
                        <div className="bg-blue-50 p-3 rounded-full shrink-0">
                            <Info className="text-navy" size={24} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="font-bold text-navy text-lg">Vrijblijvende aanmelding</h3>
                            <p className="text-gray-600 leading-relaxed text-base">
                                Het invullen van dit formulier verplicht u tot niets. Wij vragen u vriendelijk om, indien mogelijk, een verwijsbrief of behandelplan mee te sturen.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4) Aanmeldformulier */}
                <div className="container mx-auto px-4 md:px-6 mb-24">
                    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">

                        {/* Section 1 — Woonvorm */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                                <div className="bg-teal/10 p-3 rounded-xl text-teal">
                                    <Home size={28} />
                                </div>
                                <h2 className="text-2xl font-bold text-navy">Gewenste woonvorm</h2>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                {["Groepswonen", "Kleinschalig wonen", "Zelfstandig wonen"].map((option) => (
                                    <label key={option}
                                        className={`
                                            relative flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all duration-200 border-2 text-center h-40
                                            ${formData.woonvorm === option
                                                ? "border-teal bg-teal/5 text-teal shadow-md"
                                                : "border-gray-100 hover:border-teal/30 hover:bg-gray-50 text-gray-600"
                                            }
                                        `}
                                    >
                                        <input
                                            type="radio"
                                            name="woonvorm"
                                            value={option}
                                            checked={formData.woonvorm === option}
                                            onChange={() => handleRadioChange("woonvorm", option)}
                                            className="absolute opacity-0 w-full h-full cursor-pointer"
                                        />
                                        <div className={`mb-3 p-3 rounded-full ${formData.woonvorm === option ? "bg-teal text-white" : "bg-gray-100 text-gray-400"}`}>
                                            <Home size={24} />
                                        </div>
                                        <span className="font-bold text-lg">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Section 2 — Persoonlijke gegevens */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                                <div className="bg-navy/5 p-3 rounded-xl text-navy">
                                    <User size={28} />
                                </div>
                                <h2 className="text-2xl font-bold text-navy">Persoonlijke gegevens</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700 ml-1">Voornaam *</label>
                                        <input type="text" name="voornaam" required value={formData.voornaam} onChange={handleChange}
                                            className="w-full p-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 transition-all outline-none" placeholder="Uw voornaam" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700 ml-1">Achternaam *</label>
                                        <input type="text" name="achternaam" required value={formData.achternaam} onChange={handleChange}
                                            className="w-full p-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 transition-all outline-none" placeholder="Uw achternaam" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700 ml-1">Geboortedatum *</label>
                                        <div className="relative">
                                            <input type="date" name="geboortedatum" required value={formData.geboortedatum} onChange={handleChange}
                                                className="w-full p-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 transition-all outline-none" />
                                            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700 ml-1">Geslacht</label>
                                        <div className="flex gap-4 p-1 bg-gray-50 rounded-xl">
                                            {["Man", "Vrouw"].map((opt) => (
                                                <label key={opt} className={`
                                                    flex-1 flex items-center justify-center p-3 rounded-lg cursor-pointer transition-all
                                                    ${formData.geslacht === opt ? "bg-white shadow text-navy font-bold" : "text-gray-500 hover:text-gray-700"}
                                                `}>
                                                    <input type="radio" name="geslacht" value={opt} checked={formData.geslacht === opt} onChange={() => handleRadioChange("geslacht", opt)} className="hidden" />
                                                    <span>{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-gray-100">
                                    <label className="block text-sm font-bold text-gray-700 ml-1">Heb je een adres?</label>
                                    <div className="flex gap-6">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${formData.adres === "Ja" ? "border-teal" : "border-gray-300 group-hover:border-teal"}`}>
                                                {formData.adres === "Ja" && <div className="w-3 h-3 bg-teal rounded-full" />}
                                            </div>
                                            <input type="radio" name="adres" value="Ja" checked={formData.adres === "Ja"} onChange={() => handleRadioChange("adres", "Ja")} className="hidden" />
                                            <span className="text-gray-700 group-hover:text-navy font-medium">Ja</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${formData.adres === "Nee" ? "border-teal" : "border-gray-300 group-hover:border-teal"}`}>
                                                {formData.adres === "Nee" && <div className="w-3 h-3 bg-teal rounded-full" />}
                                            </div>
                                            <input type="radio" name="adres" value="Nee" checked={formData.adres === "Nee"} onChange={() => handleRadioChange("adres", "Nee")} className="hidden" />
                                            <span className="text-gray-700 group-hover:text-navy font-medium">Nee</span>
                                        </label>
                                    </div>
                                </div>

                                {formData.adres === "Ja" && (
                                    <div className="bg-blue-50/50 p-6 rounded-2xl space-y-4 animate-fade-in-up border border-blue-100">
                                        <div className="space-y-2">
                                            <label className="block text-sm font-bold text-gray-700 ml-1">Straat en huisnummer *</label>
                                            <input type="text" name="straat" value={formData.straat} onChange={handleChange}
                                                className="w-full p-3 rounded-xl bg-white border border-gray-200 focus:border-teal focus:ring-4 focus:ring-teal/10 transition-all outline-none" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-bold text-gray-700 ml-1">Postcode *</label>
                                                <input type="text" name="postcode" value={formData.postcode} onChange={handleChange}
                                                    className="w-full p-3 rounded-xl bg-white border border-gray-200 focus:border-teal focus:ring-4 focus:ring-teal/10 transition-all outline-none" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-bold text-gray-700 ml-1">Woonplaats *</label>
                                                <input type="text" name="woonplaats" value={formData.woonplaats} onChange={handleChange}
                                                    className="w-full p-3 rounded-xl bg-white border border-gray-200 focus:border-teal focus:ring-teal/10 transition-all outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700 ml-1">E-mailadres *</label>
                                        <div className="relative">
                                            <input type="email" name="email" required value={formData.email} onChange={handleChange}
                                                className="w-full p-4 pl-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 transition-all outline-none" placeholder="naam@email.nl" />
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700 ml-1">Telefoonnummer *</label>
                                        <div className="relative">
                                            <input type="tel" name="telefoon" required value={formData.telefoon} onChange={handleChange}
                                                className="w-full p-4 pl-12 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 transition-all outline-none" placeholder="06 12345678" />
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3 — Gezin en vertegenwoordiging & Section 4 — Contactpersoon */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Section 3 */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                                    <div className="bg-orange-50 p-3 rounded-xl text-orange-500">
                                        <Users size={24} />
                                    </div>
                                    <h2 className="text-xl font-bold text-navy">Gezin & Voogdij</h2>
                                </div>
                                <div className="space-y-6 flex-grow">
                                    {[
                                        { label: "Heb je kinderen?", name: "kinderen" },
                                        { label: "Is er een wettelijke vertegenwoordiger?", name: "vertegenwoordiger" }
                                    ].map((q) => (
                                        <div key={q.name}>
                                            <label className="block text-base font-medium text-gray-700 mb-2">{q.label}</label>
                                            <div className="flex gap-4 bg-gray-50 p-1 rounded-lg">
                                                {["Ja", "Nee"].map((opt) => (
                                                    <label key={opt} className={`
                                                        flex-1 flex items-center justify-center p-2 rounded cursor-pointer transition-all text-sm
                                                        ${(formData as any)[q.name] === opt ? "bg-white shadow text-navy font-bold" : "text-gray-500 hover:text-gray-700"}
                                                    `}>
                                                        <input type="radio" name={q.name} value={opt} checked={(formData as any)[q.name] === opt} onChange={() => handleRadioChange(q.name, opt)} className="hidden" />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                                    <div className="bg-purple-50 p-3 rounded-xl text-purple-500">
                                        <Phone size={24} />
                                    </div>
                                    <h2 className="text-xl font-bold text-navy">Contactpersoon</h2>
                                </div>
                                <div className="space-y-6 flex-grow">
                                    <div>
                                        <label className="block text-base font-medium text-gray-700 mb-2">Met wie mogen we contact opnemen?</label>
                                        <div className="flex flex-col gap-3">
                                            {["Mezelf", "Contactpersoon"].map((opt) => (
                                                <label key={opt} className={`
                                                    flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all
                                                    ${formData.contactpersoon_type === opt ? "border-purple-200 bg-purple-50/50 text-navy" : "border-gray-100 hover:border-gray-300 text-gray-600"}
                                                `}>
                                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.contactpersoon_type === opt ? "border-purple-500" : "border-gray-300"}`}>
                                                        {formData.contactpersoon_type === opt && <div className="w-2.5 h-2.5 bg-purple-500 rounded-full" />}
                                                    </div>
                                                    <input type="radio" name="contactpersoon_type" value={opt} checked={formData.contactpersoon_type === opt} onChange={() => handleRadioChange("contactpersoon_type", opt)} className="hidden" />
                                                    <span className="font-medium">{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 5 & 6 — Hulpvragen & Hulpverlener */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                                <div className="bg-rose-50 p-3 rounded-xl text-rose-500">
                                    <HelpCircle size={28} />
                                </div>
                                <h2 className="text-2xl font-bold text-navy">Hulpvraag & Achtergrond</h2>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <label className="block text-lg font-bold text-navy mb-4">Wat is de reden van de aanmelding?</label>
                                    <textarea
                                        name="reden"
                                        rows={6}
                                        className="w-full p-5 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 transition-all outline-none leading-relaxed"
                                        placeholder="Beschrijf hier in het kort uw situatie en waar u hulp bij nodig heeft..."
                                        value={formData.reden}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { label: "(licht) Verstandelijke beperking?", name: "verstandelijke_beperking" },
                                        { label: "Psychische klachten?", name: "psychische_klachten" },
                                        { label: "Is er sprake van verslaving?", name: "verslaving" },
                                        { label: "Heb je een strafblad?", name: "strafblad" },
                                        { label: "Wil je samen met je partner bij ons komen wonen?", name: "samen_wonen" },
                                        { label: "Wil je bij ons komen wonen met drie of meer kinderen?", name: "kinderen_wonen" },
                                        { label: "Heb je een kind dat ouder is dan 12 jaar?", name: "kind_ouder_dan_12" },
                                        { label: "Heb je je eerder bij ons aangemeld?", name: "eerder_aangemeld" }
                                    ].map((q) => (
                                        <div key={q.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                            <span className="text-gray-700 text-sm font-medium pr-4">{q.label}</span>
                                            <div className="flex bg-white rounded-lg p-1 shadow-sm shrink-0">
                                                <label className={`px-3 py-1 rounded cursor-pointer transition-colors text-xs font-bold ${(formData as any)[q.name] === "Ja" ? "bg-teal text-white" : "text-gray-400 hover:text-gray-600"}`}>
                                                    <input type="radio" name={q.name} value="Ja" checked={(formData as any)[q.name] === "Ja"} onChange={() => handleRadioChange(q.name, "Ja")} className="hidden" /> Ja
                                                </label>
                                                <label className={`px-3 py-1 rounded cursor-pointer transition-colors text-xs font-bold ${(formData as any)[q.name] === "Nee" ? "bg-rose-500 text-white" : "text-gray-400 hover:text-gray-600"}`}>
                                                    <input type="radio" name={q.name} value="Nee" checked={(formData as any)[q.name] === "Nee"} onChange={() => handleRadioChange(q.name, "Nee")} className="hidden" /> Nee
                                                </label>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Section 7 — Indicatie */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                                <div className="bg-cyan-50 p-3 rounded-xl text-cyan-600">
                                    <FileText size={28} />
                                </div>
                                <h2 className="text-2xl font-bold text-navy">Indicatie & Documenten</h2>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 bg-cyan-50/50 p-4 rounded-xl border border-cyan-100">
                                    <label className="block text-lg font-bold text-navy shrink-0">Is er al een indicatie?</label>
                                    <div className="flex gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${formData.indicatie === "Ja" ? "border-cyan-600" : "border-gray-300 bg-white group-hover:border-cyan-600"}`}>
                                                {formData.indicatie === "Ja" && <div className="w-3 h-3 bg-cyan-600 rounded-full" />}
                                            </div>
                                            <input type="radio" name="indicatie" value="Ja" checked={formData.indicatie === "Ja"} onChange={() => handleRadioChange("indicatie", "Ja")} className="hidden" />
                                            <span className="text-gray-700 font-medium">Ja</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${formData.indicatie === "Nee" ? "border-cyan-600" : "border-gray-300 bg-white group-hover:border-cyan-600"}`}>
                                                {formData.indicatie === "Nee" && <div className="w-3 h-3 bg-cyan-600 rounded-full" />}
                                            </div>
                                            <input type="radio" name="indicatie" value="Nee" checked={formData.indicatie === "Nee"} onChange={() => handleRadioChange("indicatie", "Nee")} className="hidden" />
                                            <span className="text-gray-700 font-medium">Nee</span>
                                        </label>
                                    </div>
                                </div>

                                {formData.indicatie === "Ja" && (
                                    <div className="animate-fade-in-up space-y-3 pl-4 border-l-4 border-cyan-100">
                                        <label className="block text-sm font-bold text-navy">Welk type indicatie?</label>
                                        <div className="flex flex-wrap gap-3">
                                            {["WLZ", "WMO", "Jeugdwet"].map(opt => (
                                                <label key={opt} className={`
                                                    px-4 py-2 rounded-lg border-2 cursor-pointer transition-all font-medium
                                                    ${formData.indicatie_type === opt ? "border-cyan-600 bg-cyan-50 text-cyan-800" : "border-gray-200 hover:border-cyan-300 text-gray-600"}
                                                `}>
                                                    <input type="radio" name="indicatie_type" value={opt} checked={formData.indicatie_type === opt} onChange={() => handleRadioChange("indicatie_type", opt)} className="hidden" />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h3 className="text-lg font-bold text-navy mb-4">Documenten (optioneel)</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Indicatiebesluit of aanvraag", name: "indicatiebesluit" },
                                        { label: "Beschikking rechtbank voor wettelijke vertegenwoordiging", name: "beschikking" },
                                        { label: "Meest actuele onderzoeksgegevens", name: "onderzoeksgegevens" },
                                        { label: "Rapportages of zorgplannen", name: "rapportages" }
                                    ].map((item) => (
                                        <label key={item.name} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors cursor-pointer group">
                                            <div className="relative flex items-center justify-center w-6 h-6 border-2 border-gray-300 rounded group-hover:border-teal transition-colors">
                                                <input
                                                    type="checkbox"
                                                    name={item.name}
                                                    onChange={(e) => handleCheckboxChange("documenten", item.name, e.target.checked)}
                                                    className="peer opacity-0 absolute w-full h-full cursor-pointer"
                                                />
                                                <div className="w-3 h-3 bg-teal rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="text-gray-700 group-hover:text-navy">{item.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Section 9 — Hoe gevonden */}
                        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <h2 className="text-lg font-bold text-navy whitespace-nowrap">Hoe heb je ons gevonden?</h2>
                                <select
                                    name="gevonden_via"
                                    value={formData.gevonden_via}
                                    onChange={handleChange}
                                    className="w-full md:w-auto flex-grow p-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal outline-none cursor-pointer"
                                >
                                    <option value="">Maak een keuze...</option>
                                    <option value="Google">Google</option>
                                    <option value="Via een cliënt">Via een cliënt</option>
                                    <option value="Via een zorgaanbieder">Via een zorgaanbieder</option>
                                    <option value="Social media">Social media</option>
                                    <option value="Anders">Anders</option>
                                </select>
                            </div>
                        </div>

                        {/* Section 10 — Submit section */}
                        <div className="pt-8">
                            <Button type="submit" variant="primary" size="lg" className="w-full text-xl py-6 h-auto shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl bg-orange-500 hover:bg-orange-600 border-none">
                                Aanmelding versturen
                            </Button>
                            <p className="text-center text-gray-500 mt-4 text-sm">
                                Uw gegevens worden veilig verstuurd.
                            </p>
                        </div>
                    </form>

                    {/* 5) Closing reassurance */}
                    <div className="max-w-2xl mx-auto text-center mt-20 mb-20 bg-white/50 p-8 rounded-3xl backdrop-blur-sm border border-white/50">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Twijfelt u nog of heeft u vragen? U hoeft het formulier niet direct in te vullen.<br />
                            <Link href="/contact" className="text-teal font-bold hover:underline">Neem contact op</Link> voor een vrijblijvend gesprek.
                        </p>
                    </div>
                </div>

                {/* 6) Global CTA Section (Custom) */}
                <div className="bg-navy py-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal rounded-full blur-3xl" />
                        <div className="absolute top-1/2 right-0 w-64 h-64 bg-deep-blue rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Liever eerst even bellen?
                        </h2>
                        <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
                            We staan u graag te woord om uw situatie te bespreken voordat u zich aanmeldt.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button className="bg-white text-navy hover:bg-teal hover:text-white border-none px-8 py-3 rounded-full font-bold">
                                    Contactinformatie
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    );
}
