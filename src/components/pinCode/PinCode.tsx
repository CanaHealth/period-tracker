import React from 'react';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';

import PinInput from '@/components/pinCode/PinInput';

type PinCodeProps = {
  pincode: number[];
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const PinCode: React.FC<PinCodeProps> = ({ className, pincode, ...rest }) => {
  // input handle functions ...

  const [pin, setPin] = useState<number[]>(pincode);
  const [refIndex, setRefIndex] = useState<number>(0);

  const onChangeDigits = (value: number, index: number) => {
    setPin(pin.map((digit, i) => (i === index ? value : digit)));
  };

  const onFocus = (index: number) => {
    setRefIndex(index);
  };

  const onBlur = () => {
    setRefIndex(0);
  };

  // use onKeyDown to check if the user pressed left or right arrow keys to change the focus to the next or previous instance of PinInput component.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setRefIndex(refIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      setRefIndex(refIndex + 1);
    }
  };

  return (
    <div className={clsxm('', className)} {...rest} onKeyDown={handleKeyDown}>
      <div className='flex min-w-full flex-row justify-between'>
        {pin.map((digit, index) => (
          <PinInput
            key={index}
            myRef={index === refIndex}
            placeholder='0'
            onChangeDigit={(digit) => onChangeDigits(digit, index)}
            onFocus={() => onFocus(index)}
            onBlur={onBlur}
            className=''
          />
        ))}
      </div>
    </div>
  );
};

export default PinCode;
