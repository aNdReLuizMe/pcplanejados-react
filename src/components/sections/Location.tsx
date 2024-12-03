// src/components/sections/Location.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { type FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    style?: React.CSSProperties;
}

export const Location: FC = () => {
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

    const leftVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const rightVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const IframeMap: FC<IframeProps> = (props) => (
        <iframe
            {...props}
            title="PC Planejados Location"
        />
    );

    return (
        <section id="location" className="flex items-center justify-center min-h-[calc(100vh-5rem)] bg-white px-4 py-8">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                className="container mx-auto max-w-6xl"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Mapa */}
                    <motion.div
                        variants={leftVariants}
                        className="w-full h-[300px] lg:h-[450px] relative"
                    >
                        <IframeMap
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.5886095732517!2d-51.700339!3d-20.8079248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949098173cca9d87%3A0xe2e9759cf2555fa4!2sR.%20Santiago%20Manoel%20Fern%C3%A1ndez%2C%202332%20-%20Vila%20Zuque%2C%20Tr%C3%AAs%20Lagoas%20-%20MS%2C%2079620-378!5e0!3m2!1spt-BR!2sbr!4v1732745251656!5m2!1spt-BR!2sbr"
                            className="absolute inset-0 w-full h-full rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>

                    {/* Informações de Contato */}
                    <motion.div
                        variants={rightVariants}
                        className="flex items-center p-6 lg:p-8"
                    >
                        <div className="w-full space-y-6">
                            <div className="text-center lg:text-left">
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                    Venha nos conhecer
                                </h2>
                                <p className="text-base lg:text-lg text-gray-600">
                                    Faça seu orçamento e realize seu projeto
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Endereço */}
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                                        <p className="text-gray-600">
                                            Rua Santiago Manoel Fernández, 2332<br />
                                            Bairro Nova Três Lagoas 2<br />
                                            CEP: 79620-378<br />
                                            Três Lagoas/MS - Brasil
                                        </p>
                                    </div>
                                </div>

                                {/* Horário de Funcionamento */}
                                <div className="flex items-start space-x-4">
                                    <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h3>
                                        <p className="text-gray-600">
                                            Segunda a Sexta: 8h às 18h<br />
                                            Sábado: 8h às 12h
                                        </p>
                                    </div>
                                </div>

                                {/* Contato */}
                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Contato</h3>
                                        <p className="text-gray-600">
                                            (67) 99114-6889<br />
                                            contato@pcplanejados.com.br
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Botão CTA */}
                            <div className="pt-2 text-center lg:text-left">
                                <a
                                    href="https://wa.me/5567991146889"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 hover:shadow-lg"
                                >
                                    Agende uma Visita
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
