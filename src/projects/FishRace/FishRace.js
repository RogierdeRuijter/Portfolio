import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function FishRace() {
  return (
    <>
      <div className="project-introduction">
        <div>Fish race</div>
      </div>
      <ContentWithAudioContainer id="fish-race-container">
        <iframe
          id="fish-race-iframe"
          title="fish-race"
          className="iframe-size"
          src="https://itisafishrace.xyz"
          loading="lazy"
          frameBorder="0"
        ></iframe>
        <Waveform project="fish-race" />
      </ContentWithAudioContainer>
    </>
  );
}

export default FishRace;
