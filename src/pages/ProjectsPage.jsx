import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";
import { getProjectImages } from "../data/projectImages.js";

export default function ProjectsPage() {
  return (
    <div className="font-body">
      <Nav />
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-lg mb-14">
            <p className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-rust mb-3">
              Our Work
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-espresso">
              Every project, start to finish.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map(({ slug, icon, category, title }) => (
              <ProjectCard
                key={slug}
                icon={icon}
                category={category}
                title={title}
                images={getProjectImages(slug)}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
