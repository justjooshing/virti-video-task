import React from 'react'

const fullscreenImage = "./images/fullscreenImage.png";

export default function FullscreenButton({videoRef}) {
  return (
    <button
    className="controls"
    type="button"
    onClick={() => videoRef.current.requestFullscreen()}
  >
    <img
      className="controlImages"
      src={process.env.PUBLIC_URL + fullscreenImage}
      alt="Fullscreen button"
    />
  </button>
  )
}
