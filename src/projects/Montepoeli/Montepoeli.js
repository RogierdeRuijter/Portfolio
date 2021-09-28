import montepoeliHome from "../../assets/montepoeli_home.png";
import montepoeliAddGame from "../../assets/montepoeli_add_game.png";
import montepoeliAddGameFilled from "../../assets/montepoeli_add_game_filled.png";
import "./Montepoeli.css";
import ContentWithDescriptionContainer from "../../helpers/ContentWithDescriptionContainer/ContentWithDescriptionContainer";
import Waveform from "../../helpers/Waveform/Waveform";

function Montepoeli() {
  return (
    <ContentWithDescriptionContainer
      id="montepoeli-content-container"
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
      {/* <Description>
        A website build for the chess club. The chess club was founded in
        Montepulciano, Italy. The website is an attempt to keep the spirit from
        this vacation alive. It is mainly used as a PWA and is my breeding
        ground for exploring non functional features. Semantic release, you will
        always be my favourite piece of software ever. Even if no one else
        thinks so.
      </Description> */}
    </ContentWithDescriptionContainer>
  );
}

export default Montepoeli;
