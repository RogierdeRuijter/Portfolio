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
        popoverTargetId="fish-race-explanation"
      >
        <IFrame
          id="fish-race-iframe"
          title="fish-race"
          src="https://rogierderuijter.github.io/fish-race/"
        />
      </ContentWithAudioContainer>
      <div popover="auto" id="fish-race-explanation">
        Toen ik 7 was zag ik op Koninginnedag in het Vondelpark een man naast
        een bak water met 4 vissen staan. In de bak had hij een vissenrace
        gemaakt. Dit heeft zo’n indruk op mij gemaakt dat ik het nooit meer
        vergeten ben.
        <button
          popovertarget="fish-race-explanation"
          popovertargetaction="hide"
        >
          sluit
        </button>
      </div>
    </div>
  );
}

export default FishRace;
