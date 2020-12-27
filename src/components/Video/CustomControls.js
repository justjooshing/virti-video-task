import React from "react";

import PlayPauseButton from "./Controls/PlayPauseButton";
import FullscreenButton from "./Controls/FullscreenButton";
import ProgressBar from "./Controls/ProgressBar";

export default function CustomControls({ videoRef, checkTime }) {
  return (
    <div className="controls-wrapper">
      <PlayPauseButton videoRef={videoRef} />
      <ProgressBar videoRef={videoRef} checkTime={checkTime} />
      <FullscreenButton videoRef={videoRef} />
    </div>
  );
}
