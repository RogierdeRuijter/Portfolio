import "./SleepingSeals.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import IFrame from "../../helpers/IFrame/IFrame";

function SleepingTumblrSeals() {
  return (
    <div className="sleeping-tumblr-wrapper">
      <ContentWithAudioContainer
        id="sleeping-seals-container"
        title="Sad Sleeping Seals"
        project="sleeping-tumblr-seals"
        popoverTargetId="sleeping-tumblr-seals-explanation"
      >
        <IFrame
          id="sleeping-tumblr-seals-iframe"
          title="sleeping-tumblr-seals"
          src="https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes"
        />
      </ContentWithAudioContainer>
      <div popover="auto" id="sleeping-tumblr-seals-explanation">
        <div className="popover-wrapper">
          <p>Quotes met slapende zeehonden. Omdat het kan. Click voor meer!</p>
          <button
            popovertarget="sleeping-tumblr-seals-explanation"
            popovertargetaction="hide"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default SleepingTumblrSeals;
