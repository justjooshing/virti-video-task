import React, {useEffect, useState} from 'react'

import PlayPauseButton from "./Controls/PlayPauseButton";
import FullscreenButton from "./Controls/FullscreenButton";
import ProgressBar from "./Controls/ProgressBar"



export default function CustomControls({videoRef, checkTime}) {

  const [progressBar, updateProgressBar] = useState(0);

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
      <PlayPauseButton
        videoRef={videoRef}
      />
      <ProgressBar 
        videoRef={videoRef}
        checkTime={checkTime}
        progressBar={progressBar}
        updateProgressBar={updateProgressBar}
      />
      <FullscreenButton 
        videoRef={videoRef}
      />
      </div>
  )
}
