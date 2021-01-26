// import montepoeliLogo from '../../assets/montepoeli_logo.png';
import montepoeliHome from '../../assets/montepoeli_home.png';
import montepoeliAddGame from '../../assets/montepoeli_add_game.png';
import montepoeliAddGameFilled from '../../assets/montepoeli_add_game_filled.png';
import './Montepoeli.css';
import SiteWithDescriptionContainer from '../../Helpers/SiteWithDescriptionContainer/SiteWithDescriptionContainer';

function Montepoeli() {
  return (
    <SiteWithDescriptionContainer id="montepoeli-content-container">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img className="iphone rounded-corners spacer" src={montepoeliHome}></img>
        <img className="iphone rounded-corners spacer" src={montepoeliAddGame}></img>
        <img className="iphone rounded-corners" src={montepoeliAddGameFilled}></img>
      </div>

      <div id="description">
        A website build for the chess club. 
        The chess club was founded in Montepulciano, Italy. 
        The website is an attempt to keep the spirit from this vacation alive.
        It is mainly used as a PWA and is my breeding ground for exploring non functional features.
        Semantic release, you will always be my favourite piece of software ever. Even if no one else thinks so.
      </div>
    </SiteWithDescriptionContainer>
  );
}

export default Montepoeli;
