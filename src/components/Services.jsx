import {
    Warehouse,
    Compass,
    Building2,
    ClipboardList,
    HardHat,
    Ruler,
} from "lucide-react";

const services = [
    {
        icon: Warehouse,
        title: "Metal Building Design & Construction",
        desc: "Pre-engineered and custom metal buildings, drawn to scale and engineered for clear span before steel is ordered.",
    },
    {
        icon: Compass,
        title: "Architectural Design",
        desc: "In-house architectural drawings carry your project from concept to a permit-ready set, no outside firm required.",
    },
    {
        icon: Building2,
        title: "Commercial & Industrial Construction",
        desc: "Warehouses, plazas, and community facilities built to a fixed schedule, with one point of contact throughout.",
    },
    {
        icon: ClipboardList,
        title: "Construction Management",
        desc: "Budget, schedule, and subcontractors managed under one team so surprises get caught on paper, not on site.",
    },
    {
        icon: HardHat,
        title: "General Contracting",
        desc: "Licensed general contracting for renovations, tenant improvements, and ground-up builds across the Houston area.",
    },
    {
        icon: Ruler,
        title: "Facility Surveys",
        desc: "Field measurements and condition assessments that give you an accurate baseline before design work begins.",
    },
];

export default function Services() {
    return (
        <section id="services" className="bg-paper border-t border-charcoal/10">
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
                <div className="max-w-lg mb-14">
                    <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-rust mb-3">
                        What We Build
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-espresso">
                        Comprehensive Construction Solutions
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/15">
                    {services.map(({ icon: Icon, title, desc }) => (
                        <div key={title} className="bg-paper p-8 md:p-10">
                            <Icon
                                size={28}
                                strokeWidth={1.5}
                                className="text-brass mb-5"
                            />
                            <h3 className="font-display text-xl font-semibold text-espresso mb-2">
                                {title}
                            </h3>
                            <p className="text-charcoal/75 leading-relaxed text-sm">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
