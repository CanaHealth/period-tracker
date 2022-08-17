import * as React from 'react';

import PinCode from '@/components/pinCode/PinCode';

import Calendar from '../components/period/calendar/Calendar';
import Head from 'next/head';

export default function HomePage() {
  const [publicKey, setPublicKey] = React.useState('');

  return (
    <>
      <Head>
        <title>Cana Health</title>
      </Head>
      <main className='min-h-screen'>
        <div className='mx-auto flex h-screen max-w-md flex-col'>
          <div className='mx-3 rounded-b-lg bg-gray-98'>
            <Calendar />
          </div>

          <div //* public key
            className='mt-8 flex flex-row justify-center text-center'
          >
            <div className='mx-auto w-64 rounded-lg bg-gray-99 p-4'>
              <h4 className='flex max-w-xs flex-wrap break-words break-all font-semibold text-black'>
                Public key:
              </h4>
              <p className='mx-auto flex max-w-xs flex-wrap break-words break-all text-center text-black'>
                {publicKey ? publicKey : '...'}
              </p>
            </div>
          </div>
          <div className='mt-16 flex flex-col items-center justify-center'>
            <PinCode
              pincode={[0, 0, 0, 0, 0, 0]}
              setPublicKey={setPublicKey}
              variant='col'
            />
          </div>
        </div>
      </main>
    </>
  );
}

/*
        <div className='mx-8 mb-auto mt-16'>
          <TitleText username={userName} />
        </div>
        
          <div className=' flex  w-11/12 flex-col space-y-4 md:mr-auto'>
            <InfoCallout description='Chance of Pregnancy' value='low' />
            <InfoCallout description='Next Cycle In' value='2 weeks' />
          </div>

                      <CycleCircle timeString='on day' numberString='5' />

        div className='relative flex flex-row items-end justify-around p-2'>
          <MenuButtons size='sm'>⚙️</MenuButtons>
          <MenuButtons size='lg'>📝</MenuButtons>
          <MenuButtons size='sm'>📅</MenuButtons>
          <div className='absolute inset-0 -z-10 rounded-t-3xl bg-gray-98' />
        </div>
*/
