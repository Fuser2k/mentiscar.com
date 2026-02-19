"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/Section";

export function IntroSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } },
    };

    const itemRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } },
    };

    const itemUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } },
    };


    return (
        <Section className="relative overflow-hidden py-24 md:py-32 !bg-transparent" container={false}>
            {/* Animated Blue Background Effect - Layered behind content */}

            {/* Base Background Layer */}
            <div className="absolute inset-0 bg-soft-white -z-50" />

            {/* Large Blue Blob 1 */}
            <motion.div
                className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-teal/10 rounded-full blur-3xl -z-40"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Large Blue Blob 2 */}
            <motion.div
                className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl -z-40"
                animate={{
                    x: [0, -70, 0],
                    y: [0, -50, 0],
                    rotate: [0, 45, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Large Blue Blob 3 */}
            <motion.div
                className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] bg-blue-400/10 rounded-full blur-3xl -z-40"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    className="max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        {/* Left Column: Title */}
                        <motion.div className="flex-1 text-center md:text-left" variants={itemLeft as any}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                                "Bij Mentis Care draait het om <span className="text-teal">rust</span>, <span className="text-teal">stabiliteit</span> en <span className="text-teal">perspectief</span>."
                            </h2>
                        </motion.div>

                        {/* Right Column: Text Content */}
                        <motion.div className="flex-1" variants={itemRight as any}>
                            <div className="prose prose-lg text-gray-600 leading-relaxed text-center md:text-left">
                                <p className="mb-6">
                                    Wij ondersteunen (jong)volwassenen met een langdurige zorgvraag bij wonen, daginvulling en het dagelijks leven. Altijd met aandacht voor wie iemand is, wat iemand kan en wat nodig is om grip te houden op het leven.
                                </p>
                                <p>
                                    Onze begeleiding is persoonlijk, duidelijk en professioneel. We werken samen met cliënten, naasten en netwerkpartners om ondersteuning te bieden die past bij het leven van alledag.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
