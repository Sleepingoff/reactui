import { MouseEventHandler, PropsWithChildren } from "react";
import "./Button.module.css";

interface Prop extends PropsWithChildren {
  type?: "button" | "submit" | "reset";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type = "button", children, onClick }: Prop) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
