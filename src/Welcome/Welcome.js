import "./Welcome.css";
import film from "../assets/Film.mp4";
import { useEffect, useState } from "react";

function Welcome() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    var vid = document.getElementById("myVideo");
    vid.oncanplay = () => {
      setShowLoader(false);
    };
  }, []);

  return (
    <div id="welcome-container">
      <div id="my-introduction">Rogier de Ruijter</div>
      <div>
        <div className="video-container">
          {showLoader && (
            <div id={"video-loader-container"}>
              <div className={"video-loader"}></div>
            </div>
          )}
          <video autoPlay playsInline muted loop width={600} id={"myVideo"}>
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
