import "./CircleGame.css";
import Loader from "../../helpers/Loader/Loader";
import DelayedLoadingFade from "../../helpers/DelayedLoadingFade/DelayedLoadingFade";
import ContentWithAudioContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function CircleGame({ showCircleGame }) {
  return (
    <ContentWithAudioContainer
      id="circle-game-container"
      loading={!showCircleGame}
    >
      <div className="iframe-size">
        <DelayedLoadingFade removeLoader={showCircleGame}>
          <Loader />
        </DelayedLoadingFade>
      </div>
      <>
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
      </>
    </ContentWithAudioContainer>
  );
}

export default CircleGame;
