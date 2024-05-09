import styles from './ReactiveTextarea.module.scss';
import { useMemo, useRef, useState } from 'react';
interface PropType extends React.HTMLProps<HTMLTextAreaElement> {
  vertical?: boolean;
  horizontal?: boolean;
  maxCols?: number;
  maxRows?: number;
}

const ReactiveTextarea = ({
  vertical,
  horizontal,
  maxCols,
  maxRows,
  ...props
}: PropType) => {
  const textarea = useRef(null);
  const [value, setValue] = useState('');
  const handleChangeTextarea: (
    textareaRef: React.RefObject<HTMLTextAreaElement>
  ) => React.FormEventHandler<HTMLTextAreaElement> = textareaRef => event => {
    const elem = event.target as HTMLTextAreaElement;
    setValue(elem.value);
    if (!textareaRef.current) return;
    if (horizontal && maxCols && maxColsLength <= maxCols) {
      handleKeyDown(elem.value);
      if (maxColsLength < countOfTextAfterEnter) {
        elem.cols = countOfTextAfterEnter;
      } else {
        const maxCols = calcMaxCols(elem.value).max;
        elem.cols = getByteOfValue(maxCols);
      }
      setMaxCols(elem.cols);
    }
    if (vertical && maxRows && maxRowsLength <= maxRows) {
      setMaxRowsLength(elem.rows);
    }
  };

  const calcMaxCols = useMemo(
    () => (value: string) => {
      const ArrayOfBetweenEnterValues = value.split(/\r\n|\r|\n/);
      const ArrayOfLength = ArrayOfBetweenEnterValues.map(
        values => +values.length
      );
      const indexOfMaxLength = ArrayOfLength.indexOf(
        Math.max(...ArrayOfLength)
      );

      return {
        cols: Math.max(...ArrayOfLength),
        max: ArrayOfBetweenEnterValues[indexOfMaxLength]
      };
    },
    []
  );

  const [prevByte, setPrevByte] = useState(0);

  const getByteOfValue = (str: string) => {
    let byte = 0;

    for (let i = 0; i < str.length; i++) {
      // 기본 한글 2바이트 처리
      str.charCodeAt(i) > 128 ? (byte += 2) : byte++;
    }

    return byte;
  };

  const getGapOfBytes = (str: string) => {
    const byte = getByteOfValue(str);
    let returnValue = 1;
    if (byte - prevByte === 1) returnValue = 1;
    else returnValue = 2;

    setPrevByte(byte);

    return returnValue;
  };

  const [maxColsLength, setMaxCols] = useState(props.cols ?? 10);
  const [maxRowsLength, setMaxRowsLength] = useState(props.rows ?? 10);
  const [countOfTextAfterEnter, setCountOfTextAfterEnter] = useState(0);
  const [prevInputLength, setPrevInputLength] = useState(0);

  const handleKeyEnter: (
    textareaRef: React.RefObject<HTMLTextAreaElement> | null
  ) => React.KeyboardEventHandler<HTMLTextAreaElement> =
    textareaRef => event => {
      if (!textareaRef?.current) return;
      if (event.key === 'Enter') {
        setCountOfTextAfterEnter(calcMaxCols(value).cols);
        if (vertical && maxRows && maxRows > maxRowsLength)
          textareaRef.current.rows++;
      }
    };

  const handleKeyDown = (value: string) => {
    const inputTextLength = value.length;
    const hasIncreasedValue =
      prevInputLength && prevInputLength < inputTextLength;
    const inputLanguageByte = getGapOfBytes(value);
    const countOfText = hasIncreasedValue ? inputLanguageByte : 0;
    setPrevInputLength(inputTextLength);
    console.log(countOfText);
    setCountOfTextAfterEnter(prev => prev + countOfText);
  };

  //   const resizeVertical = (elem: HTMLTextAreaElement) => {
  //     if (maxRows && maxRows <= elem.scrollHeight) {
  //       return;
  //     }
  //     elem.style.height = 'auto';
  //     elem.style.height = elem.scrollHeight + 'px';
  //   };

  //   const resizeHorizontal = (elem: HTMLTextAreaElement) => {
  //     if (maxWidth && maxWidth <= elem.scrollWidth) {
  //       return;
  //     }
  //     elem.style.width = 'fit-content';
  //   };

  return (
    <textarea
      value={value}
      ref={textarea}
      className={styles.textarea}
      style={{ fontSize: 14 }}
      onChange={handleChangeTextarea(textarea)}
      onKeyUp={handleKeyEnter(textarea)}
      {...props}
    />
  );
};

export default ReactiveTextarea;
