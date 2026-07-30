import {
    Warehouse,
    Compass,
    Building,
    Building2,
    ClipboardList,
    HardHat,
    Factory,
    Wrench,
    Hammer,
} from "lucide-react";

const services = [
    {
        icon: Warehouse,
        title: "Pre-Engineered Metal Buildings (PEMBs)",
        desc: "Clear-span steel buildings, drawn to scale and engineered before steel is ordered.",
    },
    {
        icon: Building,
        title: "Built For Every Industry",
        desc: "Warehouses, retail centers, auto shops, salons, temples, churches, residences, barndominiums, and chicken farms — if it needs a metal building, we've built it.",
    },
    {
        icon: HardHat,
        title: "Turnkey Construction Solutions",
        desc: "From concept to completion, including foundation, framing, roofing, and finishing.",
    },
    {
        icon: Compass,
        title: "Custom Design & Engineering",
        desc: "Tailored structural solutions to meet unique project requirements.",
    },
    {
        icon: Factory,
        title: "Fabrication & Supply",
        desc: "High-quality steel components manufactured to precision standards.",
    },
    {
        icon: Hammer,
        title: "Commercial Remodeling & Renovation",
        desc: "Interior build-outs, office remodels, restaurant renovations, retail space updates, and medical buildings.",
    },
    {
        icon: Building2,
        title: "Design & Build",
        desc: "Integrated design and construction solutions that streamline project delivery and improve coordination.",
    },
    {
        icon: Wrench,
        title: "Maintenance & Expansion Services",
        desc: "Retrofit, modification, and expansion of existing metal buildings.",
    },
    {
        icon: ClipboardList,
        title: "Building Permit Service",
        desc: "Handling blueprints, paperwork, codes, and coordination for small commercial buildings across all 50 U.S. states.",
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
