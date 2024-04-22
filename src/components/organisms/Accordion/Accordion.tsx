import Summary from '../Summary/Summary';

import Panel from '@/components/molecules/Panel/Panel';
import useAccordion from '@/hooks/useAccordion';
import Prop from '@/types/Prop';

import styles from './Accordion.module.scss';

interface PropType<T> extends Prop<T> {}
//todo: summary에 onclick이 붙는게 맞는지
//todo: details open 속성을 조절할 수 있는 이벤트
const AccordionSummary = ({ children, onClick }: PropType<HTMLElement>) => {
  const { handleClickSummary } = useAccordion(onClick);
  return <Summary onClick={handleClickSummary}>{children}</Summary>;
};

AccordionSummary.Title = Summary.Title;
AccordionSummary.Icon = Summary.Icon;

const AccordionDetails = ({
  children,
  onClick,
  ...props
}: PropType<HTMLElement>) => {
  return (
    <li className={styles.details} {...props}>
      <details onClick={onClick}>{children}</details>
    </li>
  );
};

AccordionDetails.Summary = AccordionSummary;
AccordionDetails.Panel = Panel;

const Accordion = ({
  className,
  children,
  ...props
}: PropType<HTMLUListElement>) => {
  return (
    <ul className={`${styles.accordion} ${className}`} {...props}>
      {children}
    </ul>
  );
};

Accordion.Details = AccordionDetails;
Accordion.Summary = AccordionDetails.Summary;
Accordion.Title = AccordionDetails.Summary.Title;
Accordion.Icon = AccordionDetails.Summary.Icon;
Accordion.Panel = AccordionDetails.Panel;

export default Accordion;
