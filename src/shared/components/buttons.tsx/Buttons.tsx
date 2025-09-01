import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler;
};

const BasicButton = ({ children, onClick = () => {} }: ButtonProps) => {
  return (
    <button
      className="px-3 py-1 rounded-md bg-cyan-500 w-fit hover:cursor-pointer active:bg-cyan-700 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { BasicButton };
