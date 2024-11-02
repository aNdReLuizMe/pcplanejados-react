"use client";
import { Carousel } from "flowbite-react";

import Image18 from "../../assets/images/carousel/Image (18).jpeg";
import Image28 from "../../assets/images/carousel/Image (28).jpeg";
import Image32 from "../../assets/images/carousel/Image (32).jpeg";
import Image37 from "../../assets/images/carousel/Image (37).jpeg";
import Image45 from "../../assets/images/carousel/Image (45).jpeg";
import Image49 from "../../assets/images/carousel/Image (49).jpeg";
import Image58 from "../../assets/images/carousel/Image (58).jpeg";
import Image60 from "../../assets/images/carousel/Image (60).jpeg";
import Image8 from "../../assets/images/carousel/Image (8).jpeg";

export function CarouselApp() {
    return (
        <div className="h-full w-full">
            <Carousel
                pauseOnHover
                className="h-full w-full"
            >
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={Image18}
                        alt="..."
                        className="max-h-full max-w-full h-auto w-auto object-contain p-1"
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={Image8}
                        alt="..."
                        className="max-h-full max-w-full h-auto w-auto object-contain p-1"
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={Image28}
                        alt="..."
                        className="max-h-full max-w-full h-auto w-auto object-contain p-1"
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={Image32}
                        alt="..."
                        className="max-h-full max-w-full h-auto w-auto object-contain p-1"
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={Image37}
                        alt="..."
                        className="max-h-full max-w-full h-auto w-auto object-contain p-1"
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={Image45}
                        alt="..."
                        className="max-h-full max-w-full h-auto w-auto object-contain p-1"
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={Image49}
                        alt="..."
                        className="max-h-full max-w-full h-auto w-auto object-contain p-1"
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={Image58}
                        alt="..."
                        className="max-h-full max-w-full h-auto w-auto object-contain p-1"
                    />
                </div>
                <div className="w-full h-full flex items-center justify-center">
                    <img
                        src={Image60}
                        alt="..."
                        className="max-h-full max-w-full h-auto w-auto object-contain p-1"
                    />
                </div>
            </Carousel>
        </div>
    );
}
