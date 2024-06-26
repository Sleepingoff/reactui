import { createContext, useContext } from 'react';
import { HintnContextType } from '@/types/Context/HintContext';

const InitialContextValue: HintnContextType = {
  show: false,
  actions: {
    handler: (_show: boolean) => () => {}
  }
};
const HintContext = createContext(InitialContextValue);

const useHint = () => {
  const value = useContext(HintContext);

  return value;
};

export { HintContext };
export default useHint;
