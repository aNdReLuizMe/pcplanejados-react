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
                        window.history.replaceState(null, '', `#${entry.target.id}`);
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: '-80px 0px 0px 0px'
            }
        );

        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId: string): void => {
        const section = document.getElementById(sectionId);
        if (section) {
            const navbarHeight = 80;
            const targetPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Navbar className="fixed top-0 left-0 right-0 z-50 h-20 bg-white/95 backdrop-blur-sm shadow-lg">
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
