import Summary from '../Summary/Summary';

import Panel from '@/components/molecules/Panel/Panel';

import useAccordion, { AccordionContext } from '@/hooks/useAccordion';
import Prop from '@/types/Prop';

import styles from './Accordion.module.scss';
import Details from '../Details/Details';
import React, { useMemo, useState } from 'react';

interface PropType<T> extends Prop<T> {
  disabled?: boolean;
}

const AccordionDetails = ({
  disabled,
  children,
  ...props
}: PropType<HTMLElement>) => {
  const { providerValue } = useAccordion();
  const [isOpen, setIsOpen] = useState(providerValue.open);
  const [isDisabled, _] = useState(disabled ?? providerValue.disabled);
  const actions = useMemo(
    () => ({
      handleClickDetails(event: React.MouseEvent<Element, MouseEvent>) {
        //disabled일 경우 이벤트가 일어나지 않도록 막는다.
        //즉, disabled라면 details의 toggle 이벤트가 일어나는 것까지 막을 수 있다.
        if (isDisabled) event.preventDefault();
        else setIsOpen(!isOpen);
      }
    }),
    []
  );
  const value = useMemo(() => {
    return { open: isOpen, disabled: isDisabled, actions };
  }, []);
  return (
    <li className={styles.details} {...props}>
      <AccordionContext.Provider value={value}>
        <Details>{children}</Details>
      </AccordionContext.Provider>
    </li>
  );
};

AccordionDetails.Summary = Summary;
AccordionDetails.Panel = Panel;

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

Accordion.Details = AccordionDetails;
Accordion.Summary = AccordionDetails.Summary;
Accordion.Title = AccordionDetails.Summary.Title;
Accordion.Icon = AccordionDetails.Summary.Icon;
Accordion.Panel = AccordionDetails.Panel;

export default Accordion;
