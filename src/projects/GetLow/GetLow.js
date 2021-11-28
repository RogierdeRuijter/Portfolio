import "./GetLow.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function GetLow() {
  return (
    <ContentWithAudioContainer id="get-low-container" title="Get low">
      <iframe
        id="get-low-iframe"
        title="get-low"
        className="iframe-size"
        src="https://rogierderuijter.github.io/get-low/"
        loading="lazy"
        frameBorder="0"
      ></iframe>
      <Waveform project="get-low" />
    </ContentWithAudioContainer>
  );
}

export default GetLow;
