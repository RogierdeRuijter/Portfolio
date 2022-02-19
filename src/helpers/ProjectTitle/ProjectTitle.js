import "./ProjectTitle.css";

function ProjectTitle({ title }) {
  return (
    <header>
      <h2 className="project-title">{title}</h2>
    </header>
  );
}

export default ProjectTitle;
