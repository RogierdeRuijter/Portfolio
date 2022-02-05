import "./Julia.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import ProjectTitle from "../../helpers/ProjectTitle/ProjectTitle";
import { useLayoutEffect, useRef } from "react";

const Julia = () => {
  const containerRef = useRef(null);

  // TODO: refactor this into hook
  useLayoutEffect(() => {
    function getResizeMessage(event) {
      var juliaIframe = document.getElementById("julia-iframe");
      if (juliaIframe.contentWindow === event.source) {
        juliaIframe.classList.remove("default-height");
        juliaIframe.height = Number(event.data.height);

        return 1;
      }
    }

    window.addEventListener("message", getResizeMessage, false);

    return () => {
      window.removeEventListener("message", getResizeMessage);
    };
  }, []);
  return (
    <div ref={containerRef}>
      <ProjectTitle title={"Julia"} />
      <ContentContainer id="julia-container">
        <Waveform project="julia" containerRef={containerRef} />
        <iframe
          id="julia-iframe"
          title="julia"
          className="iframe-size default-height lazyload"
          src="https://rogierderuijter.github.io/julia/"
          frameBorder="0"
        ></iframe>
      </ContentContainer>
    </div>
  );
};

export default Julia;
