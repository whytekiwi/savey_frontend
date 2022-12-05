import React from "react";
import "./button.sass";

export interface IButtonProps {
  disabled?: boolean;
  type?: "success" | "error" | "primary" | "neutral";
  onClick?: () => void;
  children: string | JSX.Element;
  onHoverEvent?: (isHovering: boolean) => void;
}

const Button: React.FC<IButtonProps> = ({
  disabled = false,
  type = "primary",
  onClick,
  children,
  onHoverEvent,
}) => {
  return (
    <button
      onMouseOver={() => onHoverEvent?.(true)}
      onMouseLeave={() => onHoverEvent?.(false)}
      className={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
