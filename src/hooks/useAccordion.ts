import { MouseEventHandler } from 'react';

//summary를 클릭하면 해당 summary에 open 속성 부여
const useAccordion = (onClick: MouseEventHandler | undefined) => {
  const handleClickSummary: MouseEventHandler = event => {
    if (onClick) {
      onClick(event);
    }
  };

  return { handleClickSummary };
};

export default useAccordion;
