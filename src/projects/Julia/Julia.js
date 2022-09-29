import "./Julia.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import IFrame from "../../helpers/IFrame/IFrame";

const Julia = () => {
  return (
    <div className="julia-wrapper">
      <ContentWithAudioContainer
        id="julia-container"
        title="Julia"
        project="julia"
      >
        <IFrame
          id="julia-iframe"
          title="julia"
          src="https://rogierderuijter.github.io/julia/"
        />
      </ContentWithAudioContainer>
    </div>
  );
};

export default Julia;
