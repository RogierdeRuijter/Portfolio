import "./GetLow.css";
import Loader from "../../helpers/Loader/Loader";
import DelayedLoadingFade from "../../helpers/DelayedLoadingFade/DelayedLoadingFade";
import ContentWithDepContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function GetLow({ showGetLow }) {
  return (
    <ContentWithDepContainer
      id="get-low-container"
      loading={!showGetLow}
    >
      <div className="iframe-size">
        <DelayedLoadingFade removeLoader={showGetLow}>
          <Loader />
        </DelayedLoadingFade>
      </div>
      {showGetLow && (
        <>
          <iframe
            id="get-low-iframe"
            title="get-low"
            className="iframe-size"
            src="https://rogierderuijter.github.io/get-low/"
            loading="lazy"
            frameBorder="0"
            style={{ borderRadius: "10px" }}
          ></iframe>
          <Waveform project="get-low" />
        </>
      )}
    </ContentWithDepContainer>
  );
}

export default GetLow;
