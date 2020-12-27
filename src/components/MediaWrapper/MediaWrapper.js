import React, { useRef, useState } from "react";

import Video from "../Video/Video";
import Images from "../Images/Images";

export default function MediaWrapper(props) {
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef();

  const checkTime = (currentTime) => {
    setCurrentTime(currentTime);
  };

  return (
    <div className="media-wrapper">
      <Video videoRef={videoRef} checkTime={checkTime} />
      <Images videoRef={videoRef} currentTime={currentTime} />
    </div>
  );
}
