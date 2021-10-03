import "./CircleGame.css";
import Loader from "../../helpers/Loader/Loader";
import DelayedLoadingFade from "../../helpers/DelayedLoadingFade/DelayedLoadingFade";
import ContentWithDepContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function CircleGame({ showCircleGame }) {
  return (
    <ContentWithDepContainer
      id="circle-game-container"
      loading={!showCircleGame}
    >
      <div className="iframe-size">
        <DelayedLoadingFade removeLoader={showCircleGame}>
          <Loader />
        </DelayedLoadingFade>
      </div>
      {showCircleGame && (
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
          {/* TODO: make spacing constent between the bottom line of the project
          and the waveform  */}
          <Waveform project="circle-game" />
        </>
      )}
    </ContentWithDepContainer>
  );
}

export default CircleGame;
