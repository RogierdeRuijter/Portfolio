import "./Welcome.css";
// TODO: add optimized image
import film from "../assets/Film.mp4";

const Welcome = () => (
  <div id="welcome-container">
    <div id="my-introduction">Rogier de Ruijter</div>
    <div>
      <video className="myVideo" autoPlay playsInline muted loop width={600}>
        <source src={film} type="video/mp4" />
      </video>
    </div>
    <div id="scroll-down-element">
      <span id="scroll-down-element-line"></span>
    </div>
  </div>
);

export default Welcome;
