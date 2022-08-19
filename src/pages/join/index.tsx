import * as React from 'react'

import PinCode from '@/components/pinCode/PinCode'

export default function IndexPage() {
  const [publicKey, setPublicKey] = React.useState('')

  return (
    <main className='bg-gray-light-dark'>
      <div className='flex flex-row justify-center pt-8 text-center'>
        {publicKey != '' ? (
          <>
            <img
              className='w-8 rounded-full'
              src='/images/noun-bird-5005114.svg'
            />
            <h2 className='font-semibold text-black'>
              Welcome {publicKey.slice(0, 10)}...
            </h2>
          </>
        ) : (
          <></>
        )}
      </div>
      <section className='flex min-h-screen flex-col items-center justify-center'>
        <PinCode
          pincode={[0, 0, 0, 0, 0, 0]}
          setPublicKey={setPublicKey}
          variant='col'
        />
      </section>
    </main>
  )
}
