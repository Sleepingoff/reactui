import { MouseEventHandler, PropsWithChildren } from 'react';
import './Button.module.css';
import Prop from '@/types/Prop';

interface PropType extends Prop<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ type = 'button', children, onClick, ...props }: PropType) => {
  return (
    <button type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
