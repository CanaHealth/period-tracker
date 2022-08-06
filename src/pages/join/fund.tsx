import InfoCard from '@/components/layout/InfoCard';

export default function FundPage() {
  return (
    <main>
      <section className='layout min-h-screen py-20'>
        <InfoCard
          walletAddress='0x2a65aca4d5fc5b5c859090a6c34d164135398226'
          subheading='or use an existing wallet'
          heading='Fund your wallet with $1.'
          description='Visit moonpay to fund your wallet. You can fund your wallet by
        sending a payment to the following address:'
          buttonText='Checkout on Moonpay'
        />
      </section>
    </main>
  );
}
