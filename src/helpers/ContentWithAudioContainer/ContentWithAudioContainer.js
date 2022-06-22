import "./ContentWithAudioContainer.css";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import Waveform from "../Waveform/Waveform";
import { useRef } from "react";

function ContentWithAudioContainer({ id, title, project, children }) {
  const containerRef = useRef(null);
  return (
    <article ref={containerRef} style={{ position: "relative" }}>
      <ProjectTitle title={title} />
      <div id={id} className="content-container-with-description">
        {children}
      </div>
      <Waveform project={project} containerRef={containerRef} />
    </article>
  );
}

export default ContentWithAudioContainer;
