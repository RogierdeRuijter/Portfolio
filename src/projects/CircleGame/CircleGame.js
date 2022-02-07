import "./CircleGame.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function CircleGame() {
  return (
    <ContentWithAudioContainer
      id="circle-game-container"
      description="De circle game; het spel wat ik het liefst met Jan en alleman tot in den treuren speel. Ik heb dit spel gebouwd zodat jij online mee kunt genieten. Snel! Klik in de circle die de hand maakt anders verlies je een hartje 💔"
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
