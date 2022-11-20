import React from "react";
import "./button.sass";

export interface IButtonProps {
  disabled?: boolean;
  type?: "success" | "error" | "primary" | "neutral";
  onClick?: () => void;
  children: string | JSX.Element
}

const Button: React.FC<IButtonProps> = ({
  disabled = false,
  type = "primary",
  onClick,
  children,
}) => {
  return (
    <button className={type} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
