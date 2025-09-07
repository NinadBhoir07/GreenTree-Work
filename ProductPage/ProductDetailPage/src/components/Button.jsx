import React from "react";

const Button = ({
  children,
  bgColor,
  textColor,
  className,
  borderColor,
  size = "default",
  fullWidth = false,
  ...props
}) => {
  // Size variants
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm h-8 min-w-10",
    default: "px-4 py-2 text-base h-10 min-w-24 sm:min-w-10 lg:min-w-36",
    large: "px-6 py-3 text-lg h-12 min-w-28 sm:min-w-32 lg:min-w-40",
    xl: "px-8 py-4 text-xl h-14 min-w-32 sm:min-w-36 lg:min-w-44",
  };

  // Base responsive classes
  const baseClasses = `
    transition-all duration-200 
    font-bold 
    rounded 
    active:scale-95 
    hover:shadow-md
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2
    disabled:opacity-50 
    disabled:cursor-not-allowed
    ${fullWidth ? "w-full" : "w-auto"}
    ${sizeClasses[size]}
  `;

  return (
    <button
      style={{
        backgroundColor: bgColor || "#3b82f6",
        color: textColor || "white",
        border: borderColor ? `2px solid ${borderColor}` : "none",
        focusRingColor: borderColor || bgColor || "#3b82f6",
      }}
      className={`${baseClasses} ${className || ""}`}
      {...props}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;
