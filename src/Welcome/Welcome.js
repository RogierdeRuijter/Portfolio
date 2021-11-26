import "./Welcome.css";
import film from "../assets/Film.mp4";

function Welcome() {
  return (
    <div id="welcome-container">
      <div id="my-introduction">Rogier de Ruijter</div>
      <div>
        <div id="video-of-me">
          <video autoplay muted loop width={600} playsinline>
            <source src={film} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="scroll-down-element">
        <span id="scroll-down-element-line"></span>
        <span id="scroll-down-element-text">Scroll</span>
      </div>
    </div>
  );
}

export default Welcome;
