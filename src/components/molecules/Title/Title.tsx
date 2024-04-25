import Prop from '@/types/Prop';

interface PropType extends Prop<HTMLLabelElement> {
  htmlFor: string;
}

const Title = ({ htmlFor, children, ...props }: PropType) => {
  return (
    <label htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};

export default Title;
