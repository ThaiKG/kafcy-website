import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: this form is UI-only. Wire it to a real endpoint before
    // going live — see the README for a couple of easy options.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-paper border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-rust mb-3">
              Get A Quote
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-espresso mb-6">
              Tell us about the project.
            </h2>
            <p className="text-charcoal/75 leading-relaxed mb-8">
              We reply within one business day with next steps for a site
              survey. Serving Katy, Fulshear, Cypress &amp; the greater
              Houston area. Prefer to talk it through first? Call the number
              below.
            </p>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-brass shrink-0" />
                <a href="tel:+18322994461" className="hover:text-rust">
                  (832) 299-4461
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-brass shrink-0" />
                <a
                  href="mailto:paul.nguyen@kafcy.com"
                  className="hover:text-rust"
                >
                  paul.nguyen@kafcy.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={17} className="text-brass shrink-0" />
                5602 Bent Arbor Lane, Katy, TX 77450
              </li>
              <li className="flex items-center gap-3">
                <Clock size={17} className="text-brass shrink-0" />
                Mon–Fri, 9:00 AM – 5:00 PM
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 reg-marks text-rust/25">
            <div className="border border-charcoal/15 p-7 md:p-10 bg-white/40">
              {submitted ? (
                <div className="py-10 text-center">
                  <p className="font-display text-2xl text-espresso mb-2">
                    Request received.
                  </p>
                  <p className="text-charcoal/70 text-sm">
                    We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-1">
                    <span className="text-charcoal/80">Name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      className="border border-charcoal/25 bg-paper px-3 py-2.5 text-charcoal focus:border-rust outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-1">
                    <span className="text-charcoal/80">Phone</span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="border border-charcoal/25 bg-paper px-3 py-2.5 text-charcoal focus:border-rust outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="text-charcoal/80">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="border border-charcoal/25 bg-paper px-3 py-2.5 text-charcoal focus:border-rust outline-none"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="text-charcoal/80">Project type</span>
                    <select
                      name="projectType"
                      defaultValue="Metal Building Design & Construction"
                      className="border border-charcoal/25 bg-paper px-3 py-2.5 text-charcoal focus:border-rust outline-none"
                    >
                      <option>Metal Building Design &amp; Construction</option>
                      <option>Commercial / Industrial Construction</option>
                      <option>Architectural Design</option>
                      <option>Facility Survey</option>
                      <option>Construction Management</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="text-charcoal/80">Project details</span>
                    <textarea
                      name="message"
                      rows={4}
                      className="border border-charcoal/25 bg-paper px-3 py-2.5 text-charcoal focus:border-rust outline-none resize-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="sm:col-span-2 bg-espresso text-paper font-medium px-6 py-3.5 hover:bg-rust transition-colors"
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
