import montepoeliVideo from "../../assets/montepoeli_video_462 × 1000.mp4";
import "./Montepoeli.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function Montepoeli() {
  return (
    <ContentWithAudioContainer
      id="montepoeli-content-container"
      title={"Montepoeli"}
    >
      <div id="montepoeli-content">
        <video playsInline muted controls width={462} id="montepoeli-video">
          {/* TODO: add additional video qualites */}
          <source src={montepoeliVideo} type="video/mp4" />
        </video>
      </div>
      <div id="description">
        <Waveform project="montepoeli" />
      </div>
    </ContentWithAudioContainer>
  );
}

export default Montepoeli;
