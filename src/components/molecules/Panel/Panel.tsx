import Wrapper from '@/components/atoms/Wrapper/Wrapper';
import Prop from '@/types/Prop';
import styles from './Panel.module.scss';
interface PropType extends Prop<HTMLDivElement> {}

const Panel = ({ children, ...props }: PropType) => {
  return (
    <Wrapper role="tabpanel" className={styles.panel} {...props}>
      {children}
    </Wrapper>
  );
};

export default Panel;
