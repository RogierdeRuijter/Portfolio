import "./ContentWithAudioContainer.css";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import Waveform from "../Waveform/Waveform";

function ContentWithAudioContainer({ id, title, project, children }) {
  return (
    <>
      <ProjectTitle title={title} />
      <Waveform project={project} />
      <div id={id} className="content-container-with-description">
        {children}
      </div>
    </>
  );
}

export default ContentWithAudioContainer;
