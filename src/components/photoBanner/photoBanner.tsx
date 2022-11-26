import React from "react";
import "./photoBanner.sass";
import { Photos } from "./photos";

export interface IPhotoBannerProps {
  text: string;
}

const PhotoBanner: React.FC<IPhotoBannerProps> = ({ text }) => {
  return (
    <div>
      <span>{text}</span>
      {Photos.photo1}
    </div>
  );
};

export default PhotoBanner;
