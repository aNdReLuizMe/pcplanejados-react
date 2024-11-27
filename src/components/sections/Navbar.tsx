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
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Navbar className="h-20 pt-5 shadow-lg fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
                <img
                    className="h-10 sm:h-14"
                    src={Logo}
                    alt="Paulo Costa Planejados"
                />
                <Navbar.Toggle className="ml-3" />
                <Navbar.Collapse className="md:flex">
                    <Navbar.Link
                        href="#home"
                        active={activeSection === 'home'}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            scrollToSection('home');
                        }}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link
                        href="#about"
                        active={activeSection === 'about'}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            scrollToSection('about');
                        }}
                    >
                        Quem somos
                    </Navbar.Link>
                    <Navbar.Link
                        href="#portfolio"
                        active={activeSection === 'portfolio'}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            scrollToSection('portfolio');
                        }}
                    >
                        O que criamos
                    </Navbar.Link>
                    <Navbar.Link
                        href="#location"
                        active={activeSection === 'location'}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.preventDefault();
                            scrollToSection('location');
                        }}
                    >
                        Onde estamos
                    </Navbar.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
