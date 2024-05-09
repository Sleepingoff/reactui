import Prop from '@/types/Prop';

const Textarea = ({ ...props }: Prop<HTMLTextAreaElement>) => {
  return <textarea {...props} />;
};

export default Textarea;
