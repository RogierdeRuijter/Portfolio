import "./GetLow.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import IFrame from "../../helpers/IFrame/IFrame";

function GetLow() {
  return (
    <div className="get-low-wrapper">
      <ContentWithAudioContainer
        id="get-low-container"
        title="Get low"
        project="get-low"
      >
        <IFrame
          id="get-low-iframe"
          title="get-low"
          src="https://rogierderuijter.github.io/get-low/"
        />
      </ContentWithAudioContainer>
    </div>
  );
}

export default GetLow;
