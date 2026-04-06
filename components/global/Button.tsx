import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  onClick,
  icon,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90 
      bg-linear-to-br from-emerald-500 to-blue-500 ${className}`}>
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
