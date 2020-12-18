import React, {useEffect, useState} from 'react'

import playPause from "../../helperFunctions/playPause";

const playPauseImage = "./images/playPauseImage.png";
const fullscreenImage = "./images/fullscreenImage.png";

export default function CustomControls({videoRef, checkTime}) {

  const [currentlyPlaying, setPlayOrPause] = useState(true);
  const [progressBar, updateProgressBar] = useState(0);

  const seek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const barLength = rect.right-rect.left;
    //not sure what's up with the 0.5, but it always seemed to be off by that much
    const percentageAdjustment = (x + 0.5) * videoRef.current.duration / barLength;
    updateProgressBar(percentageAdjustment);
    videoRef.current.currentTime = percentageAdjustment;
    checkTime(videoRef.current.currentTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkTime(videoRef.current.currentTime);
      if (videoRef.current.currentTime / videoRef.current.duration === 100) {
        videoRef.current.currentTime = 0;
      }
      updateProgressBar(
        videoRef.current.currentTime / videoRef.current.duration
      );
    }, 10);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="controls-wrapper">
        <button
          className="controls"
          id="playpause"
          type="button"
          onClick={() => playPause(videoRef, currentlyPlaying, setPlayOrPause)}
        >
          <img
            className="controlImages"
            src={process.env.PUBLIC_URL + playPauseImage}
            alt="Play/Pause button"
          />
        </button>
        <progress
          className="controls"
          id="progress"
          value={progressBar.toString()}
          min="0"
          onClick={seek}
        />
        <button
          className="controls"
          id="fs"
          type="button"
          onClick={() => videoRef.current.requestFullscreen()}
        >
          <img
            className="controlImages"
            src={process.env.PUBLIC_URL + fullscreenImage}
            alt="Fullscreen button"
          />
        </button>
      </div>
  )
}
