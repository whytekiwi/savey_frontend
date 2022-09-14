import React from "react";
import "./icon.sass";
import { IconSource } from "./iconSource";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook.svg";

export interface IIconProps {
  source: IconSource;
  onClick?: () => void;
}

const iconMap = new Map<IconSource, JSX.Element>([
  [IconSource.Facebook, <FacebookIcon />],
]);

const Icon: React.FC<IIconProps> = ({ source, onClick }) => {
  let svg = iconMap.get(source) ?? <svg />;

  svg = React.cloneElement(svg, {
    "data-icon": source,
    onClick,
    className: "icon",
  });

  return svg;
};

export default Icon;
