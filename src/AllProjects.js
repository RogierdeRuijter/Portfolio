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
import AllBlogPosts from "./AllBlogPosts";

const AllProjects = () => {
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
  );
};

export default AllProjects;
