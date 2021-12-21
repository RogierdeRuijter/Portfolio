import WaveSurfer from "wavesurfer.js";
import fishRaceAudio from "../../assets/comment-fish-race.mp3";
import circleGameAudio from "../../assets/comment-circle-game.mp3";
import montepoeliAudio from "../../assets/comment-montepoeli.mp3";
import getLowAudio from "../../assets/comment-get-low.mp3";
import sleepingSealsAudio from "../../assets/comment-sleeping-seals.mp3";
import juliaAudio from "../../assets/comment-julia.mp3";
import { useEffect, useState, useRef } from "react";
import "./Waveform.css";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const Waveform = ({ project }) => {
  const [wavesurfer, setWavesurfer] = useState();
  const wavesurferRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    function handleWavesurferIntersection(entries) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 0) {
          if (wavesurfer?.isPlaying()) {
            wavesurfer?.pause();
            setPlaying(false);
            // TODO: maybe reset back to zero, but not sure about that
          }
        }
      });
    }
    const observer = new IntersectionObserver(
      handleWavesurferIntersection,
      options
    );
    if (wavesurferRef.current) {
      observer.observe(wavesurferRef.current);
    }

    return () => {
      if (wavesurferRef.current) {
        observer.unobserve(wavesurferRef.current);
      }
    };
  }, [project, wavesurfer]);

  useEffect(() => {
    const waveformContainer = document.getElementById(`waveform-${project}`);
    if (waveformContainer) {
      setWavesurfer(
        WaveSurfer.create({
          container: `#waveform-${project}`,
          barHeight: 5,
          progressColor: "palegreen",
        })
      );
    }
    // TODO: find a way to offload the wavelength dom element.
    //  When the component hot reloads a duplicate of the waveform occurs
  }, [project]);

  useEffect(() => {
    wavesurfer?.on("finish", () => {
      setPlaying(false);
      wavesurfer.seekTo(0);
      gtag("event", "pause", {
        event_category: "audio-messages",
        event_label: project,
        event_value: 100,
      });
    });

    wavesurfer?.on("ready", () => {
      setLoading(false);
    });

    wavesurfer?.on("error", () => {
      setError(true);
    });
  }, [wavesurfer]);

  useEffect(() => {
    let projectAudioFile;
    if (project === "fish-race") {
      projectAudioFile = fishRaceAudio;
    }
    if (project === "circle-game") {
      projectAudioFile = circleGameAudio;
    }
    if (project === "montepoeli") {
      projectAudioFile = montepoeliAudio;
    }
    if (project === "sleeping-tumblr-seals") {
      projectAudioFile = sleepingSealsAudio;
    }
    if (project === "get-low") {
      projectAudioFile = getLowAudio;
    }
    if (project === "julia") {
      projectAudioFile = juliaAudio;
    }
    wavesurfer?.load(projectAudioFile);
  }, [wavesurfer, project]);

  const toggleAudio = () => {
    setPlaying(!playing);
    wavesurfer.playPause();

    // Audio going to be played
    if (!playing) {
      gtag("event", "play", {
        event_category: "audio-messages",
        event_label: project,
      });
    } else {
      gtag("event", "pause", {
        event_category: "audio-messages",
        event_label: project,
        event_value: Math.round(
          (Math.round(wavesurfer.getCurrentTime()) /
            Math.round(wavesurfer.getDuration())) *
            100
        ),
      });
    }
  };

  return (
    <>
      {!error && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "45px auto",
            alignItems: "center",
          }}
        >
          <a onClick={toggleAudio}>
            <button
              disabled={loading}
              style={{
                borderColor: `transparent transparent transparent ${
                  loading ? "lightgray" : "palegreen"
                }`,
              }}
              className={`play-pause-button ${playing ? "pause" : ""}`}
            ></button>
          </a>
          <div
            id={"waveform-" + project}
            ref={wavesurferRef}
            style={{
              width: "100%",
              backgroundColor: loading ? "lightgray" : "unset",
            }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Waveform;
