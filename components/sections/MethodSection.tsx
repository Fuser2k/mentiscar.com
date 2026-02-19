"use client";

import { content } from "@/content";
import { Users, ClipboardCheck, TrendingUp, Handshake } from "lucide-react";

export function MethodSection() {
    const { method } = content.home;

    // Feature points with specific color themes for variety
    const features = [
        {
            icon: Users,
            title: "Vaste Begeleiders",
            description: "Wij werken met vaste gezichten. Zo bouwen we een vertrouwensband op en hoeft u niet steeds uw verhaal opnieuw te doen.",
            color: "bg-teal",
            lightColor: "bg-teal/10",
            textColor: "text-teal"
        },
        {
            icon: ClipboardCheck,
            title: "Heldere Afspraken",
            description: "Duidelijkheid geeft rust. We maken concrete afspraken en stellen samen haalbare doelen op.",
            color: "bg-orange-500",
            lightColor: "bg-orange-500/10",
            textColor: "text-orange-500"
        },
        {
            icon: TrendingUp,
            title: "Stap voor Stap",
            description: "Wat u zelf kunt, blijft u zelf doen. Waar ondersteuning nodig is, helpen wij. Altijd in uw eigen tempo.",
            color: "bg-pink-500",
            lightColor: "bg-pink-500/10",
            textColor: "text-pink-500"
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <span className="inline-block py-2 px-4 rounded-full bg-navy/5 text-navy font-bold text-sm mb-6 tracking-widest uppercase">
                        Onze Werkwijze
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy leading-tight">
                        {method.title}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Mentis Care staat voor begeleiding die aansluit bij het dagelijks leven. Geen ingewikkelde systemen, maar menselijke ondersteuning.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            {/* Top Color Line */}
                            <div className={`absolute top-0 left-10 right-10 h-1.5 rounded-b-full ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className={`w-16 h-16 ${feature.lightColor} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`${feature.textColor} w-8 h-8`} />
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Closing Statement */}
                <div className="bg-navy rounded-[3rem] p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

                    <div className="relative z-10 flex flex-col items-center justify-center gap-8">
                        <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/10">
                            <Handshake className="text-white w-10 h-10" />
                        </div>
                        <p className="text-2xl md:text-3xl text-white font-bold leading-snug max-w-3xl">
                            "Samenwerking met naasten en ketenpartners is bij ons vanzelfsprekend. We doen het samen."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
