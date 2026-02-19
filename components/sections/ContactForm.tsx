"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        try {
            await submitContactForm(formData);
            setSubmitted(true);
        } catch (error) {
            console.error("Failed to submit contact form", error);
            alert("Er is iets misgegaan. Probeer het later opnieuw.");
        } finally {
            setLoading(false);
        }
    }

    if (submitted) {
        return (
            <div className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-100 text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="font-bold text-2xl mb-2">Bedankt!</h3>
                <p className="text-lg mb-6">We hebben je bericht ontvangen.</p>
                <Button
                    variant="outline"
                    className="border-green-600 text-green-800 hover:bg-green-100 w-full"
                    onClick={() => setSubmitted(false)}
                >
                    Nog een bericht sturen
                </Button>
            </div>
        );
    }

    return (
        <form action={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-navy ml-1">Naam</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 py-3 px-4 transition-all outline-none"
                        placeholder="Uw naam"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-navy ml-1">Telefoon</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="w-full rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 py-3 px-4 transition-all outline-none"
                        placeholder="06 12345678"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-bold text-navy ml-1">E-mailadres</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 py-3 px-4 transition-all outline-none"
                    placeholder="uw@email.nl"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-bold text-navy ml-1">Bericht</label>
                <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    className="w-full rounded-xl bg-gray-50 border-transparent focus:bg-white focus:border-teal focus:ring-4 focus:ring-teal/10 py-3 px-4 transition-all outline-none"
                    placeholder="Waar kunnen we u mee helpen?"
                />
            </div>

            <Button disabled={loading} type="submit" variant="primary" size="lg" className="w-full py-4 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50">
                {loading ? "Versturen..." : "Versturen"}
            </Button>
        </form>
    );
}
