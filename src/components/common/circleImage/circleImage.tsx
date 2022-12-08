import React from "react";
import "./circleImage.sass"

export interface ICircleImageProps {
  src: string;
  alt: string;
}

const CircleImage: React.FC<ICircleImageProps> = ({ src, alt }) => {
  const url = process.env.PUBLIC_URL + src;

  return <img className="circle-image" src={url} alt={alt} />;
};

export default CircleImage;
