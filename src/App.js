import "./App.css";
import CircleGame from "./projects/CircleGame/CircleGame";
import FishRace from "./projects/FishRace/FishRace";
import SleepingTumblrSeals from "./projects/SleepingSeals/SleepingSeals";
import GetLow from "./projects/GetLow/GetLow";
import Montepoeli from "./projects/Montepoeli/Montepoeli";
import Info from "./projects/Info/Info";
import Julia from "./projects/Julia/Julia";
import Welcome from "./Welcome/Welcome";

const App = () => {
  return (
    <div id="content-container">
      <div id="project-content">
        <Welcome></Welcome>
        <div className="empty-spacing">
          <FishRace />
        </div>
        <div className="empty-spacing">
          <CircleGame />
        </div>
        <div className="empty-spacing">
          <Montepoeli />
        </div>
        <div className="empty-spacing">
          <GetLow />
        </div>
        <div className="empty-spacing">
          <SleepingTumblrSeals />
        </div>
        <div className="empty-spacing">
          <Julia />
        </div>
        <div className="empty-spacing">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default App;
