import React from "react";
import clsx from "clsx";

interface BadgeProps {
  variant?: "default" | "secondary" | "success" | "warning" | "error";
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ variant = "default", children, className }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  const variantClasses = {
    default: "bg-gray-100 text-gray-800",
    secondary: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    error: "bg-red-100 text-red-800",
  };

  return <span className={clsx(baseClasses, variantClasses[variant], className)}>{children}</span>;
};

export default Badge;
