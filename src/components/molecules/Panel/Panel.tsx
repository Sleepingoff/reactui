import { PropsWithChildren } from 'react';

import Wrapper from '@/components/atoms/Wrapper/Wrapper';

const Panel = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Panel;
