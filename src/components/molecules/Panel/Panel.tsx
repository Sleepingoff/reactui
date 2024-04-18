import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import { PropsWithChildren } from "react";

const Panel = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Panel;
