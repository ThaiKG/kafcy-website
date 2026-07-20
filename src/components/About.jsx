export default function About() {
  return (
    <section id="about" className="bg-sand border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-lg mb-8">
          <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-rust mb-3">
            Our Story
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-espresso">
            From Humble Beginnings
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
          <p className="text-charcoal/80 text-lg leading-relaxed">
            Founded in a Conroe lakehouse by a group of friends — senior
            architects, entrepreneurs, and IT professionals from Katy,
            Fulshear, and Cypress — KaFCy DESIGN&amp;BUILD was born out of a
            passion for designing, building, and a desire to provide
            top-quality services to clients in need.
          </p>
          <p className="text-charcoal/80 text-lg leading-relaxed">
            KaFCy is a full-service design and construction company serving
            the greater Houston area. We provide a full range of general
            contracting services, including facility surveys, architecture,
            and commercial and industrial construction and management. With
            design, architectural, engineering, and construction all under
            one roof, we're committed to fulfilling your vision from first
            sketch to final walkthrough.
          </p>
        </div>
      </div>
    </section>
  );
}
