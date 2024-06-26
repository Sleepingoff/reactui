import styles from './Img.module.scss';

import Prop from '@/types/Prop';

interface PropType extends Prop<HTMLImageElement> {
  src: string;
  alt: string;
}
const Img = ({ src, alt, ...props }: PropType) => {
  return <img className={styles.img} src={src} alt={alt} {...props} />;
};

export default Img;
