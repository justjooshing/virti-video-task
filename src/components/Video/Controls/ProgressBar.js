import React, { useEffect, useState } from "react";

export default function ProgressBar({ videoRef, checkTime }) {
  const [progressBar, updateProgressBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      checkTime(videoRef.current.currentTime);

      updateProgressBar(
        videoRef.current.currentTime / videoRef.current.duration
      );
    }, 10);
    return () => {
      clearInterval(interval);
    };
  });

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
  );
}
