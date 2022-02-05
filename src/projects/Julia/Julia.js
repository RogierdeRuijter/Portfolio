import "./Julia.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import ProjectTitle from "../../helpers/ProjectTitle/ProjectTitle";
import { useRef } from "react";

const Julia = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <ProjectTitle title="Julia" />
      <ContentContainer id="julia-container">
        <Waveform project="julia" containerRef={containerRef} />
        <iframe
          id="julia-iframe"
          title="julia"
          className="iframe-size default-height lazyload"
          data-src="https://rogierderuijter.github.io/julia/"
          frameBorder="0"
        ></iframe>
        <div style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}>
          <p>
            Foto's die mij altijd doen denk aan jou. Julia is je tweede naam.
          </p>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Julia;
