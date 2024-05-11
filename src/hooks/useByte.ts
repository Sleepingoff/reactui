import { useState } from 'react';

const useByte = () => {
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

  const splitByEnter = (value: string) => {
    const ArrayOfBetweenEnterValues = value.split(/\r\n|\r|\n/);
    return ArrayOfBetweenEnterValues;
  };

  return { getByteOfValue, getGapOfBytes, splitByEnter };
};

export default useByte;
