import "./Julia.css";
import ContentContainer from "../../helpers/ContentContainer/ContentContainer";
import Waveform from "../../helpers/Waveform/Waveform";

const Julia = ({ showJulia }) => {
  return (
    <>
      <ContentContainer id="julia-container">
        {showJulia && (
          <iframe
            id="julia-iframe"
            title="julia"
            className="iframe-size"
            src="https://rogierderuijter.github.io/julia/"
            frameBorder="0"
          ></iframe>
        )}
        <Waveform project="julia" />
      </ContentContainer>
    </>
  );
};

export default Julia;
