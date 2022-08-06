import * as React from 'react';
import { useRef, useState } from 'react';

import clsxm from '@/lib/clsxm';

export type PinInputProps = {
  className?: string;
  myRef?: boolean;
  onChangeDigit: (value: number) => void;
  onFocus: () => void;
} & React.ComponentPropsWithoutRef<'div'>;

const PinInput: React.FC<PinInputProps> = ({
  className,
  myRef = false,
  onChangeDigit,
  key,
  ...rest
}) => {
  const [digit, setDigit] = useState<number>(0);
  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = Number(event.target.value);

    if (newValue >= 0 && newValue <= 9) {
      setDigit(newValue);
      onChangeDigit(newValue);
    } else {
      setDigit(0);
      onChangeDigit(0);
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (myRef) {
      inputRef.current?.focus();
    }
  }, [myRef]);

  return (
    <input
      className={clsxm(
        ' h-24  w-24 appearance-none rounded border-2 border-gray-300 py-2 px-4 text-center text-5xl leading-tight text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none',
        className
      )}
      type='number'
      value={digit}
      onChange={handleInput}
      ref={inputRef}
      key={key}
      {...rest}
    />
  );
};

export default PinInput;
