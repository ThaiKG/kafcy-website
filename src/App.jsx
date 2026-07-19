import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import TrustBar from "./components/TrustBar.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div className="font-body">
            <Nav />
            <Hero />
            <TrustBar />
            <About />
            <Services />
            <Process />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
