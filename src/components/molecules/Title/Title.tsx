import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import Prop from '@/types/Prop';

interface PropType extends Prop<HTMLDivElement> {}

const Title = ({ children, ...props }: PropType) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Title;
