import React from "react";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

interface CustomButtonProps {
  height?: string;
  width?: string;
  icon?: IconType;
  name?: string;
  color?: string;
  border?: string;
  hover?: string;
  link?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  height = "40px",
  width = "100%",
  icon: Icon,
  name = "Button",
  color = "bg-blue-500",
  border = "rounded-full",
  hover = "hover:bg-blue-700",
  link = "",
  disabled = false,
}) => {
  return (
    <a
      href={disabled ? undefined : link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => disabled && e.preventDefault()}
      style={{ height, width }}
    >
      <button
        type="button"
        disabled={disabled}
        style={{ height, width }}
        className={cn(
          "flex items-center justify-center gap-2 text-white font-medium transition-all",
          color,
          border,
          hover,
          disabled
        )}
      >
        {Icon && <Icon className="w-5 h-5" />}
        {name}
      </button>
    </a>
  );
};

export default CustomButton;
