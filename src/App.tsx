import { AboutUs } from './components/sections/AboutUs'
import { Hero } from './components/sections/Hero'
import { Location } from './components/sections/Location'
import { NavbarApp } from './components/sections/Navbar'
import { Portfolio } from './components/sections/Portfolio'

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
                    <Portfolio />
                </section>
                <section id="location" className="min-h-screen">
                    <Location />
                </section>
            </main>
        </div>
    )
}

export default App
