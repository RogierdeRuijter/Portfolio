import "./GetLow.css";
import Loader from "../../helpers/Loader/Loader";
import DelayedLoadingFade from "../../helpers/DelayedLoadingFade/DelayedLoadingFade";
import ContentWithDescriptionContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function GetLow({ showGetLow }) {
  return (
    <ContentWithDescriptionContainer
      id="get-low-container"
      loading={!showGetLow}
    >
      <div className="iframe-size">
        <DelayedLoadingFade removeLoader={showGetLow}>
          <Loader />
        </DelayedLoadingFade>
      </div>
      {showGetLow && (
        <iframe
          id="get-low-iframe"
          title="get-low"
          className="iframe-size"
          src="https://rogierderuijter.github.io/get-low/"
          loading="lazy"
          frameBorder="0"
          style={{ borderRadius: "10px" }}
        ></iframe>
      )}
      <Waveform project="get-low" />
      {/* <Description>
        Dedication to the performance that makes me believe I can do anything. ©
        Kanye West - All day [Brit Awards]
      </Description> */}
    </ContentWithDescriptionContainer>
  );
}

export default GetLow;
