import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const BlueButton = (props: ButtonProps) => {
  const { children, onClick, ...other } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      {...other}
      style={{
        backgroundColor: "blue",
      }}
    >
      {children}
    </button>
  );
};

export default BlueButton;
