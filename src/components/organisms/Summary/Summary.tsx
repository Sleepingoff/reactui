import React from 'react';

import styles from './Summary.module.scss';

import Img from '@/components/atoms/Img/Img';
import Title from '@/components/molecules/Title/Title';
import Prop from '@/types/Prop';
import Wrapper from '@/components/atoms/Wrapper/Wrapper';

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

const Summary = ({ children, onClick, ...props }: PropType) => {
  let hasTitle = false;

  React.Children.forEach(children, child => {
    if (React.isValidElement(child) && child.type === SummaryTitle) {
      hasTitle = true;
    }
  });

  if (!hasTitle) {
    console.warn('Summary component is missing a Title component.');
  }

  return (
    <summary className={styles.summary} onClick={onClick} {...props}>
      {children}
    </summary>
  );
};

Summary.Title = SummaryTitle;
Summary.Icon = SummaryIcon;

export default Summary;
