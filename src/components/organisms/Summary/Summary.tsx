import React, { MouseEventHandler } from 'react';

import styles from './Summary.module.scss';

import Button from '@/components/atoms/Button/Button';
import Img from '@/components/atoms/Img/Img';
import Title from '@/components/molecules/Title/Title';
import Prop from '@/types/Prop';

interface IconType {
  src: string;
  alt: string;
  title?: string;
}

interface PropType extends Prop<HTMLDivElement> {}

const SummaryTitle = ({ children, ...props }: PropType) => {
  return <Title {...props}>{children}</Title>;
};

const SummaryIcon = ({ src, alt, title = alt }: IconType) => {
  const handleClickButton: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
  };
  return (
    <Button title={title} onClick={handleClickButton}>
      <Img src={src} alt={alt} />
    </Button>
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
    <summary role="title" className={styles.title} onClick={onClick} {...props}>
      {children}
    </summary>
  );
};

Summary.Title = SummaryTitle;
Summary.Icon = SummaryIcon;

export default Summary;
