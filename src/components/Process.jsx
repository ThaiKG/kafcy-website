const steps = [
  {
    n: "01",
    title: "Facility Survey & Consult",
    desc: "We walk the site with you, take field measurements, and talk through the scope.",
  },
  {
    n: "02",
    title: "Architectural Design & Fixed Estimate",
    desc: "Our in-house architects draw the project to scale, with a line-item estimate before you sign anything.",
  },
  {
    n: "03",
    title: "Permitting & Construction Management",
    desc: "One team manages permitting, subcontractors, and the schedule from groundbreak to close-out.",
  },
  {
    n: "04",
    title: "Final Walkthrough & Warranty",
    desc: "We walk the finished work with you and hand over a written one-year warranty.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-espresso">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-lg mb-14">
          <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-brass mb-3">
            How A Project Runs
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper">
            The same four steps, every time.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <span className="font-mono text-sm text-brass">{s.n}</span>
              <h3 className="font-display text-lg font-semibold text-paper mt-2 mb-2">
                {s.title}
              </h3>
              <p className="text-paper/65 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block absolute top-2 right-[-1.5rem] w-6 h-px bg-paper/25"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
