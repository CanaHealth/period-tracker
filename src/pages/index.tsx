import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import HomeCards from '@/components/HomeCards';
import Logo_Ribbon from '@/components/images/logos/Logo_Ribbon';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import StatsSection from '@/components/StatsSection';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='min-h-screen bg-base-100  text-primary-800 '>
        {/* Mock Header */}
        <Header />

        {/* H1 - Hero Title */}
        <h1
          className='w-7/8 mx-auto mt-20 mb-4 max-w-5xl px-2 text-center text-4xl font-black 
          leading-snug tracking-wide  sm:text-6xl md:mt-32 md:text-6xl lg:text-7xl xl:text-8xl'
        >
          Africa doesn’t need charity, it needs{' '}
          <span className='text-secondary-500'>changemakers.</span>
        </h1>

        {/* Logo Ribbon */}
        <Logo_Ribbon />

        {/* Roots_Africa_Marching_Changemakers_Zoomed */}
        <div className='relative h-96 w-auto md:h-screen'>
          <Image
            alt='Change-Makers marching '
            src='/images/Roots_Africa_Marching_Changemakers.png'
            layout='fill'
            className='relative object-cover object-top'
          />
        </div>

        <section className='mx-auto max-w-3xl pt-16 text-xl'>
          <div className=' grid grid-flow-row gap-8 px-8'>
            {/* Hero Image */}
            <div className='grid grid-flow-row gap-10 py-10'>
              <p className='text-center font-semibold md:text-3xl '>
                Despite $1 Trillion in aid given to Africa in the past decade,
                the number of those who are undernourished{' '}
                <span className='text-accent-500'>
                  increased by 89.1 million
                </span>
                .
              </p>
              <Link href='https://secure.givelively.org/donate/roots-africa-inc'>
                <a className=' mx-auto inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary-700 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-400'>
                  Support
                </a>
              </Link>
            </div>

            <HomeCards
              prompt='To end hunger'
              title='We teach resilient agriculture'
              alt='Educator Teaching Student About Resilient Agriculture'
              src='/images/Roots_Africa_Educator_Teaching_Student_About_Resilient_Agriculture3.png'
            />
            <HomeCards
              prompt='To end poverty'
              title='We nurture entrepreneurship'
              alt='Educator Teaching Student About Resilient Agriculture'
              src='/images/Roots_Africa_Educator_Teaching_Student_About_Entreprenuership.png'
            />
          </div>
        </section>

        <section className='mx-auto max-w-7xl py-10 px-4 sm:py-20 sm:px-6 lg:px-8'>
          {/* The Strategies Section */}
          <div>
            <div className='text-center'>
              <h2 className='mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
                The four strategies
              </h2>
              <p className='mx-auto mt-5 max-w-xl text-xl text-gray-500'>
                Through trial and error we settled on four strategies, and
                devised metrics to measure impact and guide our iterative
                decision making.
              </p>
            </div>
          </div>
          {/* <Stats /> */}
        </section>

        {/* The Strategies Section */}
        <div className=' relative mb-4 h-96  w-full'>
          <Image
            src='/svg/Autonomy.svg'
            alt='Image of person in maze, choosing which path to take.'
            layout='fill'
            className=' object-cover'
          />
        </div>
        <StatsSection
          title='Cause Autonomy:'
          subtitle={{
            start: 'We empower local',
            greem: 'changemakers',
            end: '  providing training, resources and a global network. We are successful when they leverage lessons learned and go out to influence local farmers into adopting resilient agriculture.',
          }}
          stats={[
            { top: 'We developed', stat: '50', bot: 'changemakers.' },
            { top: 'Local changemakers trained', stat: '1551', bot: 'farmers' },
            {
              top: '',
              stat: '35%',
              bot: 'have continued to train farmers even without our direct support.',
            },
          ]}
        />

        <div className=' relative mb-4 h-96 w-full px-3 md:h-screen'>
          <Image
            src='/svg/Impact.svg'
            alt='Image of person about to run into human sized dominoes.'
            layout='fill'
            className=' mx-auto object-cover object-left md:object-contain md:object-bottom'
          />
        </div>
        <StatsSection
          title='Multiply Impact'
          subtitle={{
            start:
              'To truly make a dent in the fight against hunger we cannot afford to grow incrementally. We must achieve',
            greem: 'exponential growth.',
            end: '',
          }}
          stats={[
            {
              top: '',
              stat: '20x',
              bot: 'Each local changemaker goes out and teaches at least 20 farmers',
            },
            {
              top: '',
              stat: '74',
              bot: 'Thereby our impact spread to 74 villages',
            },
          ]}
        />
        <div className=' relative mb-4 h-96 w-full xl:h-screen'>
          <Image
            src='/svg/World.svg'
            alt='Image of the world, with people communicating across continents'
            layout='fill'
            className=' object-cover object-bottom xl:object-contain'
          />
        </div>
        <StatsSection
          title='Engage The World'
          subtitle={{
            start: 'African',
            greem: 'changemakers',
            end: 'are connected to coaches and experts all across the world to amplify their ability to solve local problems and build a global network. This is not a one way street. Coaches and experts have reported that volunteering has expanded their sense of global responsibility, and empathy.',
          }}
          stats={[
            {
              top: '',
              stat: '53%',
              bot: 'of our changemakers have stayed connected with their mentors and instructors since 2018',
            },
            {
              top: '',
              stat: '26%',
              bot: 'of changemakers engage with their global counterparts on a monthly basis',
            },
          ]}
        />
        <div className=' relative mb-4 h-96 w-full xl:h-screen'>
          <Image
            src='/svg/Learn.svg'
            alt='Continuous learning, an image of a person writing in a human sized book'
            layout='fill'
            className=' object-cover object-bottom xl:object-contain'
          />
        </div>
        <StatsSection
          title='Continue Learning'
          subtitle={{
            start:
              'Our process ensure we continue to learn because what worked yesterday may not work tomorrow. We inspect our progress by tracking key metrics and adapting our plans as we experiment and learn more.',
            greem: '',
            end: '',
          }}
          stats={[
            {
              top: 'We have piloted',
              stat: '8',
              bot: 'initiatives, gathered data and continuously refined our strategies',
            },
          ]}
        />

        <section className='mx-auto max-w-7xl py-10 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <div>
            <div className='text-center'>
              <p className='mx-auto mt-5 max-w-xl text-xl text-gray-500'>
                As we learned more we have focused on just two, Changemaker
                development for Farming and for Entrepreneurship.
              </p>
            </div>
          </div>
        </section>

        <section className='mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8'>
          {/* The Strategies Section */}
          <div>
            <div className='text-center'>
              <h2 className='mb-3 mt-5 text-xl font-extrabold text-gray-900 sm:tracking-tight'>
                We think you would look great in these shirts
              </h2>
              <Image
                src='/images/Store/Shirts_Teaser.png'
                alt='Image of person about to run into human sized dominoes.'
                width={2040}
                height={422}
                layout='responsive'
                className=' mx-auto my-16 object-contain'
              />
              <Link href='https://shop.rootsafrica.org'>
                <a
                  className=' mx-auto mt-3 mb-16 inline-flex items-center justify-center whitespace-nowrap rounded-md border 
                border-transparent bg-primary-300 px-16 py-2 text-base font-semibold text-white 
                shadow-sm hover:bg-primary-400'
                >
                  Shop
                </a>
              </Link>
            </div>
          </div>
        </section>

        <Header />
      </main>
    </Layout>
  );
}
