import { createContext, useContext } from 'react';

const contextValue = {};
const TabContext = createContext(contextValue);
const useTab = () => {
  const value = useContext(TabContext);
  if (value === undefined) {
    throw new Error('useTab should be used within Tab');
  }
  return value;
};
export { TabContext };
export default useTab;
