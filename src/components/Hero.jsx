import { Phone } from "lucide-react";

// Drop a photo into src/assets/hero/ (.jpg/.jpeg/.png/.webp) to use it as the
// hero background — no code changes needed. Falls back to a plain espresso
// background until one is added.
const heroImageModules = import.meta.glob(
  "../assets/hero/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);
const heroImagePath = Object.keys(heroImageModules).sort()[0];
const heroImage = heroImagePath ? heroImageModules[heroImagePath] : null;

export default function Hero() {
  return (
    <section id="top" className="relative bg-espresso overflow-hidden">
      {heroImage && (
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-espresso/70" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-20 md:pt-28 md:pb-32">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-brass mb-5">
            Design-Build Contractor — Katy, TX — Greater Houston
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.05] font-semibold text-paper text-balance">
            Transforming Visions into Reality
          </h1>
          <p className="mt-6 text-base md:text-lg text-paper/80 max-w-md leading-relaxed">
            Expert designing and building contractor providing
            quality construction services.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+18322994461"
              className="inline-flex items-center justify-center gap-2 bg-brass text-espresso font-semibold px-6 py-3.5 hover:bg-brass/90 transition-colors"
            >
              <Phone size={18} strokeWidth={2.25} />
              Call (832) 299-4461
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-paper text-paper font-medium px-6 py-3.5 hover:bg-paper hover:text-espresso transition-colors"
            >
              Request a Written Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
