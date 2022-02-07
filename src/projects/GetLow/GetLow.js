import "./GetLow.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function GetLow() {
  return (
    <ContentWithAudioContainer
      id="get-low-container"
      title="Get low"
      project="get-low"
      description="Elke keer als ik dit zie denk ik: “Het maakt allemaal niks uit. Alles wat ik wil is gewoon mogelijk, zolang ik er maar voor ga.”"
      flexibleContainer
    >
      <iframe
        id="get-low-iframe"
        title="get-low"
        className="iframe-size lazyload"
        data-src="https://rogierderuijter.github.io/get-low/"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </ContentWithAudioContainer>
  );
}

export default GetLow;
