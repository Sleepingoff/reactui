import { useState } from 'react';

import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import Button from '@/components/atoms/Button/Button';
import Panel from '@/components/molecules/Panel/Panel';
import Prop from '@/types/Prop';

import styles from './TipBox.module.scss';
import useHint from '@/hooks/useHint';

const TipBoxButton = ({ children, ...props }: Prop<HTMLButtonElement>) => {
  const value = useHint();
  const isOpen = value.show;

  const handleClickTipBox = value.actions.handler;

  return (
    <Button onClick={handleClickTipBox(isOpen)} {...props}>
      {children}
    </Button>
  );
};

const TipBoxPanel = ({ children, ...props }: Prop<HTMLDivElement>) => {
  return <Panel {...props}>{children}</Panel>;
};

const TipBox = ({ children, ...props }: Prop<HTMLDivElement>) => {
  const value = useHint();
  const isOpen = value.show;
  return (
    isOpen && (
      <Wrapper className={styles.tipbox} {...props}>
        {children}
      </Wrapper>
    )
  );
};

TipBox.Button = TipBoxButton;
TipBox.Panel = TipBoxPanel;

export default TipBox;
