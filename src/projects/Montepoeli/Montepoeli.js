import montepoeliVideo from "../../assets/montepoeli_video_462 × 1000.mp4";
import "./Montepoeli.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import Waveform from "../../helpers/Waveform/Waveform";
import { useEffect } from "react";

const isVideoPlaying = (video) =>
  !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  );

function handleIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 0.8) {
      const video = document.getElementById("montepoeli-video");
      video.play();
    }
    if (entry.intersectionRatio === 0) {
      const video = document.getElementById("montepoeli-video");
      if (isVideoPlaying(video)) {
        video.pause();
        video.currentTime = 0;
      }
    }
  });
}

function Montepoeli() {
  useEffect(() => {
    const video = document.getElementById("montepoeli-video");
    video.load();

    video.onended = () => {
      document.getElementById("montepoeli-video").currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const initObserver = () => {
      const boxElement = document.querySelector("#montepoeli-video");

      const options = {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      };

      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(boxElement);
    };
    window.addEventListener("load", initObserver, false);

    return () => {
      window.removeEventListener("load", initObserver);
    };
  }, []);
  return (
    <ContentWithAudioContainer
      id="montepoeli-content-container"
      title={"Montepoeli"}
    >
      <div id="montepoeli-content">
        <video playsInline muted width={462} id="montepoeli-video">
          {/* TODO: add additional video qualites */}
          <source src={montepoeliVideo} type="video/mp4" />
        </video>
      </div>
      <div id="description">
        <Waveform project="montepoeli" />
      </div>
    </ContentWithAudioContainer>
  );
}

export default Montepoeli;
