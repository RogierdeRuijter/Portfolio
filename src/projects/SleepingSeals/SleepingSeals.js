import "./SleepingSeals.css";
import Description from "../../helpers/Description/Description";
import ContentWithDescriptionContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function SleepingTumblrSeals({ showSleepingTumblrSeals }) {
  return (
    <ContentWithDescriptionContainer id="sleeping-seals-container">
      {showSleepingTumblrSeals && (
        <>
          <iframe
            id="sleeping-tumblr-seals-iframe"
            title="sleeping-tumblr-seals"
            className="iframe-size"
            src="https://sleepingsealswithcelebrityquotes.com"
            frameBorder="0"
          ></iframe>
          {/* TODO: make spacing constent between the bottom line of the project and the waveform */}
          <Waveform project="sleeping-tumblr-seals" />
        </>
      )}
    </ContentWithDescriptionContainer>
  );
}

export default SleepingTumblrSeals;
