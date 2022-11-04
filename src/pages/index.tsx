import Calendar from '@comps/calendar/Calendar'
import Layout from '@comps/layout/Layout'
import { Button, Card } from 'flowbite-react'
import Image from 'next/image'
import { useState } from 'react'

export default function HomePage() {
  // use state to store if calender has been interacted with
  const [isCalendarInteracted, setIsCalendarInteracted] = useState(false)

  return (
    <>
      <Layout>
        <div id='calendar' className='mx-auto flex max-w-xl'>
          <Calendar />
        </div>

        <section
          id='hero'
          className='mx-auto flex max-w-2xl flex-col space-y-16'
        >
          <div
            id='hero-text'
            className='mx-auto w-full max-w-xs space-y-2 text-center'
          >
            <h1 className=''>Stay informed about your period</h1>
            <p className=''>
              Knowledge is power, and we help keep yours private
            </p>
          </div>
          <div id='features' className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
            {[
              {
                title: 'Private',
                description: `Storing locked health data on the blockchain is a great way to persist it forever.
                  Only you can unlock your info and understand it.`,
                imgName: 'secure',
                imgAlt:
                  'A cute dog with thier owners finger over its mouth in a shush position',
              },
              {
                title: 'Secure',
                description: `Blockchain data is permanent and tamper-proof. 
                  This makes it a great way to store health data long term.`,
                imgName: 'tamper',
                imgAlt: 'A cute dog behind a fence',
              },
              {
                title: 'Fun',
                description: `Our app is designed to be user-friendly and easy to use. 
                You don’t need any technical knowledge to store your health data on the blockchain.`,
                imgName: 'fun',
                imgAlt: 'A cute dog jumping to catch a ball',
              },
              {
                title: 'Free',
                description: `We do not make any money. This service is free for everyone to use locally and if you want to store your data on the blockchain, there will be a small fee for Gas.`,
                imgName: 'free',
                imgAlt: 'A cute dog wearing sun-glasses',
              },
            ].map((feature, i) => (
              <Card
                key={i}
                // imgAlt={feature.imgAlt}
                // imgSrc={`public/images/features/${feature.imgName}.jpeg`}
              >
                <div className='flex h-full w-full flex-col space-y-2'>
                  <Image
                    src={`/images/features/${feature.imgName}.jpeg`}
                    alt={feature.imgAlt}
                    width={640}
                    height={640}
                    objectFit='cover'
                  />
                  <h3 className='text-center'>{feature.title}</h3>
                  <p className='text-brand-500'>{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
        <section id='CTA' className='flex w-full justify-center'>
          <Button
            className='bg-blue-500'
            size='xl'
            outline
            // onclick navigate to /dashboard
            onClick={() => {
              window.location.href = '/dashboard'
            }}
          >
            Try It Out
          </Button>
        </section>
      </Layout>
    </>
  )
}
