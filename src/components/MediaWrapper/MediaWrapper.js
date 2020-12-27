import React, { useRef, useState } from "react";

import Video from "../Video/Video";
import Images from "../Images/Images";

export default function MediaWrapper(props) {
  const images = [
    {
      name: "image1",
      url: "/images/image1.png",
      startTime: 3.5,
      endTime: 8.5,
      countLimit: 1,
      alt: "Banana Emoji",
    },
    {
      name: "image2",
      url: "/images/image2.png",
      startTime: 6,
      endTime: 8,
      countLimit: 2,
      alt: "Xbox Controller Emoji",
    },
    {
      name: "image3",
      url: "/images/image3.png",
      startTime: 7.5,
      endTime: 8.5,
      countLimit: 3,
      alt: "Fire Emoji",
    },
  ];
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef();

  const checkTime = (currentTime) => {
    setCurrentTime(currentTime);
  };

  return (
    <div className="media-wrapper">
      <Video videoRef={videoRef} checkTime={checkTime} />
      {Object.values(images).map((image, index) => {
        return (
          <Images
            currentTime={currentTime}
            key={index}
            url={image.url}
            alt={image.alt}
            startTime={image.startTime}
            endTime={image.endTime}
            countLimit={image.countLimit}
            name={image.name}
          />
        );
      })}
    </div>
  );
}
