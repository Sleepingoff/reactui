import { MouseEventHandler, PropsWithChildren } from "react";
import Summary from "../Summary/Summary";
import useAccordion from "../../../hooks/useAccordion";
import Panel from "@/components/molecules/Panel/Panel";

interface Prop<T> extends PropsWithChildren {
  className?: string;
  onClick?: MouseEventHandler<T>;
}
//todo: summary에 onclick이 붙는게 맞는지
//todo: details open 속성을 조절할 수 있는 이벤트
const AccordionSummary = ({ children, onClick }: Prop<HTMLElement>) => {
  const { handleClickSummary } = useAccordion(onClick);
  return <Summary onClick={handleClickSummary}>{children}</Summary>;
};

AccordionSummary.Title = Summary.Title;
AccordionSummary.Icon = Summary.Icon;

const AccordionDetails = ({ children, onClick }: Prop<HTMLDetailsElement>) => {
  return (
    <li>
      <details onClick={onClick}>{children}</details>
    </li>
  );
};

AccordionDetails.Summary = AccordionSummary;
AccordionDetails.Panel = Panel;

const Accordion = ({ className, children }: Prop<HTMLElement>) => {
  return <ul className={className}>{children}</ul>;
};

Accordion.Details = AccordionDetails;
Accordion.Summary = AccordionDetails.Summary;
Accordion.Title = AccordionDetails.Summary.Title;
Accordion.Icon = AccordionDetails.Summary.Icon;
Accordion.Panel = AccordionDetails.Panel;

export default Accordion;