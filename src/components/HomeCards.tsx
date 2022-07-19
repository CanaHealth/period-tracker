import Image from 'next/image';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type HomeCardsProps = {
  prompt: string;
  title: string;
  src: string;
  alt: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function HomeCards({
  className,
  prompt,
  title,
  src,
  alt,
  ...rest
}: HomeCardsProps) {
  return (
    <div className={clsxm('mb-14 w-full', className)} {...rest}>
      <div className='my-5 pt-3'>
        <h2 className='text-xl md:text-3xl'>{title}</h2>
        <p className='text-lg md:text-xl'>{prompt}</p>
      </div>
      <div className='relative h-96 w-auto'>
        <Image
          alt={alt}
          src={src}
          layout='fill'
          className='relative object-cover'
        />
      </div>
    </div>
  );
}
