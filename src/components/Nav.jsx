import { Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-charcoal/15">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        <a href="#top" className="flex flex-col leading-none shrink-0">
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-espresso">
            KaFCy DESIGN&amp;BUILD
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-steel mt-1">
            Design &amp; Build Contractors
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-charcoal/80 hover:text-rust transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <a
            href="tel:+18322994461"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-charcoal hover:text-rust transition-colors"
          >
            <Phone size={16} strokeWidth={2} />
            (832) 299-4461
          </a>
          <a
            href="#contact"
            className="bg-espresso text-paper text-sm font-medium px-4 py-2.5 md:px-5 hover:bg-rust transition-colors"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
