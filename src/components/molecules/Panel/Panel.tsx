import Prop from '@/types/Prop';
import styles from './Panel.module.scss';
interface PropType extends Prop<HTMLOutputElement> {}

const Panel = ({ id, children, ...props }: PropType) => {
  return (
    <output id={id} role="tabpanel" className={styles.panel} {...props}>
      {children}
    </output>
  );
};

export default Panel;
