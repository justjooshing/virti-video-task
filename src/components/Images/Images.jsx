import React from "react";

const image1 = "./images/image1.png";
const image2 = "./images/image2.png";
const image3 = "./images/image3.png";

export default function Images({ showImage1, showImage2, showImage3 }) {
  return (
    <>
      {showImage1 ? (
        <img
          className="image"
          id="image1"
          src={process.env.PUBLIC_URL + image1}
          alt="Banana Emoji"
        />
      ) : null}
      {showImage2 ? (
        <img
          className="image"
          id="image2"
          src={process.env.PUBLIC_URL + image2}
          alt="Xbox Controller Emoji"
        />
      ) : null}
      {showImage3 ? (
        <img
          className="image"
          id="image3"
          src={process.env.PUBLIC_URL + image3}
          alt="Flame Emoji"
        />
      ) : null}
    </>
  );
}
