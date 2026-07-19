import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Shortest signed distance from `index` to `i` around a circle of `total`
// slides, so wraparound (last -> first, first -> last) slides the same
// direction as the arrow that was clicked instead of reversing.
function slideOffset(i, index, total) {
  let delta = i - index;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;
  return delta;
}

export default function ProjectCard({ icon: Icon, category, title, images }) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  // The image that was active just before this render, so we can tell which
  // two images (the one leaving, the one arriving) should actually animate.
  const prevIndexRef = useRef(index);
  useEffect(() => {
    prevIndexRef.current = index;
  }, [index]);

  function showPrev(e) {
    e.stopPropagation();
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function showNext(e) {
    e.stopPropagation();
    setIndex((i) => (i + 1) % images.length);
  }

  function showIndex(i, e) {
    e.stopPropagation();
    setIndex(i);
  }

  return (
    <div className="reg-marks text-rust/25 border border-charcoal/15 bg-paper">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {hasImages ? (
          images.map((src, i) => {
            const delta = slideOffset(i, index, images.length);
            // Only the outgoing and incoming image should visibly move.
            // Every other image just snaps to its new off-screen position —
            // it's never seen either way, but animating it too would let it
            // sweep across the visible frame en route.
            const animate = i === index || i === prevIndexRef.current;
            return (
              <img
                key={src}
                src={src}
                alt={`${title} — photo ${i + 1} of ${images.length}`}
                aria-hidden={i !== index}
                className={`absolute inset-0 h-full w-full object-cover ${
                  animate ? "transition-transform duration-500 ease-in-out" : ""
                }`}
                style={{ transform: `translateX(${delta * 100}%)` }}
              />
            );
          })
        ) : (
          <div className="img-placeholder flex h-full w-full items-center justify-center text-charcoal/15">
            <Icon size={40} strokeWidth={1.25} className="text-brass/80" />
          </div>
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={showPrev}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center bg-espresso/70 text-paper hover:bg-espresso transition-colors"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center bg-espresso/70 text-paper hover:bg-espresso transition-colors"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
            <span className="absolute bottom-2 right-2 bg-espresso/70 text-paper font-mono text-[11px] px-2 py-0.5">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="flex gap-2 overflow-x-auto p-3 border-t border-charcoal/15">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={(e) => showIndex(i, e)}
              aria-label={`Go to photo ${i + 1} of ${images.length}`}
              aria-current={i === index}
              className={`h-14 w-14 shrink-0 overflow-hidden border-2 transition-colors ${
                i === index
                  ? "border-brass"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      <div className="p-7 md:p-8">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-rust mb-2">
          {category}
        </p>
        <h3 className="font-display text-xl font-semibold text-espresso">
          {title}
        </h3>
      </div>
    </div>
  );
}
