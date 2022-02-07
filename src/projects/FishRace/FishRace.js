import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function FishRace() {
  return (
    <ContentWithAudioContainer
      id="fish-race-container"
      description="Toen ik 7 was zag ik op Koninginnedag in het Vondelpark een man naast een bak water met 4 vissen staan. In de bak had hij een vissenrace gemaakt. Mensen konden geld inzetten op hun favoriete vis waarna de man een startshot gaf en de vissen het tegen elkaar opnamen door naar de overkant te zwemmen. Dit heeft zo’n indruk op mij gemaakt."
      title="Fish race"
      project="fish-race"
      flexibleContainer
    >
      <iframe
        id="fish-race-iframe"
        title="fish-race"
        className="iframe-size lazyload"
        data-src="https://itisafishrace.xyz"
        loading="lazy"
        frameBorder="0"
      ></iframe>
    </ContentWithAudioContainer>
  );
}

export default FishRace;
