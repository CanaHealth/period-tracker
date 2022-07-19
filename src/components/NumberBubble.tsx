import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Auto from '~/svg/Auto.svg';

type GlassCardProps = {
  prompt: string;
  title: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function GlassCard({
  className,
  prompt,
  title,
  ...rest
}: GlassCardProps) {
  return (
    <div className={clsxm('relative h-screen w-full', className)} {...rest}>
      <div
        className=' 
       absolute left-1/2 top-1/2 z-10 mx-auto grid w-full max-w-sm -translate-x-2/4 -translate-y-2/4 grid-flow-row gap-3 rounded-2xl  
      bg-primary-900 bg-opacity-50 p-9
      opacity-100 shadow-md shadow-base-500 backdrop-blur-sm backdrop-filter md:max-w-lg '
      >
        <h3 className=' text-4xl font-black text-white'>{title}</h3>
        <p className=' text-xl text-primary-100'>{prompt}</p>
      </div>

      <Auto className=' absolute left-1/2 top-1/4 -z-10 h-auto w-full -translate-y-1/2 -translate-x-2/4 scale-100 md:top-44 md:scale-90  xl:scale-50' />
    </div>
  );
}
// <div className='absolute  inset-full -z-10 h-full w-full -translate-x-full -translate-y-full '></div>
{
  /* <div className='background rounded-2xl border-b border-gray-100 bg-primary  bg-opacity-90 bg-cover bg-center'></div> */
}
