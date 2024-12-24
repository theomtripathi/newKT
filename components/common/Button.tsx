import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  icon?: boolean;
}

export function Button({ variant = 'primary', children, onClick, icon = false }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2";
  const variants = {
    primary: "bg-amber-500 hover:bg-amber-600 text-white",
    secondary: "border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </button>
  );
}