import "./ContentWithAudioContainer.css";
import ProjectTitle from "../ProjectTitle/ProjectTitle";

function ContentWithAudioContainer({ id, title, children }) {
  return (
    <>
      <ProjectTitle title={title} />
      <div id={id} className="content-container-with-description">
        {children}
      </div>
    </>
  );
}

export default ContentWithAudioContainer;
