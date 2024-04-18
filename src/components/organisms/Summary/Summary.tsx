import React, { MouseEventHandler, PropsWithChildren } from 'react';

import styles from './Summary.module.scss';

import Button from '@/components/atoms/Button/Button';
import Img from '@/components/atoms/Img/Img';
import Title from '@/components/molecules/Title/Title';

interface IconType {
  src: string;
  alt: string;
}

interface Prop extends PropsWithChildren {
  onClick: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const SummaryTitle = ({ children }: PropsWithChildren) => {
  return <Title>{children}</Title>;
};

const SummaryIcon = ({ src, alt }: IconType) => {
  const handleClickButton: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
  };
  return (
    <Button onClick={handleClickButton}>
      <Img src={src} alt={alt} />
    </Button>
  );
};

const Summary = ({ children, onClick }: Prop) => {
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
    <summary className={styles.title} onClick={onClick}>
      {children}
    </summary>
  );
};

Summary.Title = SummaryTitle;
Summary.Icon = SummaryIcon;

export default Summary;
