"use client";

import { Navbar } from "flowbite-react";
import { useEffect, useState } from 'react';
import Logo from "../../assets/images/logo/pcplanejados_logo.png";

export function NavbarApp(): JSX.Element {
    const [activeSection, setActiveSection] = useState<string>('home');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80; // 5rem = 80px
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: sectionId === 'home' ? 0 : targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Navbar className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        className="h-10 sm:h-14"
                        alt="Paulo Costa Planejados"
                    />
                </Navbar.Brand>

                <Navbar.Toggle className="inline-flex md:hidden" />

                <Navbar.Collapse>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        {[
                            { id: 'home', label: 'Home' },
                            { id: 'about', label: 'Quem somos' },
                            { id: 'portfolio', label: 'O que criamos' },
                            { id: 'location', label: 'Onde estamos' },
                        ].map((item) => (
                            <Navbar.Link
                                key={item.id}
                                href={`#${item.id}`}
                                active={activeSection === item.id}
                                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                                    e.preventDefault();
                                    scrollToSection(item.id);
                                }}
                            >
                                {item.label}
                            </Navbar.Link>
                        ))}
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
