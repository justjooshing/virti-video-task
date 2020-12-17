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

  const checkCount = (currentTime) => {
    // Add or remove image 1
    if (
      currentTime >= 3.5 &&
      currentTime <= 8.5 &&
      !showImage1 &&
      image1Count < 1
    ) {
      setImage1Count(image1Count + 1);
      toggleShowImage1(true);
    } else if ((currentTime <= 3.5 || currentTime >= 8.5) && showImage1) {
      toggleShowImage1(false);
    }

    // Add or remove image 2
    if (
      currentTime >= 6 &&
      currentTime <= 8 &&
      !showImage2 &&
      image2Count < 2
    ) {
      setImage2Count(image2Count + 1);
      toggleShowImage2(true);
    } else if ((currentTime <= 6 || currentTime >= 8) && showImage2) {
      toggleShowImage2(false);
    }

    // Add or remove image 3
    if (
      currentTime >= 7 &&
      currentTime <= 8.5 &&
      !showImage3 &&
      image3Count < 3
    ) {
      setImage3Count(image3Count + 1);
      toggleShowImage3(true);
    } else if ((currentTime <= 7 || currentTime >= 8.5) && showImage3) {
      toggleShowImage3(false);
    }
  };

  return (
    <div className="App">
      <MediaWrapper
        checkCount={checkCount}
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
