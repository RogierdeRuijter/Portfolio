import "./FishRace.css";
import ContentWithDepContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function FishRace({ showFishRace }) {
  return (
    <ContentWithDepContainer id="fish-race-container">
      {showFishRace && (
        <>
          <iframe
            id="fish-race-iframe"
            title="fish-race"
            className="iframe-size"
            src="https://itisafishrace.xyz"
            loading="lazy"
            frameBorder="0"
          ></iframe>
          <Waveform project="fish-race" />
        </>
      )}
    </ContentWithDepContainer>
  );
}

export default FishRace;
