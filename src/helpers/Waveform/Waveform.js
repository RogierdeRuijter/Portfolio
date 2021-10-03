import WaveSurfer from "wavesurfer.js";
import fishRaceAudio from "../../assets/comment-fish-race.mp3";
import circleGameAudio from "../../assets/comment-circle-game.mp3";
import montepoeliAudio from "../../assets/comment-montepoeli.mp3";
import getLowAudio from "../../assets/comment-get-low.mp3";
import sleepingSealsAudio from "../../assets/comment-sleeping-seals.mp3";
import juliaAudio from "../../assets/comment-julia.mp3";
import { useEffect, useState } from "react";
import "./Waveform.css";

const Waveform = ({ project }) => {
  const [wavesurfer, setWavesurfer] = useState();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setWavesurfer(
      WaveSurfer.create({
        container: `#waveform-${project}`,
        barHeight: 5,
        progressColor: "palegreen",
      })
    );
    // TODO: find a way to offload the wavelength dom element.
    //  When the component hot reloads a duplicate of the waveform occurs
  }, []);

  useEffect(() => {
    wavesurfer?.on("finish", () => {
      setPlaying(false);
      wavesurfer.seekTo(0);
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
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <a style={{ width: "5%", cursor: "pointer" }} onClick={toggleAudio}>
        <button
          className={`play-pause-button ${playing ? "pause" : ""}`}
        ></button>
        {/* {} */}
      </a>
      <div
        id={"waveform-" + project}
        style={{ width: "93%", marginLeft: "2%" }}
      ></div>
    </div>
  );
};

export default Waveform;
