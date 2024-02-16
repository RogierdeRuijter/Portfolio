import montepoeliVideo from "../../assets/montepoeli_video_462 × 1000.mp4";
import montepoeliFirstFrame from "../../assets/first_frame_montepoeli.jpeg";
import "./Montepoeli.css";
import ContentWithAudioContainer from "../../helpers/ContentWithAudioContainer/ContentWithAudioContainer";
import { useEffect, useState } from "react";

let intervalPointer;

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
      entry.target
        .play()
        .then()
        .catch((error) => {
          if (error.name === "NotAllowedError") {
            entry.target.setAttribute("controls", "");
          }
        });
    }

    if (entry.intersectionRatio === 0) {
      if (isVideoPlaying(entry.target)) {
        entry.target.pause();
        entry.target.currentTime = 0;
        clearInterval(intervalPointer);
      }
    }
  });
}

function Montepoeli() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const video = document.getElementById("montepoeli-video");
    // The video needs a reload to show the picture on safari for IOS
    video.load();

    video.onended = () => {
      clearInterval(intervalPointer);
      document.getElementById("montepoeli-video").currentTime = 0;
    };
    const progress = document.getElementById("progress");

    function progressHandler() {
      intervalPointer = setInterval(() => {
        if (video.currentTime) {
          progress.value = (video.currentTime / video.duration) * 100;
        }
      }, 500);
    }
    video.addEventListener("play", progressHandler);
  }, []);

  useEffect(() => {
    // If this implementation causes issues it can be refactored to use the useRef approved seen in the
    // Waveform component. For now this is good enough
    const videoElement = document.querySelector("#montepoeli-video");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(videoElement);
  }, []);

  return (
    <ContentWithAudioContainer
      id="montepoeli-content-container"
      title="Montepoeli"
      project="montepoeli"
      popoverTargetId="montepoeli-explanation"
    >
      <div id="montepoeli-content">
        {loading && (
          <div style={{ position: "absolute", color: "#fff" }}>Loading...</div>
        )}
        <figure id="montepoli-figure">
          <video
            playsInline
            muted
            id="montepoeli-video"
            preload="none"
            onCanPlay={() => {
              setLoading(false);
            }}
            style={{ backgroundImage: `url(${montepoeliFirstFrame})` }}
          >
            {/* TODO: add additional video qualites */}
            <source src={montepoeliVideo} type="video/mp4" />
          </video>
          <figcaption>
            <progress id="progress" max="100" value="0">
              Progress
            </progress>
          </figcaption>
        </figure>
      </div>
      <div popover="auto" id="montepoeli-explanation">
        <div className="popover-wrapper">
          <p>
            Dit is de app die ik voor mijn schaakclub gemaakt heb. De schaakclub
            is ontstaan in het prachtige Montepulciano in Italië. In de app
            kunnen de gespeelde schaakwedstrijden en clubregels opgeslagen
            worden.
          </p>
          <button
            popovertarget="montepoeli-explanation"
            popovertargetaction="hide"
          >
            X
          </button>
        </div>
      </div>
    </ContentWithAudioContainer>
  );
}

export default Montepoeli;
