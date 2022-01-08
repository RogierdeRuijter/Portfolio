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
        <section className="sentence-about-me">
          I was made in Amsterdam.
        </section>
        <FishRace />
        <section className="sentence-about-me">
          I wish there were better tools for writing code on a mobile phone.
        </section>
        <CircleGame />
        <section className="sentence-about-me">
          I believe the focus should never be on what framework is used to build
          a website.
        </section>
        <Montepoeli />
        <section className="sentence-about-me">
          The environment should be my number 1 priority.
        </section>
        <GetLow />
        <section className="sentence-about-me">
          Don’t get it right. Get it true.
        </section>
        <SleepingTumblrSeals />
        <section className="sentence-about-me"></section>
        <Julia />
        <section className="sentence-about-me"></section>
        <Acknowledgements />
        <Info />
      </div>
    </div>
  );
};

export default App;
