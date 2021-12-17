import "./App.css";
import CircleGame from "./projects/CircleGame/CircleGame";
import FishRace from "./projects/FishRace/FishRace";
import SleepingTumblrSeals from "./projects/SleepingSeals/SleepingSeals";
import GetLow from "./projects/GetLow/GetLow";
import Montepoeli from "./projects/Montepoeli/Montepoeli";
import Acknowledgements from "./Acknowledgements/Acknowledgements";
import Julia from "./projects/Julia/Julia";
import { useEffect, useState } from "react";
import Info from "./Info/Info";

const App = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

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
            <a
              className="info-element"
              href="mailto:rogierderuijter@hotmail.com"
              label="rogierderuijter.com"
            >
              📧 Contact me
            </a>
          </div>
        )}
        <FishRace />
        <CircleGame />
        <Montepoeli />
        <GetLow />
        <SleepingTumblrSeals />
        <Julia />
        <Acknowledgements />
        <Info />
      </div>
    </div>
  );
};

export default App;
