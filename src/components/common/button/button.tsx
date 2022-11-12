import React from "react";
import { IconSource } from "../icon/iconSource";
import "./button.sass";

export interface IButtonProps {
  text: string;
  icon?: IconSource;
  disabled?: boolean;
  type?: "success" | "error" | "primary" | "neutral";
  onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  text,
  icon,
  disabled = false,
  type = "primary",
  onClick,
}) => {
  return (
    <button className={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
