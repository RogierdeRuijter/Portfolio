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
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
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
