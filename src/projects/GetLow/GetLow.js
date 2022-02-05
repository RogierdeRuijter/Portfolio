import "./GetLow.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import { useLayoutEffect } from "react";

function GetLow() {
  useLayoutEffect(() => {
    function getResizeMessage(event) {
      const getLowIframe = document.getElementById("get-low-iframe");
      if (getLowIframe.contentWindow === event.source) {
        getLowIframe.classList.remove("default-height");
        getLowIframe.height = Number(event.data.height);
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
      id="get-low-container"
      title="Get low"
      project="get-low"
    >
      <iframe
        id="get-low-iframe"
        title="get-low"
        className="iframe-size default-height lazyload"
        data-src="https://rogierderuijter.github.io/get-low/"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </ContentWithAudioContainer>
  );
}

export default GetLow;
