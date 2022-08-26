import { useWeb3 } from '@3rdweb/hooks'
import Head from 'next/head'

import Layout from '@/components/layout/Layout'
import Calendar from '@/components/period/calendar/Calendar'
import BigButton from '@/components/period/calendar/options/BigButton'

export default function HomePage() {
  const { connectWallet, address, error } = useWeb3()
  error ? console.log(error) : null



  return (
    <Layout>
      <Head>
        <title>Cana Health</title>
      </Head>
      <main className='h-full min-h-screen'>
        <div className='mx-auto flex max-w-xl flex-col justify-start space-y-10'>
          <Calendar />

          {address ? (
            <>
              <p className='cursor-pointer rounded-full bg-gray-200 px-2 py-1 font-mono font-medium duration-100 hover:bg-gray-300'>
                {address}
              </p>
              <BigButton OnClickDo={() => connectWallet('injected')} height='20'>
                Encrypt Data
              </BigButton>
            </>
          ) : (
            <BigButton OnClickDo={() => connectWallet('injected')} height='20'>
              Connect Wallet
            </BigButton>
          )}
        </div>
      </main>
    </Layout>
  )
}

/*
  const [publicKey, setPublicKey] = React.useState('')
  const [connected, setConnected] = React.useState(false)
  const [IsModalOpen, setIsModalOpen] = React.useState(false)

  const WalletProps = [
    {
      text: 'Metamask',
      icon: <MetaMaskLogo size={20} />,
    },
    {
      text: 'Phantom',
      icon: <PhantomLogo size={20} />,
    },
  ]
  
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



        <section className='my-8 flex flex-col items-center justify-center'>
            {connected ? (
              //! If connected render
              <>
                <Modal
                  isOpen={IsModalOpen}
                  setIsOpen={setIsModalOpen}
                  onClick={() => {
                    setConnected(true)
                    setIsModalOpen(false)
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
                    setConnected(true)
                    setIsModalOpen(false)
                  }}
                  title='Connect Wallet'
                  description='Please connect your wallet to continue'
                  btnlabel='Connect'
                />
                <Accordion
                  title='Connect wallet'
                  description={
                    <div className='flex flex-col items-center justify-center space-y-3'>
                      
                      {WalletProps.map((wallet, key) => (
                        <BigButton
                          key={key}
                          text={wallet.text}
                          icon={wallet.icon}
                          height='16'
                          OnClickDo={() => setIsModalOpen(true)}
                        />
                      ))}
                    </div>
                  }
                />
              </>
            )}
          </section> 
*/
