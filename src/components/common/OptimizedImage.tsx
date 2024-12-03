"use client";

import React, { useEffect, useState } from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = '',
    width,
    height,
    priority = false,
}) => {
    const [imageSrc, setImageSrc] = useState<string>(src);
    const [loaded, setLoaded] = useState<boolean>(false);

    // Função para gerar URLs para diferentes formatos
    const getImagePath = (format: string): string => {
        return src.replace(/\.[^/.]+$/, `.${format}`);
    };

    // Tratamento de erro da imagem
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = '/images/fallback.jpg';
    };

    // Efeito para carregar a imagem no formato adequado
    useEffect(() => {
        const loadImage = async () => {
            // Tenta carregar AVIF primeiro
            try {
                const avifResponse = await fetch(getImagePath('avif'));
                if (avifResponse.ok) {
                    setImageSrc(getImagePath('avif'));
                    return;
                }
            } catch (e) {
                console.debug('AVIF não suportado');
            }

            // Tenta WebP em seguida
            try {
                const webpResponse = await fetch(getImagePath('webp'));
                if (webpResponse.ok) {
                    setImageSrc(getImagePath('webp'));
                    return;
                }
            } catch (e) {
                console.debug('WebP não suportado');
            }

            // Fallback para JPG
            setImageSrc(getImagePath('jpg'));
        };

        loadImage();
    }, [src]);

    return (
        <picture>
            <source type="image/avif" srcSet={getImagePath('avif')} />
            <source type="image/webp" srcSet={getImagePath('webp')} />
            <img
                src={imageSrc}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? 'eager' : 'lazy'}
                decoding={priority ? 'sync' : 'async'}
                className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                onLoad={() => setLoaded(true)}
                onError={handleImageError}
            />
        </picture>
    );
};

export default OptimizedImage;
