import React, { ButtonHTMLAttributes } from "react";
import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  border?: string;
  borderRadius?: string;
  padding?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  button?: "button_1" | "button_2" | "button_3";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  color = "primary",
  backgroundColor = "transparent",
  borderColor = "transparent",
  border = "none",
  borderRadius,
  padding,
  children,
  fontSize,
  fontFamily,
  fontWeight,
  button,
  ...props
}) => {
  let className = "button";

  // Apply variant class
  if (variant === "primary") {
    className += " button-primary";
  } else if (variant === "secondary") {
    className += " button-secondary";
  } else if (variant === "danger") {
    className += " button-danger";
  }

  // Apply size class
  if (size === "small") {
    className += " button-small";
  } else if (size === "large") {
    className += " button-large";
  }

  // Apply custom button class
  if (button === "button_1") {
    className += " button_1";
  } else if (button === "button_2") {
    className += " button_2";
  } else if (button === "button_3") {
    className += " button_3";
  }

  // Apply custom styles
  const style: React.CSSProperties = {
    color,
    backgroundColor,
    borderColor,
    border,
    borderRadius,
    padding,
    fontSize,
    fontFamily,
    fontWeight,
  };

  return (
    <button className={className} style={style} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
