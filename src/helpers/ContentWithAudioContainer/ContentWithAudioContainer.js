import "./ContentWithAudioContainer.css";
import ProjectTitle from "../ProjectTitle/ProjectTitle";
import Waveform from "../Waveform/Waveform";
import { useRef } from "react";

function ContentWithAudioContainer({
  id,
  title,
  project,
  children,
  popoverTargetId,
}) {
  const containerRef = useRef(null);
  return (
    <article ref={containerRef} className="content-with-audio-container">
      <ProjectTitle title={title} popoverTargetId={popoverTargetId} />
      <div id={id}>{children}</div>
      <Waveform project={project} containerRef={containerRef} />
    </article>
  );
}

export default ContentWithAudioContainer;
