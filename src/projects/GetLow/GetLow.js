import "./GetLow.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import { useEffect, useState } from "react";

function GetLow() {
  const [iframeUrl, setIframeUrl] = useState();

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      setIframeUrl("https://rogierderuijter.github.io/get-low/");
    }, 900);

    return () => clearTimeout(timerFunc);
  }, []);

  return (
    <ContentWithAudioContainer id="get-low-container" title="Get low">
      <iframe
        id="get-low-iframe"
        title="get-low"
        className="iframe-size"
        src={iframeUrl}
        loading="lazy"
        frameBorder="0"
      ></iframe>
      <Waveform project="get-low" />
    </ContentWithAudioContainer>
  );
}

export default GetLow;
