import { AboutUs } from './components/sections/AboutUs'
import { Hero } from './components/sections/Hero'
import { NavbarApp } from './components/sections/Navbar'

function App(): JSX.Element {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavbarApp />
            <main className="flex-grow">
                <Hero />
                <section id="about" className="min-h-screen">
                    <AboutUs />
                </section>
                <section id="portfolio" className="min-h-screen">
                    {/* Conteúdo da seção O que Criamos */}
                </section>
                <section id="location" className="min-h-screen">
                    {/* Conteúdo da seção Onde Estamos */}
                </section>
            </main>
        </div>
    )
}

export default App
