import React, { useState, useRef } from "react";
import MediaWrapper from "./components/MediaWrapper/MediaWrapper";

import "./App.css";

function App() {
  const [image1Count, setImage1Count] = useState(0);
  const [showImage1, toggleShowImage1] = useState(false);

  const [image2Count, setImage2Count] = useState(0);
  const [showImage2, toggleShowImage2] = useState(false);

  const [image3Count, setImage3Count] = useState(0);
  const [showImage3, toggleShowImage3] = useState(false);

  const videoRef = useRef();

//start, finish, count, toggle function
  const checkEachImage = (currentTime, showImage, toggleShowImage, startTime, finishTime, count, maxCount, setCount) => {
    if (
      currentTime >= startTime &&
      currentTime <= finishTime &&
      !showImage &&
      count < maxCount
      ) {
        setCount(count + 1)
        toggleShowImage(true)
      } else if ((currentTime <= startTime || currentTime >= finishTime) && showImage) {
        toggleShowImage(false)
      }
  }

  const checkTime = (currentTime) => {
    checkEachImage(currentTime, showImage1, toggleShowImage1, 3.5, 8.5, image1Count, 1, setImage1Count)
    checkEachImage(currentTime, showImage2, toggleShowImage2, 6, 8, image2Count, 2, setImage2Count)
    checkEachImage(currentTime, showImage3, toggleShowImage3, 7, 8.5, image3Count, 3, setImage3Count)
  };

  return (
    <div className="App">
      <MediaWrapper
        checkTime={checkTime}
        videoRef={videoRef}
        showImage1={showImage1}
        showImage2={showImage2}
        showImage3={showImage3}
      />
      <div className="background">
        {/* nothing to see here, just the background */}
      </div>
    </div>
  );
}

export default App;
