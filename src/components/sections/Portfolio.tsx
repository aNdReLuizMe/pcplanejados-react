"use client";

import LightGallery from 'lightgallery/react';

// Importando estilos necessários do lightgallery
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lightgallery.css';

// Importando plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Importe suas imagens aqui
import Image2 from "../../assets/images/carousel/Image (2).jpeg";
import Image31 from "../../assets/images/carousel/Image (31).jpeg";
import Image37 from "../../assets/images/carousel/Image (37).jpeg";
import Image40 from "../../assets/images/carousel/Image (40).jpeg";
import Image46 from "../../assets/images/carousel/Image (46).jpeg";
import Image51 from "../../assets/images/carousel/Image (51).jpeg";
import Image54 from "../../assets/images/carousel/Image (54).jpeg";
import Image61 from "../../assets/images/carousel/Image (61).jpeg";// Adicione mais imagens conforme necessário

export function Portfolio(): JSX.Element {
    const images = [
        { src: Image54, thumb: Image54, alt: 'Móvel Planejado 1' },
        { src: Image2, thumb: Image2, alt: 'Móvel Planejado 2' },
        { src: Image31, thumb: Image31, alt: 'Móvel Planejado 3' },
        { src: Image37, thumb: Image37, alt: 'Móvel Planejado 4' },
        { src: Image40, thumb: Image40, alt: 'Móvel Planejado 5' },
        { src: Image46, thumb: Image46, alt: 'Móvel Planejado 6' },
        { src: Image51, thumb: Image51, alt: 'Móvel Planejado 7' },
        { src: Image61, thumb: Image61, alt: 'Móvel Planejado 8' },
    ];

    return (
        <section className="h-[calc(100vh-5rem)] bg-gradient-to-b from-white to-gray-50 py-16 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        O Que Criamos
                    </h2>
                    <p className="text-xl text-gray-600">
                        Conheça alguns dos nossos projetos realizados
                    </p>
                </div>

                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {images.map((image, index) => (
                        <a
                            key={index}
                            data-lg-size="1400-1400"
                            className="gallery-item overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                            href={image.src}
                        >
                            <img
                                alt={image.alt}
                                src={image.thumb}
                                className="w-full h-64 object-cover"
                                loading="lazy"
                            />
                        </a>
                    ))}
                </LightGallery>
            </div>
        </section>
    );
}
