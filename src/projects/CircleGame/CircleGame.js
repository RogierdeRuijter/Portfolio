import "./CircleGame.css";
import Loader from "../../helpers/Loader/Loader";
import DelayedLoadingFade from "../../helpers/DelayedLoadingFade/DelayedLoadingFade";
import ContentWithAudioContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function CircleGame() {
  return (
    <>
      <div className="project-introduction">
        <div>Circle game</div>
      </div>
      <ContentWithAudioContainer id="circle-game-container">
        <iframe
          id="circle-game-iframe"
          title="circle-game"
          className="iframe-size"
          src="https://circle-ga.me"
          loading="lazy"
          frameBorder="0"
          style={{ borderRadius: "10px" }}
        ></iframe>
        <Waveform project="circle-game" />
      </ContentWithAudioContainer>
    </>
  );
}

export default CircleGame;
