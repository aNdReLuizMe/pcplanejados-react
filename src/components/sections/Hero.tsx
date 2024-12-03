"use client";

import { CarouselApp } from "./Carousel";
import { TestimonialApp } from "./Testimonial";


export function Hero(): JSX.Element {
    return (
        <section id="home" className="relative w-full min-h-[calc(100vh)] lg:h-[calc(100vh)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="w-full h-full bg-gray-800">
                    <CarouselApp />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="max-w-2xl mx-auto px-4">
                        <TestimonialApp />
                    </div>
                </div>
            </div>
        </section>
    );
}
