import "./FishRace.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";

function FishRace() {
  return (
    <ContentWithAudioContainer
      id="fish-race-container"
      description="Toen ik 7 was zag ik op Koninginnedag in het Vondelpark een man naast een bak water met 4 vissen staan. In de bak had hij een vissenrace gemaakt. Dit heeft zo’n indruk op mij gemaakt dat ik deze herinnering nooit meer vergeten ben."
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
