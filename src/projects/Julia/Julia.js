import "./Julia.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import ProjectTitle from "../../helpers/ProjectTitle/ProjectTitle";
import { useLayoutEffect, useState, useEffect } from "react";

const Julia = () => {
  const [iframeUrl, setIframeUrl] = useState();

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
    <>
      <ProjectTitle title={"Julia"} />
      <ContentContainer id="julia-container">
        <iframe
          id="julia-iframe"
          title="julia"
          className="iframe-size"
          src={iframeUrl}
          frameBorder="0"
        ></iframe>
        <Waveform project="julia" />
      </ContentContainer>
    </>
  );
};

export default Julia;
