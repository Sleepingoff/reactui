import React, { useEffect } from 'react';

import styles from './Summary.module.scss';

import Title from '@/components/molecules/Title/Title';
import useAccordion from '@/hooks/useAccordion';
import Prop from '@/types/Prop';
import Icon from '@/components/molecules/Icon/Icon';

interface PropType extends Prop<HTMLDivElement> {}

const Summary = ({ children, ...props }: PropType) => {
  const { providerValue } = useAccordion();
  //여기에서 click 이벤트를 주는 이유
  //summary의 click event를 감지해 details의 toggle event를 실행하기 때문에, click event로 details의 open 여부에 관여할 수 있다.
  const actions = providerValue.actions.handleClickDetails;

  useEffect(() => {
    let hasTitle = false;

    React.Children.forEach(children, child => {
      if (React.isValidElement(child) && child.type === Title) {
        hasTitle = true;
      }
    });
    if (!hasTitle) {
      console.warn('Summary component is missing a Title component.');
    }
  }, []);

  return (
    <summary className={styles.summary} onClick={actions} {...props}>
      {children}
    </summary>
  );
};

Summary.Title = Title;
Summary.Icon = Icon;

export default Summary;
