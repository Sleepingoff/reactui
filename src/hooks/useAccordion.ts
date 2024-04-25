import { MouseEventHandler, createContext, useContext } from 'react';
type ContextType = {
  open: boolean;
  disabled: boolean;
  actions: {
    handleClickDetails: MouseEventHandler;
  };
};
const contextValue: ContextType = {
  open: false,
  disabled: false,
  actions: {
    handleClickDetails: event => {}
  }
};
const AccordionContext = createContext(contextValue);
//summary를 클릭하면 해당 summary에 open 속성 부여
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
