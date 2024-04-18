import { MouseEventHandler, PropsWithChildren } from "react";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";

interface Prop extends PropsWithChildren {
  onClick: MouseEventHandler<HTMLDivElement>;
  className?: string;
}
const Title = ({ onClick, children, className }: Prop) => {
  return (
    <Wrapper className={className} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

export default Title;
