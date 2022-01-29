import "./CircleGame.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function CircleGame() {
  return (
    <ContentWithAudioContainer
      id="circle-game-container"
      description="Het spel wat ik in den treuren speel met jan en alleman. Als je kijkt en je je vinger niet snel genoeg in de cirkel stopt dan verlies je een hartje. De eerste die geen hartjes meer heeft verliest het spel."
      title="Circle game"
      project="circle-game"
    >
      <iframe
        id="circle-game-iframe"
        title="circle-game"
        className="iframe-size lazyload"
        data-src="https://rogierderuijter.github.io/circle/"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </ContentWithAudioContainer>
  );
}

export default CircleGame;
