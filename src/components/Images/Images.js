import React, { useState } from "react";

export default function Image({
  currentTime,
  url,
  alt,
  startTime,
  endTime,
  countLimit,
  name,
}) {
  const [imageCount, setImageCount] = useState(0);
  const [showImage, toggleShowImage] = useState(false);

  if (currentTime >= startTime && currentTime <= endTime) {
    if (!showImage && imageCount < countLimit) {
      setImageCount(imageCount + 1);
      toggleShowImage(true);
    }
  } else if (showImage) {
    toggleShowImage(false);
  }

  return showImage ? (
    <img
      className="image"
      id={name}
      src={process.env.PUBLIC_URL + url}
      alt={alt}
    />
  ) : null;
}
