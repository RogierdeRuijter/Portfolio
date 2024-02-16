import "./CircleGame.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import IFrame from "../../helpers/IFrame/IFrame";

function CircleGame() {
  return (
    <div className="circle-game-wrapper">
      <ContentWithAudioContainer
        id="circle-game-container"
        title="Circle game"
        project="circle-game"
        popoverTargetId="circle-game-explanation"
      >
        <IFrame
          id="circle-game-iframe"
          title="circle-game"
          src="https://rogierderuijter.github.io/circle/"
        />
      </ContentWithAudioContainer>

      <div popover="auto" id="circle-game-explanation">
        <div className="popover-wrapper">
          <p>
            De circle game; het spel wat ik het liefst met Jan en alleman tot in
            den treuren speel. Ik heb dit spel gebouwd zodat jij online mee kunt
            genieten. Snel! Klik in de circle die de hand maakt anders verlies
            je een hartje 💔
          </p>
          <button
            popovertarget="circle-game-explanation"
            popovertargetaction="hide"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default CircleGame;
