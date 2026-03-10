import type { ReactElement } from "react";

type Variants = "primary" | "secondary" | "ghost" | "danger";

export interface ButtonProps {
  variant: Variants;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantStyles: Record<Variants, string> = {
  primary:
    "bg-white text-indigo-600 hover:bg-slate-100 active:bg-slate-200 shadow-xl shadow-white/5",
  secondary:
    "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 shadow-xl shadow-indigo-600/20",
  ghost:
    "bg-transparent text-slate-400 hover:bg-white/5 hover:text-white",
  danger:
    "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500/20",
};

const sizeStyles: Record<string, string> = {
  sm: "px-5 py-2 text-[10px] tracking-[0.2em]",
  md: "px-8 py-3.5 text-[11px] tracking-[0.2em]",
  lg: "px-10 py-5 text-[13px] tracking-[0.2em]",
};

const defaultStyles =
  "rounded-full inline-flex gap-3 items-center font-bold uppercase transition-all duration-300 select-none cursor-pointer whitespace-nowrap";

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={
        [
          defaultStyles,
          variantStyles[props.variant],
          sizeStyles[props.size],
          props.fullWidth ? "w-full justify-center" : "",
          props.loading ? "opacity-75 cursor-not-allowed pointer-events-none" : "",
        ]
          .filter(Boolean)
          .join(" ")
      }
      onClick={props.onClick}
      disabled={props.loading}
    >
      {props.loading ? (
        <svg className="animate-spin h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : props.startIcon ? (
        <span className="shrink-0">{props.startIcon}</span>
      ) : null}
      <span className="leading-none">{props.loading ? "Processing..." : props.text}</span>
      {props.endIcon && !props.loading && <span className="shrink-0">{props.endIcon}</span>}
    </button>
  );
};
