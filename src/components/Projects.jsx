import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";
import { getProjectImages } from "../data/projectImages.js";

const featuredProjects = projects.filter((p) => p.featured);

export default function Projects() {
  return (
    <section id="work" className="bg-paper border-t border-charcoal/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-lg mb-14">
          <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-rust mb-3">
            Selected Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-espresso">
            Community, industrial, and commercial builds.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {featuredProjects.map(({ slug, icon, category, title }) => (
            <ProjectCard
              key={slug}
              icon={icon}
              category={category}
              title={title}
              images={getProjectImages(slug)}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/projects/"
            className="inline-flex items-center justify-center border border-charcoal/25 text-charcoal font-medium px-6 py-3.5 hover:border-rust hover:text-rust transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
