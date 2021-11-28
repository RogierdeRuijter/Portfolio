import "./App.css";
import CircleGame from "./projects/CircleGame/CircleGame";
import FishRace from "./projects/FishRace/FishRace";
import SleepingTumblrSeals from "./projects/SleepingSeals/SleepingSeals";
import GetLow from "./projects/GetLow/GetLow";
import Montepoeli from "./projects/Montepoeli/Montepoeli";
import Info from "./projects/Info/Info";
import Julia from "./projects/Julia/Julia";
import Welcome from "./Welcome/Welcome";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const handleResize = () => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="content-container">
      <div id="project-content">
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
