import "./SleepingSeals.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import { useState, useEffect } from "react";

function SleepingTumblrSeals() {
  const [iframeUrl, setIframeUrl] = useState();

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      setIframeUrl(
        "https://rogierderuijter.github.io/sleeping-seals-with-celebirty-qoutes"
      );
    }, 1200);

    return () => clearTimeout(timerFunc);
  }, []);

  return (
    <ContentWithAudioContainer
      id="sleeping-seals-container"
      title="Sad Sleeping Seals"
    >
      <iframe
        id="sleeping-tumblr-seals-iframe"
        title="sleeping-tumblr-seals"
        className="iframe-size"
        loading="lazy"
        src={iframeUrl}
        frameBorder="0"
      ></iframe>
      <Waveform project="sleeping-tumblr-seals" />
    </ContentWithAudioContainer>
  );
}

export default SleepingTumblrSeals;
