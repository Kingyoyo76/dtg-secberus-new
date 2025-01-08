'use client';

import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";
import { Menu, X } from 'lucide-react';

interface InteractiveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
  size?: "default" | "sm" | "lg" | "icon" | "cta";
}

export function InteractiveButton({ 
  onClick, 
  className, 
  children, 
  variant,
  size,
  ...props 
}: InteractiveButtonProps) {
  return (
    <Button 
      onClick={onClick} 
      className={className}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
}

interface MenuButtonProps extends Omit<InteractiveButtonProps, 'children'> {
  isOpen: boolean;
}

export function MenuButton({ isOpen, onClick, className, ...props }: MenuButtonProps) {
  return (
    <InteractiveButton
      onClick={onClick}
      className={className}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      {...props}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </InteractiveButton>
  );
}

export function CTAButton({ onClick, className, children, ...props }: InteractiveButtonProps) {
  return (
    <InteractiveButton
      onClick={onClick}
      className={`${className} bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded`}
      {...props}
    >
      {children}
    </InteractiveButton>
  );
}
