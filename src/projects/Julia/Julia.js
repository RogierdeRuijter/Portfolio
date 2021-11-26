import "./Julia.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";
import Waveform from "../../helpers/Waveform/Waveform";

const Julia = () => {
  return (
    <>
      <div className="project-introduction">
        <div>Julia</div>
      </div>
      <ContentContainer id="julia-container">
        <iframe
          id="julia-iframe"
          title="julia"
          className="iframe-size"
          src="https://rogierderuijter.github.io/julia/"
          frameBorder="0"
        ></iframe>
        <Waveform project="julia" />
      </ContentContainer>
    </>
  );
};

export default Julia;
