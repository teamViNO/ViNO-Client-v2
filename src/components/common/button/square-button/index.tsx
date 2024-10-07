import React from "react";
import { sizes, styles } from "./themes";

interface SquareButtonProps {
  style?: "black" | "green" | "gray1" | "gray2" | "outline" | "md2";
  size?: "sm" | "md1" | "md2" | "lg";
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const SquareButton = ({
  style = "black",
  size = "sm",
  disabled,
  onClick,
  children,
}: SquareButtonProps) => {
  const btnStyle = styles[style];
  const btnSize = sizes[size];

  return (
    <button
      className={`w-max rounded-lg disabled:bg-gray-200 disabled:text-gray-300 body1 py-2 ${btnStyle} ${btnSize}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SquareButton;
