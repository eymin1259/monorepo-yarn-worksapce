import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const RedButton = (props: ButtonProps) => {
  const { children, onClick, ...other } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      {...other}
      style={{
        backgroundColor: "red",
      }}
    >
      {children}
    </button>
  );
};

export default RedButton;
