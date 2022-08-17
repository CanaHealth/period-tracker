import React from 'react';
import { useState } from 'react';
import { HiBadgeCheck } from 'react-icons/hi';

import clsxm from '@/lib/clsxm';

import BigButton from '@/components/period/calendar/options/BigButton';
import PinInput from '@/components/pinCode/PinInput';

import { saveDataOnChain } from '@/util/saveOnChain';
import {
  createSolanaWallet,
  decryptWallet,
  encryptWallet,
  getPasscodeFromCookie,
  getWalletFromLocalStorage,
  solanaWallet,
  storePasscodeAsCookie,
  storeWalletInLocalStorage,
} from '@/util/WalletOperations';
import { usableSecretKey } from '@/util/WalletOperations';

import AcceptModal from './AcceptModal';

type PinCodeProps = {
  pincode: number[];
  className?: string;
  variant?: 'row' | 'col';
  setPublicKey: React.Dispatch<React.SetStateAction<string>>;
} & React.ComponentPropsWithoutRef<'div'>;

const PinCode: React.FC<PinCodeProps> = ({
  className,
  pincode,
  variant = 'row',
  setPublicKey,
}) => {
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState<number[]>(pincode);
  const [open, setOpen] = useState(false);
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
    const pinConcat = pin.join(''); // Concatenated pincode as string
    if (pin.length === 6) {
      if (getWalletFromLocalStorage().publicKey === '') {
        const wallet = createSolanaWallet();

        // Pass in pin in string format to encrypt wallet.
        const encryptedWallet: solanaWallet = encryptWallet(wallet, pinConcat);

        setPublicKey(encryptedWallet.publicKey);

        // Store wallet in local storage.
        storeWalletInLocalStorage(encryptedWallet);

        storePasscodeAsCookie(pinConcat);
      } else {
        const encryptedWallet = getWalletFromLocalStorage();

        // const decryptedWallet: HumanReadableSolanaWallet = decryptWallet(
        //   encryptedWallet,
        //   pinConcat
        // );

        setPublicKey(encryptedWallet.publicKey);

        storePasscodeAsCookie(pinConcat);
      }
    }
  };

  const handleAccept = async () => {
    console.log('start');
    const encryptedWallet = getWalletFromLocalStorage();
    const decryptedWallet: solanaWallet = decryptWallet(
      encryptedWallet,
      getPasscodeFromCookie()
    );
    console.log('decrypted');

    // TODO: Handle expired cookie.
    await saveDataOnChain(
      localStorage.getItem('FLOWDATA'),
      usableSecretKey(decryptedWallet.secretKey)
    );
    console.log('saved');
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
        <AcceptModal
          open={open}
          setOpen={setOpen}
          handleSubmit={() => handleAccept()}
        />

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
            submitPinCode();
            setOpen(true);
          }}
          icon={<HiBadgeCheck />}
          text='Save on-chain'
          iconLocation='r'
          height='20'
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
