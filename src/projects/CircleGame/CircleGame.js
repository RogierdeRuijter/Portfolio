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
      >
        <IFrame
          id="circle-game-iframe"
          title="circle-game"
          src="https://rogierderuijter.github.io/circle/"
        />
      </ContentWithAudioContainer>
    </div>
  );
}

export default CircleGame;
