import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function Button({
  children,
  onClick,
  icon,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 px-2 sm:px-4 py-1 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
      style={{ background: "var(--black)" }}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
