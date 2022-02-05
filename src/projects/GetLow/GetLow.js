import "./GetLow.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function GetLow() {
  return (
    <ContentWithAudioContainer
      id="get-low-container"
      title="Get low"
      project="get-low"
      flexibleContainer
    >
      <iframe
        id="get-low-iframe"
        title="get-low"
        className="iframe-size default-height"
        src="https://rogierderuijter.github.io/get-low/"
        frameBorder="0"
      ></iframe>
    </ContentWithAudioContainer>
  );
}

export default GetLow;
