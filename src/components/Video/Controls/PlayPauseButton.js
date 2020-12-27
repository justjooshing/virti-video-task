import React, { useState } from "react";

import playPause from "../../../helperFunctions/playPause";

const playPauseImage = "./images/playPauseImage.png";

export default function PlayPauseButton({ videoRef }) {
  const [currentlyPlaying, setPlayOrPause] = useState(true);

  return (
    <button
      className="controls"
      type="button"
      onClick={() => playPause(videoRef, currentlyPlaying, setPlayOrPause)}
    >
      <img
        className="controlImages"
        src={process.env.PUBLIC_URL + playPauseImage}
        alt="Play/Pause button"
      />
    </button>
  );
}
