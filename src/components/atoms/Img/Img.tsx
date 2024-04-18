import "./Img.module.css";

interface Prop {
  src: string;
  alt: string;
}
const Img = ({ src, alt }: Prop) => {
  return <img src={src} alt={alt} />;
};

export default Img;
