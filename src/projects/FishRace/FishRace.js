import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import { useState, useEffect } from "react";

function FishRace() {
  const [iframeUrl, setIframeUrl] = useState();

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      setIframeUrl("https://itisafishrace.xyz");
    }, 300);

    return () => clearTimeout(timerFunc);
  }, []);

  return (
    <ContentWithAudioContainer id="fish-race-container" title={"Fish race"}>
      <iframe
        id="fish-race-iframe"
        title="fish-race"
        className="iframe-size"
        src={iframeUrl}
        loading="lazy"
        frameBorder="0"
      ></iframe>
      <Waveform project="fish-race" />
    </ContentWithAudioContainer>
  );
}

export default FishRace;
