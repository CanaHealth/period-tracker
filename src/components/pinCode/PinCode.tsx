import React from 'react';
import { useState } from 'react';
import { HiBadgeCheck } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import BigButton from '@/components/period/calendar/options/BigButton';
import PinInput from '@/components/pinCode/PinInput';

// const wallet = '61e52b';

// const decryptWithPin = (pincode: number[]) => {
//   const pin = pincode.join('');
//   const privateKey =
//     '61e52bcab3eb58beb6dad63325e59e70ad39951378a924b43078e1eab41f632be1cad08dab2ba60aa8e50101f7649c0c472cd87b2c12e2a6b3ddeb9917d8b42b';
//   switch (pin) {
//     case '12345':
//       return { pvt: privateKey, wallet: wallet };
//     default:
//       throw new Error('Invalid pin');
//   }
// };

type PinCodeProps = {
  pincode: number[];
  className?: string;
  variant?: 'row' | 'col';
} & React.ComponentPropsWithoutRef<'div'>;

const PinCode: React.FC<PinCodeProps> = ({
  className,
  pincode,
  variant = 'row',
}) => {
  // const [cryptoInfo, setCryptoInfo] = useState({ pvt: '', wallet: wallet });

  const [pin, setPin] = useState<number[]>(pincode);
  const [refIndex, setRefIndex] = useState<number>(0);

  const onChangeDigits = (value: number, index: number) => {
    setPin(pin.map((digit, i) => (i === index ? value : digit)));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    switch (key) {
      case 'ArrowLeft':
        setRefIndex(Math.max(0, refIndex - 1));
        break;
      case 'ArrowRight':
        setRefIndex(Math.min(pin.length - 1, refIndex + 1));
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        onChangeDigits(Number(key), refIndex);
        setRefIndex(Math.min(pin.length - 1, refIndex + 1));
        break;

      default:
        break;
    }
  };

  return (
    <div
      className={clsxm(
        'relative mx-auto flex max-w-min justify-center transition-all',
        className
      )}
      onKeyDown={handleKeyDown}
    >
      <div
        className={clsxm(
          'flex flex-col border',
          'z-10 mx-auto flex',
          variant === 'row' && ['flex-row']
        )}
      >
        <div className='absolute inset-x-10 -top-10 -z-10 flex h-12  flex-col items-center justify-center rounded-t-full border-x  border-t bg-white py-1 px-2 text-xs'>
          {' '}
          enter pin:
        </div>

        <div className='mx-auto flex flex-row justify-center'>
          {pin.map((digit, index) => (
            <PinInput
              key={index}
              value={digit}
              refIndex={index}
              myRef={index === refIndex}
              whenFocused={() => setRefIndex(index)}
              className=''
            />
          ))}
        </div>

        <BigButton
          icon={<HiBadgeCheck />}
          iconLocation='r'
          height='10'
          className={clsxm([
            variant === 'row' && ['w-fit px-10'],
            variant === 'col' && ['w-full'],
          ])}
        />
      </div>
    </div>
  );
};

export default PinCode;
