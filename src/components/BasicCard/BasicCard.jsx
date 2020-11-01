import React from "react";
import "./BasicCard.scss";

const Media = ({ image, videoLink }) => {
  if (image) {
    return <img src={image} alt=" " />;
  } else if (videoLink) {
    return <iframe src={videoLink} allowfullscreen frameborder={0} />;
  }

  return null;
};

const BasicCard = ({ image, videoLink, title, children }) => {
  return (
    <div className="basic-card--wrapper">
      <div className="info">
        {title.split(" ").map((word) => (
          <span className="highlight">{word} </span>
        ))}
        {children}
      </div>
      <Media image={image} videoLink={videoLink} />
    </div>
  );
};

export default BasicCard;
