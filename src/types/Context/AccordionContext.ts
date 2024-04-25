import { MouseEventHandler } from 'react';

export type AccordionContextType = {
  open: boolean;
  disabled: boolean;
  actions: {
    handleClickDetails: MouseEventHandler;
  };
};
