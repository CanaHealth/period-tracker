import React from 'react'
import { useState } from 'react'
import { HiBadgeCheck } from 'react-icons/hi'

import clsxm from '@/lib/clsxm'

import BigButton from '@/components/buttons/BigButton'
import PinInput from '@/components/pinCode/PinInput'

import { encryptData, getDecryptedWallet } from '@/util/dataCryptoOperations'
import { saveDataOnChain } from '@/util/saveOnChain'
import {
  createSolanaWallet,
  decryptWallet,
  encryptWallet,
  getWalletFromLocalStorage,
  solanaWallet,
  storePasscodeAsCookie,
  storeWalletInLocalStorage,
} from '@/util/WalletOperations'
import { usableSecretKey } from '@/util/WalletOperations'

import AcceptModal from './AcceptModal'

type PinCodeProps = {
  pincode: number[]
  className?: string
  variant?: 'row' | 'col'
  setPublicKey: React.Dispatch<React.SetStateAction<string>>
} & React.ComponentPropsWithoutRef<'div'>

const PinCode: React.FC<PinCodeProps> = ({
  className,
  pincode,
  variant = 'row',
  setPublicKey,
}) => {
  const [loading, setLoading] = useState(false)

  const [pin, setPin] = useState<number[]>(pincode)
  const [open, setOpen] = useState(false)
  const [refIndex, setRefIndex] = useState<number>(0)
  const [nftID, setNftID] = useState<string>('')
  const [blockExplorer, setBlockExplorer] = useState<boolean>(false)
  const [encData, setEncData] = useState<string>('')

  const onChangeDigits = (value: number, index: number) => {
    setPin(pin.map((digit, i) => (i === index ? value : digit)))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event

    switch (key) {
      case 'ArrowLeft':
        setRefIndex(Math.max(0, refIndex - 1))
        break
      case 'ArrowRight':
        setRefIndex(Math.min(pin.length - 1, refIndex + 1))
        break
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
        onChangeDigits(Number(key), refIndex)
        setRefIndex(Math.min(pin.length - 1, refIndex + 1))
        break

      default:
        break
    }
  }

  const launchBlockExplorer = () => {
    const url = `https://solscan.io/account/${nftID}`
    window.open(url, '_self')
  }

  const submitPinCode = () => {
    const pinConcat = pin.join('') // Concatenated pincode as string

    if (pin.length === 6) {
      if (getWalletFromLocalStorage().publicKey === '') {
        const wallet = createSolanaWallet()

        // Pass in pin in string format to encrypt wallet.
        const encryptedWallet: solanaWallet = encryptWallet(wallet, pinConcat)

        setPublicKey(encryptedWallet.publicKey)

        // Store wallet in local storage.
        storeWalletInLocalStorage(encryptedWallet)

        storePasscodeAsCookie(pinConcat)
      } else {
        const encryptedWallet = getWalletFromLocalStorage()

        const decryptedWallet: solanaWallet = decryptWallet(
          encryptedWallet,
          pinConcat
        )

        setPublicKey(encryptedWallet.publicKey)

        storePasscodeAsCookie(pinConcat)
      }

      const decryptedWallet: solanaWallet = getDecryptedWallet(null)

      setEncData(
        JSON.stringify(
          encryptData(
            localStorage.getItem('flowData')!,
            usableSecretKey(decryptedWallet.secretKey)
          ),
          null,
          4
        )
      )

      console.log(
        encryptData(
          localStorage.getItem('flowData')!,
          usableSecretKey(decryptedWallet.secretKey)
        )
      )
    }
  }

  const handleAccept = async () => {
    setLoading(true)
    setBlockExplorer(false)

    // TODO: Handle expired cookie.

    const decryptedWallet: solanaWallet = getDecryptedWallet(null)

    saveDataOnChain(
      localStorage.getItem('flowData'),
      usableSecretKey(decryptedWallet.secretKey)
    )
      .then((id) => {
        setLoading(false)
        setNftID(id)
        setBlockExplorer(true)
      })
      .catch((err) => {
        setLoading(false)
        throw err
      })
  }

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
          handleSubmit={handleAccept}
          loading={loading}
          blockExplorer={blockExplorer}
          launchBlockExplorer={launchBlockExplorer}
          data={encData}
        />

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
            submitPinCode()
            setOpen(true)
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
  )
}

export default PinCode
