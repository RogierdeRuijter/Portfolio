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
        <div className="project-introduction">
          <div>Fish race</div>
        </div>
        <div className="empty-spacing">
          <FishRace />
          <div className="project-introduction">
            <div>Circle game</div>
          </div>
        </div>
        <div className="empty-spacing">
          <CircleGame />
          <div className="project-introduction">
            <div>Montepoeli</div>
          </div>
        </div>
        <div className="empty-spacing">
          <Montepoeli />
          <div className="project-introduction">
            <div>Get low</div>
          </div>
        </div>
        <div className="empty-spacing">
          <GetLow />
          <div className="project-introduction">
            <div>Sad Sleeping Seals</div>
          </div>
        </div>
        <div className="empty-spacing">
          <SleepingTumblrSeals />
          <div className="project-introduction">
            <div>Julia</div>
          </div>
        </div>
        <div className="empty-spacing">
          <Julia />
          <div style={{ width: "100%", height: "50vh" }}></div>
        </div>
        <div className="empty-spacing">
          <Info />
        </div>
      </div>
    </div>
  );
};

export default App;
