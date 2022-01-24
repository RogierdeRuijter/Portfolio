import "./Julia.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import ProjectTitle from "../../helpers/ProjectTitle/ProjectTitle";
import { useLayoutEffect, useState, useEffect, useRef } from "react";

const Julia = () => {
  const [iframeUrl, setIframeUrl] = useState();
  const containerRef = useRef(null);

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      setIframeUrl("https://rogierderuijter.github.io/julia/");
    }, 1500);

    return () => clearTimeout(timerFunc);
  }, []);

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
    <div ref={containerRef}>
      <ProjectTitle title={"Julia"} />
      <ContentContainer id="julia-container">
        <Waveform project="julia" containerRef={containerRef} />
        <iframe
          id="julia-iframe"
          title="julia"
          className="iframe-size"
          src={iframeUrl}
          frameBorder="0"
        ></iframe>
        <p>
          Collection of images of my time with you. I am sorry we couldn’t
          figure it out.
        </p>
      </ContentContainer>
    </div>
  );
};

export default Julia;
