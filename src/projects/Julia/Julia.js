import "./Julia.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import { useLayoutEffect } from "react";

const Julia = () => {
  useLayoutEffect(() => {
    function getResizeMessage(event) {
      var juliaIframe = document.getElementById("julia-iframe");
      if (juliaIframe.contentWindow === event.source) {
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
    <>
      <div className="project-introduction">
        <div>Julia</div>
      </div>
      <ContentContainer id="julia-container">
        <iframe
          id="julia-iframe"
          title="julia"
          className="iframe-size"
          src="https://rogierderuijter.github.io/julia/"
          frameBorder="0"
        ></iframe>
        <Waveform project="julia" />
      </ContentContainer>
    </>
  );
};

export default Julia;
