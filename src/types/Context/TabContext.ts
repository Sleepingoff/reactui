import { MouseEventHandler } from 'react';

export type DataType = { id: string; content: string };
export type TabContextType = {
  list: DataType[];
  current: string;
  actions: { handler: (id: string) => MouseEventHandler<HTMLLIElement> };
};
