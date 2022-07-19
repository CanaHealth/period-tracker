import Image from 'next/image';
import AGNR from 'public/images/Partners_Logo/College_of_Agriculture_and_Natural_Resources_Logo.jpg';
import doGood from 'public/images/Partners_Logo/Do_Good_Institute_Logo.jpeg';
import idahoAg from 'public/images/Partners_Logo/Leadership_Idaho_Agriculture_Logo.jpeg';
import vitta from 'public/images/Partners_Logo/Vitta_Solutions_Logo.png';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

// AGNR
// doGood
// idahoAg
// vitta

const PartnersLogoOptions = {
  AGNR: {
    src: AGNR,
    alt: 'College of Agriculture and Natural Resources',
    width: 860,
    height: 192,
  },
  doGood: {
    src: doGood,
    alt: 'Do Good Institute logo',
    width: 1280,
    height: 1280,
  },
  idahoAg: {
    src: idahoAg,
    alt: 'Leadership Idaho Agriculture logo',
    width: 1280,
    height: 1280,
  },
  vitta: {
    src: vitta,
    alt: 'Vitta Solutions logo',
    width: 1841,
    height: 1841,
  },
};

type LogoProps = {
  PartnersLogo: keyof typeof PartnersLogoOptions;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Logo({ PartnersLogo, className, ...rest }: LogoProps) {
  const { alt, src, width, height } = PartnersLogoOptions[PartnersLogo];
  return (
    <div
      className={clsxm(
        'mx-2 flex flex-shrink-0 flex-grow justify-center align-middle lg:flex-grow-0',
        className
      )}
      {...rest}
    >
      <div className='my-auto w-28 xl:w-32'>
        <Image
          className='mx-auto	mix-blend-darken'
          src={src}
          alt={alt}
          layout='responsive'
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}
