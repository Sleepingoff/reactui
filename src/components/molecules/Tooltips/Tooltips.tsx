import Wrapper from '@/components/atoms/Wrapper/Wrapper';

import Prop from '@/types/Prop';
import styles from './Tooltips.module.scss';

interface TooltipsType extends Prop<HTMLDivElement> {
  position: 'top' | 'bottom' | 'right' | 'left';
  title: string;
}

const Tooltips = ({ position, title, children, ...props }: TooltipsType) => {
  return (
    <Wrapper
      role={props.role ?? 'tooltip'}
      className={styles.title}
      aria-label={title}
      {...props}
    >
      <label aria-hidden className={`${styles.tooltips} ${styles[position]}`}>
        {title}
      </label>
      {children}
    </Wrapper>
  );
};

export default Tooltips;
