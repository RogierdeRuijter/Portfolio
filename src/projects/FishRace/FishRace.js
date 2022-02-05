import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function FishRace() {
  return (
    <ContentWithAudioContainer
      id="fish-race-container"
      title="Fish race"
      project="fish-race"
    >
      <iframe
        id="fish-race-iframe"
        title="fish-race"
        className="iframe-size default-height lazyload"
        data-src="https://itisafishrace.xyz"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </ContentWithAudioContainer>
  );
}

export default FishRace;
