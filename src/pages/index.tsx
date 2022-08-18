import Head from 'next/head';
import * as React from 'react';

import Accordion from '@/components/basic/Accordion';
import Modal from '@/components/basic/Modal';
import Layout from '@/components/layout/Layout';
import MetaMaskLogo from '@/components/logos/MetaMaskLogo';
import PhantomLogo from '@/components/logos/PhantomLogo';
import Calendar from '@/components/period/calendar/Calendar';
import BigButton from '@/components/period/calendar/options/BigButton';

export default function HomePage() {
  const [publicKey, setPublicKey] = React.useState('');
  const [connected, setConnected] = React.useState(false);
  const [IsModalOpen, setIsModalOpen] = React.useState(false);

  const WalletProps = [
    {
      text: 'Metamask',
      icon: <MetaMaskLogo size={20} />,
    },
    {
      text: 'Phantom',
      icon: <PhantomLogo size={20} />,
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Cana Health</title>
      </Head>
      <main className='h-full min-h-screen'>
        <div className='mx-auto flex max-w-xl flex-col justify-start'>
          <Calendar />
          <section className='my-8 flex flex-col items-center justify-center'>
            {connected ? (
              //! If connected render
              <>
                <Modal
                  isOpen={IsModalOpen}
                  setIsOpen={setIsModalOpen}
                  onClick={() => {
                    setConnected(true);
                    setIsModalOpen(false);
                  }}
                  title='Authorise data encryption and NFT minting'
                  description='Please authorise Cana Health to mint an NFT on your behalf using funds from your wallet. This will allow you to track your period and gain insights into your health.'
                  btnlabel='Accept'
                />
                <BigButton
                  text='save on-chain'
                  height='20'
                  className='text-sm'
                  OnClickDo={() => setIsModalOpen(true)}
                />
              </>
            ) : (
              //! If not connected render
              <>
                <Modal
                  isOpen={IsModalOpen}
                  setIsOpen={setIsModalOpen}
                  onClick={() => {
                    setConnected(true);
                    setIsModalOpen(false);
                  }}
                  title='Connect Wallet'
                  description='Please connect your wallet to continue'
                  btnlabel='Connect'
                />
                <Accordion
                  title='Connect wallet'
                  description={
                    <div className='flex flex-col items-center justify-center space-y-3'>
                      {/* map walletprops obkject */}
                      {WalletProps.map((wallet, key) => (
                        <BigButton
                          key={key}
                          text={wallet.text}
                          icon={wallet.icon}
                          height='16'
                          className='text-sm'
                          OnClickDo={() => setIsModalOpen(true)}
                        />
                      ))}
                    </div>
                  }
                />
              </>
            )}
          </section>
        </div>
      </main>
    </Layout>
  );
}

/*

<div //* public key
            className='mt-8 flex flex-row justify-center text-center'
          >
            <div className='mx-auto w-64 rounded-lg bg-gray-light-mid p-4'>
              <h4 className='flex max-w-xs flex-wrap break-words break-all font-semibold text-black'>
                Public key:
              </h4>
              <p className='mx-auto flex max-w-xs flex-wrap break-words break-all text-center text-black'>
                {publicKey ? publicKey : '...'}
              </p>
            </div>
          </div>

          <div className='mt-16 flex flex-col items-center justify-center'>
            <PinCode pincode={[]} setPublicKey={setPublicKey} variant='col' />
          </div> 

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
          <div className='absolute inset-0 -z-10 rounded-t-3xl bg-gray-light-dark' />
        </div>
*/
