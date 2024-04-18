import { MouseEventHandler, PropsWithChildren } from "react";

import Button from "@/components/atoms/Button/Button";
import Title from "@/components/molecules/Title/Title";
import Img from "@/components/atoms/Img/Img";
import styles from "./Summary.module.scss";

interface IconType {
  icon: {
    src: string;
    alt: string;
  };
}

interface Prop extends PropsWithChildren {
  onClick: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

interface IconProp extends Prop, IconType {}

const SummaryWithNone = ({ onClick, children, className }: Prop) => {
  return (
    <Title className={className} onClick={onClick}>
      {children}
    </Title>
  );
};

const SummaryWithRightIcon = ({
  onClick,
  children,
  icon,
  className,
}: IconProp) => {
  const handleClickButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };
  return (
    <SummaryWithNone className={styles.title} onClick={onClick}>
      <div className={className}>{children}</div>
      <Button onClick={handleClickButton}>
        <Img src={icon.src} alt={icon.alt} />
      </Button>
    </SummaryWithNone>
  );
};

const SummaryWithLeftIcon = ({
  onClick,
  children,
  icon,
  className,
}: IconProp) => {
  const handleClickButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };
  return (
    <SummaryWithNone className={styles.title} onClick={onClick}>
      <Button onClick={handleClickButton}>
        <Img src={icon.src} alt={icon.alt} />
      </Button>
      <div className={className}>{children}</div>
    </SummaryWithNone>
  );
};

const Summary = {
  None: SummaryWithNone,
  RightIcon: SummaryWithRightIcon,
  LeftIcon: SummaryWithLeftIcon,
};

export default Summary;
