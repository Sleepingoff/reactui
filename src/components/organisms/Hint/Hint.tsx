import React, {
  Component,
  MouseEventHandler,
  useEffect,
  useMemo,
  useState
} from 'react';
import TipBox from '../TipBox/TipBox';
import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import Button from '@/components/atoms/Button/Button';

import styles from './Hint.module.scss';
import Prop from '@/types/Prop';
import useHint, { HintContext } from '@/hooks/useHint';
import Tooltips from '@/components/molecules/Tooltips/Tooltips';

interface HintType extends Prop<HTMLDivElement> {
  title?: string;
  popover?: boolean;
  position?: 'top' | 'bottom' | 'right' | 'left';
}

const Trigger = ({ children, ...props }: Prop<HTMLButtonElement>) => {
  const value = useHint();
  const isOpen = value.show;
  const handleShowTips = value.actions.handler;
  return (
    <Button onClick={handleShowTips(isOpen)} {...props}>
      {children}
    </Button>
  );
};

const Popovertips = ({ position, children, ...props }: HintType) => {
  const [show, setShow] = useState(false);
  const handleShowTtile = () => {
    setShow(true);
  };
  const handleHideTitle = () => {
    setShow(false);
  };
  const handleClickTips = () => {
    if (show) handleHideTitle();
    else handleShowTtile();
  };

  const value = useHint();

  const actions = useMemo(
    () => ({
      handler:
        (show: boolean): MouseEventHandler =>
        e => {
          setShow(!show);
        }
    }),
    [value.actions.handler]
  );

  const providerValue = {
    show: show,
    actions: actions
  };

  return (
    <HintContext.Provider value={providerValue}>
      <Wrapper {...props} onClick={handleClickTips}>
        {children}
      </Wrapper>
    </HintContext.Provider>
  );
};

const Hint = ({
  position = 'bottom',
  title,
  popover,
  children,
  ...props
}: HintType) => {
  if (popover) {
    return (
      <Popovertips position={position} {...props}>
        {children}
      </Popovertips>
    );
  }
  if (!popover && title) {
    return (
      <Tooltips position={position} title={title} {...props}>
        {children}
      </Tooltips>
    );
  }
};

Hint.Trigger = Trigger;
Hint.Content = TipBox;
Hint.Panel = TipBox.Panel;
Hint.Button = TipBox.Button;

export default Hint;
