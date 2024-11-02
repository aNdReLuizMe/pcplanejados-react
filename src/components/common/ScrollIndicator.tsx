"use client";

import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollIndicator(): JSX.Element {
    const [showScroll, setShowScroll] = useState<boolean>(false);

    useEffect(() => {
        const checkScrollTop = (): void => {
            if (!showScroll && window.scrollY > 400) {
                setShowScroll(true);
            } else if (showScroll && window.scrollY <= 400) {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <button
                onClick={scrollToTop}
                className={`fixed right-6 bottom-6 p-2 rounded-full bg-gray-800/80 text-white transition-all duration-300 hover:bg-gray-700 ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                aria-label="Voltar ao topo"
            >
                <ChevronUp size={24} />
            </button>
        </>
    );
}
