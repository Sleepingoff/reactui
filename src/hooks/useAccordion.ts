import { createContext, useContext } from 'react';

import { AccordionContextType } from '@/types/Context/AccordionContext';

const contextValue: AccordionContextType = {
  open: false,
  disabled: false,
  actions: {
    handleClickDetails: event => {}
  }
};
const AccordionContext = createContext(contextValue);

const useAccordion = () => {
  const value = useContext(AccordionContext);
  if (value === undefined) {
    throw new Error('useAccordion should be used within Accordion');
  }
  const providerValue = {
    open: value.open,
    disabled: value.disabled,
    actions: value.actions
  };

  return { providerValue };
};

export { AccordionContext };

export default useAccordion;
