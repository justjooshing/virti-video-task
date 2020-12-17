const playPause = (videoRef, currentlyPlaying, setPlayOrPause) => {
  if (currentlyPlaying) {
    videoRef.current.pause();
    setPlayOrPause(false);
  } else {
    videoRef.current.play();
    setPlayOrPause(true);
  }
};

export default playPause;
