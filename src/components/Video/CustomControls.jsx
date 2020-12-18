import React, {useEffect, useState} from 'react'

import PlayPauseButton from "./Controls/PlayPauseButton";
import FullscreenButton from "./Controls/FullscreenButton";
import ProgressBar from "./Controls/ProgressBar"



export default function CustomControls({videoRef, checkTime}) {

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
      <PlayPauseButton
        videoRef={videoRef}
      />
      <ProgressBar 
        videoRef={videoRef}
        checkTime={checkTime}
        seek={seek}
        progressBar={progressBar}
      />
      <FullscreenButton 
        videoRef={videoRef}
      />
      </div>
  )
}
