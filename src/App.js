import "./App.css";
import CircleGame from "./projects/CircleGame/CircleGame";
import FishRace from "./projects/FishRace/FishRace";
import SleepingTumblrSeals from "./projects/SleepingSeals/SleepingSeals";
import GetLow from "./projects/GetLow/GetLow";
import Montepoeli from "./projects/Montepoeli/Montepoeli";
import Acknowledgements from "./Acknowledgements/Acknowledgements";
import Julia from "./projects/Julia/Julia";
import Info from "./Info/Info";
import { useEffect } from "react";

const App = () => {
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
