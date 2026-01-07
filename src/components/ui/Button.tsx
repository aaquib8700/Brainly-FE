import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

export interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?:boolean;
}

const variantStyles = {
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-white/5 border border-white/10 hover:bg-white/10 transition",
};

const sizeStyles = {
  sm: "px-5 py-2",
  md: "px-8 py-3",
  lg: "px-10 py-4",
};

const defaultStyles =
  "rounded-xl flex gap-1 items-center font-medium cursor-pointer transition-all";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        variantStyles[props.variant] +
        " " +
        defaultStyles +
        " " +
        sizeStyles[props.size] +
        (props.fullWidth ? " w-full justify-center " : "") +
        (props.loading ? " opacity-50 cursor-not-allowed" : "")
      }
      onClick={props.onClick}
      disabled={props.loading}
    >
      {props.startIcon}
      {props.text}
      {props.endIcon}
    </button>
  );
};

