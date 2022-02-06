import "./App.css";
import CircleGame from "./projects/CircleGame/CircleGame";
import FishRace from "./projects/FishRace/FishRace";
import SleepingTumblrSeals from "./projects/SleepingSeals/SleepingSeals";
import GetLow from "./projects/GetLow/GetLow";
import Montepoeli from "./projects/Montepoeli/Montepoeli";
import Acknowledgements from "./Acknowledgements/Acknowledgements";
import Julia from "./projects/Julia/Julia";
import Info from "./Info/Info";
import { useEffect, useLayoutEffect } from "react";
import DropItem from "./helpers/DropItem/DropItem";

const App = () => {
  useLayoutEffect(() => {
    function getResizeMessage(event) {
      // const getLowIframe = document.getElementById("get-low-iframe");
      // const fishRaceIframe = document.getElementById("fish-race-iframe");
      const juliaIframe = document.getElementById("julia-iframe");
      // fishRaceIframe,
      // getLowIframe
      //
      const iframes = [juliaIframe];
      iframes.forEach((iframe) => {
        if (iframe.contentWindow === event.source) {
          iframe.classList.remove("default-height");
          iframe.height = Number(event.data.height);
        }
      });
    }

    window.addEventListener("message", getResizeMessage, false);

    return () => {
      window.removeEventListener("message", getResizeMessage);
    };
  }, []);

  useEffect(() => {
    if ("loading" in HTMLIFrameElement.prototype) {
      const iframes = document.querySelectorAll('iframe[loading="lazy"]');

      iframes.forEach((iframe) => {
        iframe.src = iframe.dataset.src;
      });
    } else {
      // Dynamically import the LazySizes library
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div id="content-container">
      <div id="project-content">
        <div className="project-spacer without-spacing-scroll-down"></div>
        <FishRace />
        <div className="project-spacer">
          <DropItem />
        </div>
        <CircleGame />
        <div className="project-spacer">
          <DropItem />
        </div>
        <Montepoeli />
        <div className="project-spacer">
          <DropItem />
        </div>
        <GetLow />
        <div className="project-spacer">
          <DropItem />
        </div>
        <SleepingTumblrSeals />
        <div className="project-spacer">
          <DropItem />
        </div>
        <Julia />
        <Acknowledgements />
        <Info />
      </div>
    </div>
  );
};

export default App;
