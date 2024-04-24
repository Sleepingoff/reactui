import React, { useEffect } from 'react';

import styles from './Summary.module.scss';

import Img from '@/components/atoms/Img/Img';
import Title from '@/components/molecules/Title/Title';
import Prop from '@/types/Prop';
import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import useAccordion from '@/hooks/useAccordion';

interface IconType {
  src: string;
  alt: string;
  title?: string;
}

interface PropType extends Prop<HTMLDivElement> {}

const SummaryTitle = ({ children, ...props }: PropType) => {
  return <Title {...props}>{children}</Title>;
};

const SummaryIcon = ({ src, alt }: IconType) => {
  return (
    <Wrapper aria-hidden="true" tabIndex={-1} title="summary-icon">
      <Img src={src} alt={alt} />
    </Wrapper>
  );
};

const Summary = ({ children, ...props }: PropType) => {
  const { providerValue } = useAccordion();
  //여기에서 click 이벤트를 주는 이유
  //summary의 click event를 감지해 details의 toggle event를 실행하기 때문에, click event로 details의 open 여부에 관여할 수 있다.
  const actions = providerValue.actions.handleClickDetails;
  //!! 처음에는 hasTitle이 true로 잘 나오지만, 다음 렌더링부터는 hasTitle이 false가 되어 경고가 뜸.
  useEffect(() => {
    let hasTitle = false;

    React.Children.forEach(children, child => {
      if (React.isValidElement(child) && child.type === SummaryTitle) {
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

Summary.Title = SummaryTitle;
Summary.Icon = SummaryIcon;

export default Summary;
