import { Helmet } from 'react-helmet-async';
import { AboutUs } from './components/sections/AboutUs';
import { Footer } from './components/sections/Footer';
import { Hero } from './components/sections/Hero';
import { Location } from './components/sections/Location';
import { NavbarApp } from './components/sections/Navbar';
import { Portfolio } from './components/sections/Portfolio';

function App(): JSX.Element {
    return (
        <>
            <Helmet>
                <title>Paulo Costa Planejados - Móveis Planejados em Três Lagoas</title>
                <meta name="description" content="Há 20 anos transformando sonhos em realidade com móveis planejados de alta qualidade em Três Lagoas. Projetos personalizados com preços justos." />
                <meta name="keywords" content="móveis planejados, marcenaria, Três Lagoas, Paulo Costa, móveis sob medida" />
                <meta property="og:title" content="Paulo Costa Planejados - Móveis Planejados em Três Lagoas" />
                <meta property="og:description" content="Há 20 anos transformando sonhos em realidade com móveis planejados de alta qualidade em Três Lagoas." />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.pcplanejados.com.br" />
                <meta name="robots" content="index, follow" />
                <html lang="pt-BR" />
            </Helmet>

            <div className='flex flex-col min-h-screen'>
                <NavbarApp />
                <main className='flex-grow'> {/* mt-20 compensa altura do navbar */}
                    <div className='mt-20'>
                        <Hero />
                    </div>
                    <section id="about" aria-label="Sobre nós">
                        <div className='pt-24'>
                            <AboutUs />
                        </div>
                    </section>
                    <section id="portfolio" aria-label="Portfólio">
                        <div className='pt-24'>
                            <Portfolio />
                        </div>
                    </section>
                    <section id="location" aria-label="Localização">
                        <div className=''>
                            <Location />
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
