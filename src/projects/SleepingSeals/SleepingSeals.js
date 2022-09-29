import "./SleepingSeals.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import IFrame from "../../helpers/IFrame/IFrame";

function SleepingTumblrSeals() {
  return (
    <div className="sleeping-tumblr-wrapper">
      <ContentWithAudioContainer
        id="sleeping-seals-container"
        title="Sad Sleeping Seals"
        description="Quotes met slapende zeehonden. Omdat het kan. Click voor meer!"
        project="sleeping-tumblr-seals"
      >
        <IFrame
          id="sleeping-tumblr-seals-iframe"
          title="sleeping-tumblr-seals"
          src="https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes"
        />
      </ContentWithAudioContainer>
    </div>
  );
}

export default SleepingTumblrSeals;
