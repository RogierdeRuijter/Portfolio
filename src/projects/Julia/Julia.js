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
        popoverTargetId="julia-explanation"
      >
        <IFrame
          id="julia-iframe"
          title="julia"
          src="https://rogierderuijter.github.io/julia/"
        />
      </ContentWithAudioContainer>
      <div popover="auto" id="julia-explanation">
        <div className="popover-wrapper">
          <p>
            Foto's die mij altijd doen denken aan jou. Julia is je tweede naam.
          </p>
          <button popovertarget="julia-explanation" popovertargetaction="hide">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Julia;
