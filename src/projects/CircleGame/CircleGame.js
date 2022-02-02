import "./CircleGame.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

// Als je kijkt en je je vinger niet snel genoeg in de cirkel stopt dan verlies je een hartje. De eerste die geen hartjes meer heeft verliest het spel.

function CircleGame() {
  return (
    <ContentWithAudioContainer
      id="circle-game-container"
      description="De circle game het spel wat ik in den treuren speel met jan en alleman. Om de mensen op het internet ook te laten genieten van dit spel heb ik het gebouwd. Snel! Click in de circel die de hand maakt anders verlies je een hartje 💔"
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
