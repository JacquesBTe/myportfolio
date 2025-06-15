import projectData from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        
        {/* Responsive Project Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
