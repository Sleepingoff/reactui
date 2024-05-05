import styles from './Panel.module.scss';

import Prop from '@/types/Prop';
interface PropType extends Prop<HTMLDivElement> {}

//todo: output -> section/article로 교체하기
const Panel = ({ id, children, ...props }: PropType) => {
  return (
    <div id={id} role="tabpanel" className={styles.panel} {...props}>
      {children}
    </div>
  );
};

export default Panel;
