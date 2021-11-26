import montepoeliHome from "../../assets/montepoeli_home.png";
import montepoeliAddGame from "../../assets/montepoeli_add_game.png";
import montepoeliAddGameFilled from "../../assets/montepoeli_add_game_filled.png";
import "./Montepoeli.css";
import ContentWithAudioContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function Montepoeli() {
  return (
    <ContentWithAudioContainer
      id="montepoeli-content-container"
      title={"Montepoeli"}
      noFixedHeightContent={true}
    >
      <div id="montepoeli-content">
        <img
          className="iphone rounded-corners spacer"
          src={montepoeliHome}
          alt="Home screen"
        ></img>
        <img
          className="iphone rounded-corners spacer"
          src={montepoeliAddGame}
          alt="Add game"
        ></img>
        <img
          className="iphone rounded-corners"
          src={montepoeliAddGameFilled}
          alt="Filled in game"
        ></img>
      </div>
      <div id="description">
        <Waveform project="montepoeli" />
      </div>
    </ContentWithAudioContainer>
  );
}

export default Montepoeli;
