import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function FishRace() {
  return (
    <ContentWithAudioContainer
      id="fish-race-container"
      title={"Fish race"}
      description={
        "Toen ik 7 was zag ik dit spel op konningendag. 4 vissen die tegen elkaar racen. Ik ben het nooit meer vergeten. Nu kan ik het elke dag spelen"
      }
    >
      <iframe
        id="fish-race-iframe"
        title="fish-race"
        className="iframe-size lazyload"
        data-src="https://itisafishrace.xyz"
        loading="lazy"
        frameBorder="0"
      ></iframe>
      <Waveform project="fish-race" />
    </ContentWithAudioContainer>
  );
}

export default FishRace;
