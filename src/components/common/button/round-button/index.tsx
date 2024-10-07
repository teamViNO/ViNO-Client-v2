import { themes } from "./themes";

interface RoundButtonProps {
  type?: "default" | "sg" | "md" | "outline" | "lg";
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const RoundButton = ({
  type = "default",
  disabled = false,
  onClick,
  children,
}: RoundButtonProps) => {
  const theme = themes[type];

  return (
    <button
      className={`rounded-full disabled:bg-gray-100 disabled:text-gray-300 ${theme}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundButton;
