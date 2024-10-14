import "./AllProjects.css";
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
import { appendMetaTag, metaTagExists } from "./helpers/meta-tags";

const AllProjects = () => {

  if (!metaTagExists('og:title')) {
    appendMetaTag('og:title', 'My portfolio of personal projects');
    appendMetaTag('og:description', 'Personal projects of a frontend developer done by me together with friends.');
    appendMetaTag('og:image', 'https://rogierderuijter.com/foto-van-intro.png');
    appendMetaTag('og:image:width', '2880');
    appendMetaTag('og:image:height', '1636');
  }

  useLayoutEffect(() => {
    function getResizeMessage(event) {
      const juliaIframe = document.getElementById("julia-iframe");
      const iframes = [juliaIframe];
      iframes.forEach((iframe) => {
        if (iframe.contentWindow === event.source) {
          iframe.classList.remove("default-height");
          const height = Number(event.data.height);

          document
            .getElementsByTagName("body")[0]
            .style.setProperty("--julia-iframe-height", `${height}px`);
          iframe.height = height;
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

    const listener = window.addEventListener("blur", () => {
      const popoverApiSupported =
        window.HTMLElement.prototype.hasOwnProperty("popover");
      if (popoverApiSupported) {
        document.querySelectorAll("[popover]").forEach((popover) => {
          popover?.hidePopover();
        });
      }
      window.removeEventListener("blur", listener);
    });
  }, []);

  return (
    <>
      <div id="welcome-wrapper">
        <div id="welcome-content-container">
          <header id="welcome-container">
            <h1 id="my-introduction">Rogier</h1>
            <div id="welcome-video-container">
              <video autoPlay playsInline muted loop width="600" preload="auto">
                <source src="Film.mp4" type="video/mp4" />
              </video>
            </div>
            <div id="scroll-down-element">
              <span className="scroll-down-element-line"></span>
              <span id="scroll-down-element-text">Scroll</span>
            </div>
          </header>
        </div>
      </div>
      <div id="content-container">
        <section id="project-content">
          <DropItem />
          <FishRace />
          <DropItem />
          <CircleGame />
          <DropItem />
          <Montepoeli />
          <DropItem />
          <GetLow />
          <DropItem />
          <SleepingTumblrSeals />
          <DropItem />
          <Julia />
          <Acknowledgements />
          <Info />
        </section>
      </div>
    </>
  );
};

export default AllProjects;
