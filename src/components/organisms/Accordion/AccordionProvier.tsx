import React, { useMemo, useState } from 'react';

import styles from './Accordion.module.scss';
import Details from '../Details/Details';
import Summary from '../Summary/Summary';

import Panel from '@/components/molecules/Panel/Panel';
import useAccordion, { AccordionContext } from '@/hooks/useAccordion';
import Prop from '@/types/Prop';

interface PropType<T> extends Prop<T> {
  disabled?: boolean;
}

const AccordionProvider = ({
  disabled,
  children,
  ...props
}: PropType<HTMLElement>) => {
  const { providerValue } = useAccordion();
  const [isOpen, setIsOpen] = useState(providerValue.open);
  const [isDisabled] = useState(disabled ?? providerValue.disabled);
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

AccordionProvider.Summary = Summary;
AccordionProvider.Panel = Panel;

export default AccordionProvider;
