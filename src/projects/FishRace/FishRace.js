import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function FishRace() {
  return (
    <ContentWithAudioContainer
      id="fish-race-container"
      description="Toen ik 7 was zag ik op konningendag in het Vondelpark een man met een bak water waar 4 vissen in zwommen. Hij had een vissen race gemaakt. Als iedereen geld had ingezet op zijn favoriete vis gaf de man het start shot en gingen de vissen tegen elkaar racen door naar de overkant te zwemmen. Ik ben dit nooit meer vergeten."
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
