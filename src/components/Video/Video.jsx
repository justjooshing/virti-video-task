import React from "react";

import CustomControls from "./CustomControls"

const videoFile = "./Big_Buck_Bunny_1080_10s_5MB.mp4";

export default function Video({ videoRef, checkCount }) {
 

  return (
    <div className="video-wrapper">
      <video ref={videoRef} loop autoPlay muted className="video">
        <source src={process.env.PUBLIC_URL + videoFile} />
      </video>

      <CustomControls
        videoRef={videoRef}
        checkCount={checkCount}
      />
    </div>
  );
}
