import { PropsWithChildren } from 'react';

import Wrapper from '@/components/atoms/Wrapper/Wrapper';

interface Prop extends PropsWithChildren {
  className?: string;
}
const Title = ({ children, className }: Prop) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Title;
