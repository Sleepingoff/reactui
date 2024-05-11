import styles from './ReactiveTextarea.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
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
  //기본 textarea value 데이터 바인딩
  const [value, setValue] = useState('');

  const handleChangeTextarea: React.FormEventHandler<
    HTMLTextAreaElement
  > = event => {
    const elem = event.target as HTMLTextAreaElement;
    setValue(elem.value);
  };

  const textarea = useRef(null);
  const [maxColsLength, setMaxCols] = useState(props.cols ?? 10);
  const [maxRowsLength, setMaxRowsLength] = useState(props.rows ?? 10);
  const [countOfTextAfterEnter, setCountOfTextAfterEnter] = useState(0);
  const [prevInputLength, setPrevInputLength] = useState(0);

  useEffect(() => {
    if (!textarea.current) return;
    const elem = textarea.current as HTMLTextAreaElement;
    const isValidHorizontal =
      ((maxCols && maxColsLength <= maxCols) ||
        (props.cols && props.cols >= maxColsLength)) &&
      horizontal;

    if (isValidHorizontal) {
      /**
       * @see countOfTextAfterEnter
       * 이전보다 `글자수`가 늘어난 것을 기준으로 합니다.
       * 늘어난 글자수의 byte 차이를 계산하여
       * 글자수가 늘어났다면 해당 byte를 아니라면 0을 더해줍니다.
       * 한글에서 한 글자 당 2byte를 차지하지만, 이를 그대로 더해주면
       * 초성, 중성, 종성 당 2byte씩 cols에 더해져 길이가 맞지 않습니다.
       */
      const inputTextLength = value.length;
      const hasIncreasedValue =
        prevInputLength && prevInputLength < inputTextLength;
      const inputLanguageByte = getGapOfBytes(value);
      const countOfText = hasIncreasedValue ? inputLanguageByte : 0;
      setPrevInputLength(inputTextLength);
      setCountOfTextAfterEnter(prev => prev + countOfText);
      //기존의 maxColsLength를 넘어선다면

      if (maxColsLength < countOfTextAfterEnter) {
        elem.cols = countOfTextAfterEnter;
      } else {
        const maxColsText = calcMaxCols(elem.value).max;
        elem.cols = getByteOfValue(maxColsText);
      }
      setMaxCols(elem.cols);
    }

    if (vertical) {
      //만약 줄바꿈이 일어난다면, 줄바꿈이 일어난 횟수만큼 더해주기
      //줄바꿈이 일어난다면 = 텍스트의 한 줄 길이가 maxColsLength를 넘어갔을 때
      //텍스트의 한 줄 길이를 아는 방법: calcMaxCols의 일부 로직
      //!텍스트의 길이보단 해당 텍스트의 byte를 알아야한다!!
      const ArrayOfBetweenEnterValues = value.split(/\r\n|\r|\n/);
      const currentText =
        ArrayOfBetweenEnterValues[ArrayOfBetweenEnterValues.length - 1];
      const byteOfcurrentText = getByteOfValue(currentText);
      //elem.cols에서 2를 더해야 실제 cols에서 쓸 수 있는 byte수가 나온다.
      if (byteOfcurrentText >= maxColsLength + 2) {
        const currentLines = Math.ceil(byteOfcurrentText / (maxColsLength + 2));
        elem.rows += lines === currentLines ? 0 : 1;
        setLines(currentLines);
      }
      if (maxRows && maxRowsLength >= maxRows) {
        elem.rows = maxRows;
      }
    }
  }, [value]);
  const [lines, setLines] = useState(0);
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

  const handleKeyEnter: (
    textareaRef: React.RefObject<HTMLTextAreaElement> | null
  ) => React.KeyboardEventHandler<HTMLTextAreaElement> =
    textareaRef => event => {
      if (!textareaRef?.current) return;
      if (event.key === 'Enter') {
        setCountOfTextAfterEnter(0);
        const calcedMaxCols = calcMaxCols(value).cols;
        if (horizontal && maxCols && maxCols >= calcedMaxCols) {
          setMaxCols(calcedMaxCols);
        }
        if (vertical && maxRows && maxRows > maxRowsLength) {
          textareaRef.current.rows++;
        }
      }
    };

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

  //스타일로 width, height 반응형 만드는 예시
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
      onChange={handleChangeTextarea}
      onKeyUp={handleKeyEnter(textarea)}
      {...props}
    />
  );
};

export default ReactiveTextarea;
