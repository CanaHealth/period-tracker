import Image from 'next/image';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type PhantomLogoProps = {
  size: number;
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

const PhantomLogo: React.FC<PhantomLogoProps> = ({ className, size }) => {
  // TODO:

  return (
    <div className={clsxm('mx-auto', className)}>
      <Image
        src='/logos/phantom-icon-purple.png'
        alt='Phantom wallet logo'
        width={size}
        height={size}
      />
    </div>
  );
};

export default PhantomLogo;
