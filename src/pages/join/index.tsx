import * as React from 'react';

import PinCode from '@/components/pinCode/PinCode';

export default function IndexPage() {
  const [publicKey, setPublicKey] = React.useState("");

  return (
    <main className='bg-gray-98'>
      <div className='flex flex-row pt-8 text-center justify-center'>
        {publicKey != "" ? (
          <>
            <img className='w-8 rounded-full' src="/images/noun-bird-5005114.svg" />
            <h2 className='text-black font-semibold'>Welcome {publicKey.slice(0, 10)}...</h2>
          </>
        ) : <></>}
      </div>
      <section className='flex min-h-screen flex-col items-center justify-center'>
        <PinCode pincode={[0, 0, 0, 0, 0, 0]} setPublicKey={setPublicKey} variant='col' />
      </section>
    </main>
  );
}
