import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-espresso border-t border-paper/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 text-center">
        <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-brass mb-3">
          Client Reviews
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper mb-6">
          Reviews Coming Soon
        </h2>
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={22}
              strokeWidth={1.5}
              className="text-paper/30"
            />
          ))}
        </div>
        <p className="text-paper/65 max-w-md mx-auto leading-relaxed">
          We're just getting started building our public track record.
          Check back soon — or reach out and be one of our first reviews.
        </p>
      </div>
    </section>
  );
}
