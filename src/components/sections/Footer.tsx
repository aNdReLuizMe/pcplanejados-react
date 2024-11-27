"use client";
import { FC } from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export const Footer: FC = () => {
    const socialLinks = [
        {
            icon: <FaInstagram size={24} />,
            href: "https://www.instagram.com/paulocosta_planejados",
            label: "Instagram",
            hoverColor: "hover:text-pink-500"
        },
        {
            icon: <FaWhatsapp size={24} />,
            href: "https://wa.me/5567991146889",
            label: "WhatsApp",
            hoverColor: "hover:text-green-500"
        },
        {
            icon: <FaTiktok size={24} />,
            href: "https://www.tiktok.com/@paulocosta_planejados",
            label: "TikTok",
            hoverColor: "hover:text-[#00f2ea]"
        }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="h-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] bg-white dark:bg-gray-800 fixed bottom-0 w-full z-40">
            <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* Copyright e informações */}
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; {currentYear} Paulo Costa Planejados.</p>
                </div>

                {/* Redes Sociais */}
                <div className="flex items-center space-x-6">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className={`text-gray-500 dark:text-gray-400 transition-all duration-300 ${social.hoverColor} transform hover:scale-110`}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
