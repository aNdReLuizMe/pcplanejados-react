"use client";

export function AboutUs(): JSX.Element {
    return (
        <section id="about" className="min-h-screen bg-white py-16 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Quem Somos
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        {/* Seu texto aqui */}
                    </p>
                </div>
            </div>
        </section>
    );
}
