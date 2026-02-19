import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Phone } from "lucide-react";

interface CTASectionProps {
    title: string;
    body: string; // We might ignore this or use it as the subtitle
    bullets: string[];
    closing: string;
}

export function CTASection({ title, body, bullets, closing }: CTASectionProps) {
    return (
        <section className="bg-teal text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">

                    {/* Icon Area */}
                    <div className="hidden md:block shrink-0">
                        {/* Using a graphical representation similar to the sketch in image */}
                        <div className="relative">
                            <MessageCircle size={64} className="text-white opacity-90" />
                            <Phone size={32} className="absolute bottom-0 right-0 text-white bg-teal rounded-full p-1 border-2 border-teal" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">
                            Aanmelden en contact
                        </h2>
                        <p className="text-lg text-white/90 leading-relaxed">
                            Direct aanmelden als cliënt bij Mentis Care? Of neem gerust eerst contact met ons op voor vragen en advies.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-teal font-bold rounded-full">
                                Contact
                            </Button>
                        </Link>
                        <Link href="/aanmelden" className="w-full sm:w-auto">
                            <Button variant="primary" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 border-none text-white font-bold rounded-full shadow-lg">
                                Aanmelden
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
