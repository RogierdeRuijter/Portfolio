import "./CircleGame.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import { useState, useEffect } from "react";

function CircleGame() {
  const [iframeUrl, setIframeUrl] = useState();

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      setIframeUrl("https://rogierderuijter.github.io/circle/");
    }, 600);

    return () => clearTimeout(timerFunc);
  }, []);

  return (
    <ContentWithAudioContainer id="circle-game-container" title={"Circle game"}>
      <iframe
        id="circle-game-iframe"
        title="circle-game"
        className="iframe-size"
        src={iframeUrl}
        loading="lazy"
        frameBorder="0"
      ></iframe>
      <Waveform project="circle-game" />
    </ContentWithAudioContainer>
  );
}

export default CircleGame;
