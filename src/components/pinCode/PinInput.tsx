import * as React from 'react';
import { useRef } from 'react';

import clsxm from '@/lib/clsxm';

export type PinInputProps = {
  value: number;
  refIndex: number;
  myRef?: boolean;
  className?: string;
  whenFocused: (index: number) => void;
} & React.ComponentPropsWithoutRef<'div'>;

const PinInput: React.FC<PinInputProps> = ({
  myRef = false,
  value,
  refIndex,
  className,
  whenFocused,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  //usestate for blur
  const [blur, setBlur] = React.useState(true);

  React.useEffect(() => {
    if (myRef) {
      inputRef.current?.focus();
    }
  }, [myRef]);

  return (
    <div className=' relative'>
      <div
        className={clsxm(
          ' absolute inset-2 hidden bg-gray-100 transition-all duration-500',
          [blur && ['block blur-sm']]
        )}
      />
      <input
        className={clsxm(
          ' appearance-none border-gray-100 text-center leading-tight text-gray-700 shadow-sm transition-all duration-150 ease-in-out focus:outline-none',
          'h-10 w-10 text-xs',
          ' hover:bg-gray-100 hover:text-gray-900',
          className
        )}
        type='number'
        value={value}
        onChange={() => {
          null;
        }}
        ref={inputRef}
        // onfocus select all text when focused
        onFocus={() => {
          inputRef.current?.focus();
          whenFocused(refIndex);
          setBlur(false);
        }}
        onBlur={() => {
          setBlur(true);
        }}
      />
    </div>
  );
};

export default PinInput;
