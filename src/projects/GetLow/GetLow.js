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
        popoverTargetId="get-low-explanation"
      >
        <IFrame
          id="get-low-iframe"
          title="get-low"
          src="https://rogierderuijter.github.io/get-low/"
        />
      </ContentWithAudioContainer>
      <div popover="auto" id="get-low-explanation">
        <div className="popover-wrapper">
          <p>
            Elke keer als ik dit zie denk ik: “Het maakt allemaal niks uit.
            Alles wat ik wil is gewoon mogelijk, zolang ik er maar voor ga.”
          </p>
          <button
            popovertarget="get-low-explanation"
            popovertargetaction="hide"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetLow;
