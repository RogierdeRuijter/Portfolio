import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import { useLayoutEffect } from "react";

function FishRace() {
  useLayoutEffect(() => {
    function getResizeMessage(event) {
      var fishRaceIframe = document.getElementById("fish-race-iframe");

      if (fishRaceIframe.contentWindow === event.source) {
        fishRaceIframe.classList.remove("default-height");
        fishRaceIframe.height = Number(event.data.height);

        return 1;
      }
    }

    window.addEventListener("message", getResizeMessage, false);

    return () => {
      window.removeEventListener("message", getResizeMessage);
    };
  }, []);

  return (
    <ContentWithAudioContainer
      id="fish-race-container"
      title="Fish race"
      project="fish-race"
    >
      <iframe
        id="fish-race-iframe"
        title="fish-race"
        className="iframe-size default-height lazyload"
        data-src="https://itisafishrace.xyz"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </ContentWithAudioContainer>
  );
}

export default FishRace;
