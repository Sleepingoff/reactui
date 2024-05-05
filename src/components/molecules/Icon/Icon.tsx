import Img from '@/components/atoms/Img/Img';
import Wrapper from '@/components/atoms/Wrapper/Wrapper';

interface IconType {
  src: string;
  alt: string;
}

const Icon = ({ src, alt }: IconType) => {
  return (
    <Wrapper aria-hidden="true" title="summary-icon">
      <Img src={src} alt={alt} />
    </Wrapper>
  );
};

export default Icon;
