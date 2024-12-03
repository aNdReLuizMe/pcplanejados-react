"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { CarouselApp } from "./Carousel";
import { TestimonialApp } from "./Testimonial";

export function Hero(): JSX.Element {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section
            id="home"
            className="w-full mt-20 h-[calc(100vh-5rem)]"
        >
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 h-full"
            >
                {/* Carrossel */}
                <motion.div
                    variants={itemVariants}
                    className="w-full h-[50vh] lg:h-full bg-gray-800 relative"
                >
                    <div className="h-full">
                        <CarouselApp />
                    </div>
                </motion.div>

                {/* Depoimento */}
                <motion.div
                    variants={itemVariants}
                    className="w-full h-[50vh] lg:h-full flex items-center justify-center bg-white"
                >
                    <div className="max-w-2xl w-full mx-auto px-6 py-8 lg:py-0">
                        <TestimonialApp />
                    </div>
                </motion.div>
            </motion.div>

            {/* Indicador de scroll */}
            <motion.div
                variants={itemVariants}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden"
            >
                <button
                    onClick={() => {
                        const aboutSection = document.getElementById('about');
                        if (aboutSection) {
                            const navbarHeight = 80;
                            const targetPosition = aboutSection.offsetTop - navbarHeight;
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    }}
                    className="flex flex-col items-center text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Rolar para baixo"
                >
                    <span className="text-sm mb-2">Explorar mais</span>
                    <svg
                        className="w-6 h-6 animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </button>
            </motion.div>
        </section>
    );
}
