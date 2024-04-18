import { PropsWithChildren } from "react";

const H1 = ({ children }: PropsWithChildren) => {
  return <h1>{children}</h1>;
};
const H2 = ({ children }: PropsWithChildren) => {
  return <h2>{children}</h2>;
};
const H3 = ({ children }: PropsWithChildren) => {
  return <h3>{children}</h3>;
};
const H4 = ({ children }: PropsWithChildren) => {
  return <h4>{children}</h4>;
};
const H5 = ({ children }: PropsWithChildren) => {
  return <h5>{children}</h5>;
};
const H6 = ({ children }: PropsWithChildren) => {
  return <h6>{children}</h6>;
};

const Heading = {
  1: H1,
  2: H2,
  3: H3,
  4: H4,
  5: H5,
  6: H6,
};

export default Heading;
