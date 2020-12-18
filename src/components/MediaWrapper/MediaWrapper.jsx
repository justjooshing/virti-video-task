import React from "react";

import Video from "../Video/Video";
import Images from "../Images/Images";

export default function MediaWrapper(props) {
  return (
    <div className="media-wrapper">
      <Video videoRef={props.videoRef} checkTime={props.checkTime} />
      <Images
        showImage1={props.showImage1}
        showImage2={props.showImage2}
        showImage3={props.showImage3}
      />
    </div>
  );
}
