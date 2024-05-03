import styles from './Accordion.module.scss';
import Prop from '@/types/Prop';
import AccordionProvider from './AccordionProvier';

const Accordion = ({
  className,
  children,
  ...props
}: Prop<HTMLUListElement>) => {
  return (
    <ul className={`${styles.accordion} ${className}`} {...props}>
      {children}
    </ul>
  );
};

Accordion.Details = AccordionProvider;
Accordion.Summary = AccordionProvider.Summary;
Accordion.Title = AccordionProvider.Summary.Title;
Accordion.Icon = AccordionProvider.Summary.Icon;
Accordion.Panel = AccordionProvider.Panel;

export default Accordion;
