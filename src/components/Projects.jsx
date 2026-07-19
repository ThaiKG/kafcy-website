import { Landmark, Factory, Boxes, Store } from "lucide-react";
import ProjectCard from "./ProjectCard.jsx";

// Drop image files into src/assets/projects/<slug>/ — every file found is
// picked up automatically, ordered by filename (e.g. 01.jpg, 02.jpg, ...).
const imageModules = import.meta.glob(
  "../assets/projects/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const imagesBySlug = {};
for (const path in imageModules) {
  const [, slug] = path.match(/projects\/([^/]+)\//);
  (imagesBySlug[slug] ??= []).push({ path, url: imageModules[path] });
}
for (const slug in imagesBySlug) {
  imagesBySlug[slug].sort((a, b) => a.path.localeCompare(b.path));
}

const projects = [
  {
    slug: "thien-hau-temple",
    icon: Landmark,
    category: "Community",
    title: "Thien Hau Temple",
  },
  {
    slug: "g-style-building",
    icon: Factory,
    category: "Industrial",
    title: "G-Style Building",
  },
  {
    slug: "nguyen-office-warehouse",
    icon: Boxes,
    category: "Combination",
    title: "Nguyen Office & Warehouse",
  },
  {
    slug: "hon-tam-plaza",
    icon: Store,
    category: "Commercial",
    title: "Hon Tam Plaza",
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-lg mb-14">
          <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-rust mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-espresso">
            Community, industrial, and commercial builds.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map(({ slug, icon, category, title }) => (
            <ProjectCard
              key={slug}
              icon={icon}
              category={category}
              title={title}
              images={(imagesBySlug[slug] || []).map((i) => i.url)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
