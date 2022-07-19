import * as React from 'react';

export default function HomeCards({ stats, title, subtitle }) {
  return (
    <div className='mx-auto mt-16  px-4 sm:max-w-xl md:max-w-7xl'>
      <div className='mx-auto max-w-3xl'>
        <h2 className='my-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl'>
          {title}
        </h2>

        <p className='text-xl text-gray-900 md:text-2xl'>
          {subtitle.start}{' '}
          <span className='text-secondary-600'>{subtitle.greem}</span>{' '}
          {subtitle.end}
        </p>

        <div className='m-auto mb-14 max-w-xs '>
          <div className='my-16 mx-auto w-44 border-b-2 border-primary-900' />

          {stats.map((stat, index) => (
            <div key={index}>
              <div className='mx-auto max-w-xs text-center'>
                <p className='mb-4 text-lg text-gray-900 sm:text-3xl sm:tracking-tight md:text-2xl lg:text-2xl'>
                  {stat.top}
                </p>
                <p className='mb-4 text-6xl font-extrabold text-gray-900 sm:text-7xl sm:tracking-tight lg:text-8xl'>
                  {stat.stat}
                </p>
                <p className='mb-4 text-lg text-gray-900  sm:text-3xl sm:tracking-tight md:text-2xl lg:text-2xl'>
                  {stat.bot}
                </p>
                <div className='my-16 mx-auto w-44 border-b-2 border-primary-900' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
