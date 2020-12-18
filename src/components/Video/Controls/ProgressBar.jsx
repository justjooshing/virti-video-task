import React from 'react'

export default function ProgressBar({videoRef, checkTime, progressBar, updateProgressBar}) {
  
  const seek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const barLength = rect.right - rect.left;
    //not sure what's up with the 0.5, but it always seemed to be off by that much
    const percentageAdjustment =
      ((x + 0.5) * videoRef.current.duration) / barLength;
    updateProgressBar(percentageAdjustment);
    videoRef.current.currentTime = percentageAdjustment;
    checkTime(videoRef.current.currentTime);
  };  

  return (
    <progress
      className="controls"
      id="progress"
      value={progressBar.toString()}
      min="0"
      onClick={seek}
    />
  )
}
