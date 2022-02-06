import "./SleepingSeals.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function SleepingTumblrSeals() {
  return (
    <ContentWithAudioContainer
      id="sleeping-seals-container"
      title="Sad Sleeping Seals"
      description="Quotes met slapende zeehonden. Omdat het kan."
      project="sleeping-tumblr-seals"
    >
      <iframe
        id="sleeping-tumblr-seals-iframe"
        title="sleeping-tumblr-seals"
        className="iframe-size lazyload"
        loading="lazy"
        data-src="https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes"
        frameBorder="0"
      ></iframe>
    </ContentWithAudioContainer>
  );
}

export default SleepingTumblrSeals;
