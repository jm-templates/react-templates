import { MouseEventHandler, ReactNode } from "react";
import { base, sizeClasses, cx, type Size } from "./buttonResipe";

export type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  size?: Size;
  className?: string;
};

export const BasicButton = ({
  children,
  onClick = () => {},
  size = "md",
  className,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cx(base, sizeClasses[size], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
