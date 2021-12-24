import "./SleepingSeals.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function SleepingTumblrSeals() {
  return (
    <ContentWithAudioContainer
      id="sleeping-seals-container"
      title="Sad Sleeping Seals"
    >
      <iframe
        id="sleeping-tumblr-seals-iframe"
        title="sleeping-tumblr-seals"
        className="iframe-size lazyload"
        loading="lazy"
        data-src="https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes"
        frameBorder="0"
      ></iframe>
      <Waveform project="sleeping-tumblr-seals" />
    </ContentWithAudioContainer>
  );
}

export default SleepingTumblrSeals;
