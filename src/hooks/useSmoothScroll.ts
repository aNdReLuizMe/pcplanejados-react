// hooks/useSmoothScroll.ts
export const useSmoothScroll = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return { scrollToSection };
};
