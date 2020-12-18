import React from 'react'

export default function ProgressBar({videoRef, checkTime, seek, progressBar}) {
    
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
