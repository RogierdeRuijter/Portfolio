import "./App.css";
import CircleGame from "./projects/CircleGame/CircleGame";
import FishRace from "./projects/FishRace/FishRace";
import SleepingTumblrSeals from "./projects/SleepingSeals/SleepingSeals";
import GetLow from "./projects/GetLow/GetLow";
import Montepoeli from "./projects/Montepoeli/Montepoeli";
import Info from "./projects/Info/Info";
import Julia from "./projects/Julia/Julia";
import Welcome from "./Welcome/Welcome";
import { useEffect, useState } from "react";

const App = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  useEffect(() => {
    const outsideContactInfoClickHandler = (e) => {
      if (
        document.getElementById("contact-info") &&
        !document.getElementById("contact-info").contains(e.target)
      ) {
        if (showContactInfo) {
          setShowContactInfo(false);
        }
      }
    };

    window.addEventListener("click", outsideContactInfoClickHandler);

    return () => {
      window.removeEventListener("click", outsideContactInfoClickHandler);
    };
  }, [showContactInfo]);

  return (
    <div id="content-container">
      <div id="project-content">
        <div
          id="info-icon"
          onClick={() => setShowContactInfo(!showContactInfo)}
        >
          ℹ️
        </div>
        {showContactInfo && (
          <div id="contact-info">
            📧 <span>rogierderuijter@hotmail.com</span>
          </div>
        )}
        <Welcome />
        <FishRace />
        <CircleGame />
        <Montepoeli />
        <GetLow />
        <SleepingTumblrSeals />
        <Julia />
        <Info />
      </div>
    </div>
  );
};

export default App;
