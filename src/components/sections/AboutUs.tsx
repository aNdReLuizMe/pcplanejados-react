"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function AboutUs(): JSX.Element {
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
        <section className="min-h-screen py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="container mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Título e Subtítulo */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Tradição em Móveis Planejados
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        Há 20 anos transformando sonhos em realidade
                    </p>
                </motion.div>

                {/* Grid de conteúdo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Coluna História */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Nossa História
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                Desde 2020, nós da Paulo Costa Planejados temos nos dedicado à arte da marcenaria,
                                transformando madeira em obras-primas funcionais. Nossa jornada começou
                                em uma pequena oficina, onde o compromisso com a qualidade e a atenção
                                aos detalhes já eram nossa marca registrada.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                No campo da marcenaria já possuímos duas décadas de experiência, onde desenvolvemos um profundo entendimento
                                das necessidades de nossos clientes, combinando técnicas tradicionais
                                com tecnologia de ponta para criar móveis que são verdadeiras obras de arte.
                            </p>
                        </div>
                    </motion.div>

                    {/* Coluna Compromisso */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Nosso Compromisso
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">
                                A excelência é nossa obsessão. Cada projeto é tratado com dedicação
                                exclusiva, utilizando materiais premium e técnicas avançadas de
                                fabricação. Nosso compromisso com preços justos não é apenas uma
                                promessa, é parte fundamental de nossa filosofia.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Acreditamos que móveis planejados de qualidade devem ser acessíveis,
                                por isso trabalhamos incansavelmente para otimizar nossos processos
                                e oferecer o melhor custo-benefício do mercado, sem jamais comprometer
                                a qualidade.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Estatísticas */}
                <motion.div variants={itemVariants} className="mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { number: 20, label: "Anos de Experiência", suffix: "+" },
                            { number: 200, label: "Projetos Realizados", suffix: "+" },
                            { number: 100, label: "Clientes Satisfeitos", suffix: "%" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                                <div className="text-4xl font-bold text-gray-900 mb-2">
                                    {stat.number}{stat.suffix}
                                </div>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
