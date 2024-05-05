import { MouseEventHandler } from 'react';

export type HintnContextType = {
  show: boolean;
  actions: {
    handler: (show: boolean) => MouseEventHandler;
  };
};
