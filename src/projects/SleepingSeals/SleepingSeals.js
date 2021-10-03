import "./SleepingSeals.css";
import ContentWithAudioContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function SleepingTumblrSeals({ showSleepingTumblrSeals }) {
  return (
    <ContentWithAudioContainer id="sleeping-seals-container">
      {showSleepingTumblrSeals && (
        <>
          <iframe
            id="sleeping-tumblr-seals-iframe"
            title="sleeping-tumblr-seals"
            className="iframe-size"
            src="https://sleepingsealswithcelebrityquotes.com"
            frameBorder="0"
          ></iframe>
          <Waveform project="sleeping-tumblr-seals" />
        </>
      )}
    </ContentWithAudioContainer>
  );
}

export default SleepingTumblrSeals;
