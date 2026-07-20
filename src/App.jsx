import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Reviews from "./components/Reviews.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <div className="font-body">
            <Nav />
            <Hero />
            <About />
            <Services />
            <Reviews />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
