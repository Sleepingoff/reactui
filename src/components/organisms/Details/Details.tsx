import Prop from '@/types/Prop';
import Summary from '../Summary/Summary';
import Panel from '@/components/molecules/Panel/Panel';
import useAccordion from '@/hooks/useAccordion';

interface PropType extends Prop<HTMLDetailsElement> {}
const Details = ({ children, ...props }: PropType) => {
  const { providerValue } = useAccordion();
  const { open, disabled } = providerValue;

  return (
    <details
      aria-expanded={open}
      open={open}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </details>
  );
};

Details.Summary = Summary;
Details.Panel = Panel;

export default Details;
