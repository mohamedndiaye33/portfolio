import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div  className="min-h-screen md:p-20 bg-cover bg-center w-full py-20">
      <h2 className="text-3xl py-16 font-bold mb-6 text-center">Mes Projets <span className="block w-20 h-1 bg-blue-500 mx-auto mt-2 rounded"></span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => <ProjectCard key={project.id} {...project} />)}
      </div>

    </div>
  );
}

export default Projects;