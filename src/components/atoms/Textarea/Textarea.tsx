import { FormEventHandler, useState } from 'react';
import styles from './Textarea.module.scss';

const Textarea = ({ ...props }: React.HTMLProps<HTMLTextAreaElement>) => {
  const [value, setValue] = useState('');
  const onChangeTextarea: FormEventHandler<HTMLTextAreaElement> = event => {
    const elem = event.target as HTMLTextAreaElement;
    setValue(elem.value);
  };
  return (
    <textarea
      value={value}
      onChange={onChangeTextarea}
      className={styles.textarea}
      {...props}
    />
  );
};

export default Textarea;
