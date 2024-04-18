import { MouseEventHandler, PropsWithChildren } from "react";
import "./Wrapper.module.scss";

interface Prop extends PropsWithChildren {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Wrapper = ({ onClick, className, children }: Prop) => {
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default Wrapper;
