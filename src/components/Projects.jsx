import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";
import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className="py-20 align-element" id="projects">
        <SectionTitle text="web creations" />
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-zinc-500 text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] items-center"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="web creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
