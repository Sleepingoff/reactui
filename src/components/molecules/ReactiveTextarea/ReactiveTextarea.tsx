import useByte from '@/hooks/useByte';
import styles from './ReactiveTextarea.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
interface PropType extends React.HTMLProps<HTMLTextAreaElement> {
  vertical?: boolean;
  horizontal?: boolean;
  maxCols?: number;
  maxRows?: number;
}

type handlerKey = React.KeyboardEventHandler<HTMLTextAreaElement>;

type handlerChange = React.FormEventHandler<HTMLTextAreaElement>;

const ReactiveTextarea = ({
  vertical,
  horizontal,
  maxCols,
  maxRows,
  cols,
  rows,
  ...props
}: PropType) => {
  const { getByteOfValue, getGapOfBytes, splitByEnter } = useByte();

  const textarea = useRef(null);
  const [currentCols, setCurrentCols] = useState(cols ?? 1);
  const [currentRows, setCurrentRows] = useState(rows ?? 2);
  const [lines, setLines] = useState(1);
  const [countOfTextAfterEnter, setCountOfTextAfterEnter] = useState(0);
  const [prevInputLength, setPrevInputLength] = useState(0);
  //기본 textarea value 데이터 바인딩
  const [value, setValue] = useState('');

  const isOverMinCols = !!cols && cols <= currentCols;
  const isUnderMaxCols = !!maxCols && currentCols <= maxCols;
  const isOverMaxCols = !maxCols || !isUnderMaxCols;
  const isValidHorizontal =
    horizontal && (isUnderMaxCols || isOverMinCols) && !isOverMaxCols;

  const isOverMinRows = !!rows && rows <= currentRows;
  const isUnderMaxRows = !!maxRows && maxRows >= currentRows;
  const isOverMaxRows = !maxRows || !isUnderMaxRows;
  const isValidVertical =
    vertical &&
    (isUnderMaxRows || isOverMinRows) &&
    isOverMaxCols &&
    !isOverMaxRows;

  const handleChangeTextarea: handlerChange = event => {
    const elem = event.target as HTMLTextAreaElement;
    setValue(elem.value);
  };

  const handleKeyEnter: handlerKey = event => {
    if (event.key === 'Enter') {
      if (isValidHorizontal) {
        setCountOfTextAfterEnter(0);
        //enter를 텍스트 중간에서 했을 경우 currentMacCols가 달라질 수 있다.
        const currentMaxCols = calcMaxColsByte(value);
        setCurrentCols(currentMaxCols);
      }
      if (isValidVertical) {
        setLines(prev => prev + 1);
      }
    }
  };
  /**
   * @see countOfTextAfterEnter
   * 이전보다 `글자수`가 늘어난 것을 기준으로 합니다.
   * 늘어난 글자수의 byte 차이를 계산하여
   * 글자수가 늘어났다면 해당 byte를 아니라면 0을 더해줍니다.
   * 한글에서 한 글자 당 2byte를 차지하지만, 이를 그대로 더해주면
   * 초성, 중성, 종성 당 2byte씩 cols에 더해져 길이가 맞지 않습니다.
   */

  const checkIncreasingValueByte = (value: string) => {
    const inputTextLength = value.length;
    const hasIncreasedValue = prevInputLength <= inputTextLength - 1;
    setPrevInputLength(inputTextLength);
    return hasIncreasedValue;
  };

  //elem.cols에서 2를 더해야 실제 cols에서 쓸 수 있는 byte수가 나온다.
  const availableInputBytes = currentCols + 2;

  const checkOverCurrentCols = () => {
    const isOverCurrentCols = countOfTextAfterEnter >= availableInputBytes;
    return isOverCurrentCols && isUnderMaxCols;
  };

  const updateCountOfTextAfterEnter = (value: string) => {
    const inputLanguageByte = getGapOfBytes(value);
    const countOfText = checkIncreasingValueByte(value) ? inputLanguageByte : 0;
    setCountOfTextAfterEnter(prev => prev + countOfText);
  };

  useEffect(() => {
    if (!textarea.current) return;
    const elem = textarea.current as HTMLTextAreaElement;
    updateCountOfTextAfterEnter(value);
    const isOverCurrentCols = checkOverCurrentCols();
    const isPullCurrentCols = elem.cols === currentCols;
    if (isValidHorizontal && isPullCurrentCols) {
      elem.cols = isOverCurrentCols ? countOfTextAfterEnter : currentCols;
    }
    setCurrentCols(elem.cols);
    if (isValidVertical) {
      const currentLines = Math.ceil(
        countOfTextAfterEnter / availableInputBytes
      );
      setLines(prev => {
        return prev === currentLines ? prev : currentLines;
      });
    }
  }, [value]);

  useEffect(() => {
    if (!textarea.current) return;
    const elem = textarea.current as HTMLTextAreaElement;
    const isPullCurrentRows = elem.rows === lines;
    if (isValidVertical && isPullCurrentRows) {
      elem.rows += 1;
    }
    setCurrentRows(elem.rows);
  }, [lines]);

  const calcMaxColsByte = useMemo(
    () => (value: string) => {
      const ArrayOfBetweenEnterValues = splitByEnter(value);
      const ArrayOfLength = ArrayOfBetweenEnterValues.map(
        values => +values.length
      );
      const maxLengthOfValues = Math.max(...ArrayOfLength);
      const indexOfMaxLength = ArrayOfLength.indexOf(maxLengthOfValues);

      return getByteOfValue(ArrayOfBetweenEnterValues[indexOfMaxLength]);
    },
    [value]
  );

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
      onChange={handleChangeTextarea}
      onKeyUp={handleKeyEnter}
      cols={currentCols}
      rows={currentRows}
      {...props}
    />
  );
};

export default ReactiveTextarea;
