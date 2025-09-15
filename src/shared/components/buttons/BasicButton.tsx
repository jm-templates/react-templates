import { MouseEventHandler, ReactNode } from "react";
import { type ButtonSize, ButtonVariant, getButtonClassNames } from "./buttonResipe";

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
};

export const BasicButton = ({
  children,
  onClick = () => {},
  size = "md",
  variant = "solid",
  disabled = false,
  className,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={getButtonClassNames({ size, variant, disabled, className})}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
