import "./Julia.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import ProjectTitle from "../../helpers/ProjectTitle/ProjectTitle";
import { useRef } from "react";

const Julia = () => {
  const containerRef = useRef(null);

  return (
    <div className="julia-wrapper" ref={containerRef}>
      <ProjectTitle title="Julia" />
      <ContentContainer id="julia-container">
        <Waveform project="julia" containerRef={containerRef} />
        <iframe
          id="julia-iframe"
          title="julia"
          className="iframe-size default-height lazyload"
          loading="lazy"
          data-src="https://rogierderuijter.github.io/julia/"
          frameBorder="0"
        ></iframe>
      </ContentContainer>
    </div>
  );
};

export default Julia;
