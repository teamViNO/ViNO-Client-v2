import React from "react";
import { styles } from "./themes";

interface SquareButtonProps {
  style?: "black" | "green" | "gray1" | "gray2" | "outline" | "left";
  self?: "flex" | "stretch";
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  px?: number;
  py?: number;
}

const SquareButton = ({
  style = "black",
  self = "stretch",
  disabled,
  onClick,
  children,
  px = 6,
  py = 2,
}: SquareButtonProps) => {
  const btnStyle = styles[style];
  const btnSelf = self === "flex" ? "flex-1" : "self-stretch";

  return (
    <button
      className={`rounded-lg disabled:bg-gray-200 disabled:text-gray-300 body1 ${btnStyle} ${btnSelf}`}
      disabled={disabled}
      onClick={onClick}
      style={{
        padding: `${py * 4}px ${px * 4}px`,
      }}
    >
      {children}
    </button>
  );
};

export default SquareButton;
