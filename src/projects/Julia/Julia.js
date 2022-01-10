import "./Julia.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";
import Waveform from "../../helpers/Waveform/Waveform";
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
      <div className="project-introduction">
        <div id="container">
          <div id="title">Julia</div>
          <div>
            Collection of images of my time with you. I am sorry we couldn’t
            figure it out.
          </div>
        </div>
      </div>
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
