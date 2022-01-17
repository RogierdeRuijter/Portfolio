import "./ContentWithAudioContainer.css";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import Waveform from "../Waveform/Waveform";
import { useRef } from "react";

function ContentWithAudioContainer({ id, title, project, children }) {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef}>
      <ProjectTitle title={title} />
      <Waveform project={project} containerRef={containerRef} />
      <div id={id} className="content-container-with-description">
        {children}
      </div>
    </div>
  );
}

export default ContentWithAudioContainer;
