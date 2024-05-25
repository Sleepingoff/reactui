import { createContext, useContext } from 'react';

import { TabContextType } from '@/types/Context/TabContext';
const TabContextValue: TabContextType = {
  list: [],
  current: '',
  actions: { handler: () => () => ({}) }
};
const TabContext = createContext(TabContextValue);
const useTab = () => {
  const value = useContext<TabContextType>(TabContext);
  if (value === undefined) {
    throw new Error('useTab should be used within Tab');
  }

  return value;
};

export { TabContext };
export default useTab;
