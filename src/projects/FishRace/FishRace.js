import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import IFrame from "../../helpers/IFrame/IFrame";

function FishRace() {
  return (
    <div className="fish-race-wrapper">
      <ContentWithAudioContainer
        id="fish-race-container"
        title="Fish race"
        project="fish-race"
      >
        <IFrame
          id="fish-race-iframe"
          title="fish-race"
          src="https://rogierderuijter.github.io/fish-race/"
        />
      </ContentWithAudioContainer>
    </div>
  );
}

export default FishRace;
