import "./CircleGame.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function CircleGame() {
  return (
    <ContentWithAudioContainer id="circle-game-container" title={"Circle game"}>
      <iframe
        id="circle-game-iframe"
        title="circle-game"
        className="iframe-size lazyload"
        data-src="https://rogierderuijter.github.io/circle/"
        loading="lazy"
        frameBorder="0"
      ></iframe>
      <Waveform project="circle-game" />
    </ContentWithAudioContainer>
  );
}

export default CircleGame;
