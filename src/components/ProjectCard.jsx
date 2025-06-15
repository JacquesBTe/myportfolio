const ProjectCard = ({ title, description, tech, github }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition transform hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-gray-700 mb-2">{description}</p>
      <p className="text-xs italic text-gray-500">{tech}</p>
      <a href={github} className="text-blue-600 text-sm hover:underline" target="_blank">
        GitHub →
      </a>
    </div>
  );
};

export default ProjectCard;

