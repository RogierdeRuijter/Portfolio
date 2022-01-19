import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function FishRace() {
  return (
    <ContentWithAudioContainer
      id="fish-race-container"
      description="Toen ik 7 was zag ik dit spel op konningendag. 4 vissen die tegen elkaar racen. Ik ben het nooit meer vergeten. Nu kan ik het elke dag spelen"
      title="Fish race"
      project="fish-race"
    >
      <iframe
        id="fish-race-iframe"
        title="fish-race"
        className="iframe-size lazyload"
        data-src="https://itisafishrace.xyz"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </ContentWithAudioContainer>
  );
}

export default FishRace;
