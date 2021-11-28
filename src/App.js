import "./App.css";
import CircleGame from "./projects/CircleGame/CircleGame";
import FishRace from "./projects/FishRace/FishRace";
import SleepingTumblrSeals from "./projects/SleepingSeals/SleepingSeals";
import GetLow from "./projects/GetLow/GetLow";
import Montepoeli from "./projects/Montepoeli/Montepoeli";
import Info from "./projects/Info/Info";
import Julia from "./projects/Julia/Julia";
import Welcome from "./Welcome/Welcome";

const App = () => (
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

export default App;
