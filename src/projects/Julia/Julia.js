import "./Julia.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

const Julia = () => {
  return (
    <div className="julia-wrapper">
      <ContentWithAudioContainer
        id="julia-container"
        title="Julia"
        project="julia"
      >
        <iframe
          id="julia-iframe"
          title="julia"
          className="iframe-size lazyload"
          data-src="https://rogierderuijter.github.io/julia/"
          loading="lazy"
          frameBorder="0"
        ></iframe>
      </ContentWithAudioContainer>
    </div>
  );
};

export default Julia;
