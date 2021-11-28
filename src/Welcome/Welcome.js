import "./Welcome.css";
import film from "../assets/Film.mp4";

const Welcome = () => (
  <div id="welcome-container">
    <div id="my-introduction">Rogier de Ruijter</div>
    <div>
      <video autoPlay playsInline muted loop width={600} id={"myVideo"}>
        <source src={film} type="video/mp4" />
      </video>
    </div>
    <div id="scroll-down-element">
      <span id="scroll-down-element-line"></span>
      <span id="scroll-down-element-text">Scroll</span>
    </div>
  </div>
);

export default Welcome;
