import "./Welcome.css";
import film from "../assets/Film.mp4";
import { useState } from "react";

const Welcome = () => {
  const [useVideoTag, setUseVideoTag] = useState(false);

  return (
    <div id="welcome-container">
      <div id="my-introduction">Rogier de Ruijter</div>
      <div>
        {!useVideoTag && (
          <img
            src={film}
            className="myVideo myVideoImage"
            onError={() => setUseVideoTag(true)}
          />
        )}
        {useVideoTag && (
          <video
            className="myVideo"
            autoPlay
            playsInline
            muted
            loop
            width={600}
          >
            <source src={film} type="video/mp4" />
          </video>
        )}
      </div>
      <div id="scroll-down-element">
        <span id="scroll-down-element-line"></span>
      </div>
    </div>
  );
};

export default Welcome;

// {useVideoTag && (
//   <video
//     playsInline
//     muted
//     controls
//     width={462}
//     preload="auto"
//     className="montepoeli-video"
//   >
//     {/* TODO: add additional video qualites */}
//     <source src={montepoeliVideo} type="video/mp4" />
//   </video>
// )}
