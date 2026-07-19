import { Phone } from "lucide-react";

function BuildingElevation() {
  return (
    <svg
      viewBox="0 0 420 340"
      className="w-full max-w-md mx-auto text-espresso"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {/* shallow metal-building roof */}
      <path d="M40 150 L210 120 L380 150" strokeLinejoin="round" />
      {/* body */}
      <rect x="60" y="150" width="300" height="150" />
      {/* ribbon window band */}
      <rect x="90" y="165" width="240" height="18" />
      <path
        d="M130 165 V183 M170 165 V183 M210 165 V183 M250 165 V183 M290 165 V183"
        strokeWidth="1"
      />
      {/* roll-up door */}
      <rect x="150" y="190" width="90" height="110" />
      <path
        d="M150 208 H240 M150 226 H240 M150 244 H240 M150 262 H240 M150 280 H240"
        strokeWidth="1"
      />
      {/* personnel door */}
      <rect x="270" y="230" width="35" height="70" />

      {/* width dimension line */}
      <g className="text-rust" stroke="currentColor">
        <path d="M60 320 H360" strokeWidth="1" />
        <path d="M60 314 V326 M360 314 V326" strokeWidth="1" />
      </g>
      <text
        x="210"
        y="336"
        textAnchor="middle"
        className="fill-rust font-mono"
        fontSize="12"
        stroke="none"
      >
        60'-0&quot;
      </text>

      {/* height dimension line */}
      <g className="text-rust" stroke="currentColor">
        <path d="M395 120 V300" strokeWidth="1" />
        <path d="M389 120 H401 M389 300 H401" strokeWidth="1" />
      </g>
      <text
        x="420"
        y="210"
        textAnchor="middle"
        className="fill-rust font-mono"
        fontSize="12"
        stroke="none"
        transform="rotate(90 420 210)"
      >
        22'-0&quot;
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-16 md:pt-20 md:pb-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-rust mb-5">
            Design-Build Contractor — Katy, TX — Greater Houston
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.05] font-semibold text-espresso text-balance">
            Built from a plan,
            <br />
            not a guess.
          </h1>
          <p className="mt-6 text-base md:text-lg text-charcoal/80 max-w-md leading-relaxed">
            KaFCy DESIGN&amp;BUILD draws every facility, addition, and metal
            building to scale before a single beam goes up — so the estimate
            you sign is the price you pay.
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
              className="inline-flex items-center justify-center gap-2 border border-espresso text-espresso font-medium px-6 py-3.5 hover:bg-espresso hover:text-paper transition-colors"
            >
              Request a Written Estimate
            </a>
          </div>
        </div>

        <div className="reg-marks text-rust/30 p-6 hidden md:block">
          <BuildingElevation />
        </div>
      </div>
    </section>
  );
}
