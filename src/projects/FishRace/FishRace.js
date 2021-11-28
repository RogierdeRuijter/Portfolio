import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function FishRace() {
  return (
    <ContentWithAudioContainer id="fish-race-container" title={"Fish race"}>
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
  );
}

export default FishRace;
