import styles from './Wrapper.module.scss';

import Prop from '@/types/Prop';

interface PropType extends Prop<HTMLDivElement> {}

const Wrapper = ({ onClick, className, children, ...props }: PropType) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.wrapper} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Wrapper;
