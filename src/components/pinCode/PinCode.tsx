import React from 'react';
import { useState } from 'react';
import { HiBadgeCheck } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import BigButton from '@/components/period/calendar/options/BigButton';
import PinInput from '@/components/pinCode/PinInput';

import {
  checkForWalletInLocalStorage,
  createSolanaWalletInHumanReadableFormat,
  decryptWallet,
  encryptWallet,
  getWalletFromLocalStorage,
  HumanReadableSolanaWallet,
  storeWalletInLocalStorage,
} from '@/util/WalletOperations';

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
  const [wallet = {}, setWallet] = useState<HumanReadableSolanaWallet>({});
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

  const submitPinCode = () => {
    if (pin.length === 6) {
      if (!checkForWalletInLocalStorage()) {
        const wallet = createSolanaWalletInHumanReadableFormat();

        // Pass in pin in string format to encrypt wallet.
        const encryptedWallet: HumanReadableSolanaWallet = encryptWallet(
          wallet,
          pin.join('')
        );

        // Store wallet in local storage.
        storeWalletInLocalStorage(encryptedWallet);
      } else {
        alert(
          'Wallet already exists in local storage. Decrypting wallet now...'
        );
        const encryptedWallet = getWalletFromLocalStorage();

        const decryptedWallet: HumanReadableSolanaWallet = decryptWallet(
          encryptedWallet,
          pin.join('')
        );
        setWallet(decryptedWallet);
      }
    }
  };

  return (
    <div
      className={clsxm(
        'relative mx-auto flex max-w-min justify-center transition-all',
        ' active:animate-blob  ',
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
          OnClickDo={() => {
            submitPinCode;
          }}
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
