import * as React from 'react';

import Logo from './Logo';

export default function Logo_Ribbon() {
  return (
    <div className=' mx-auto max-w-3xl'>
      <div className='mx-auto pt-8 sm:px-6 lg:px-8'>
        <h2 className='text-center text-sm font-extrabold text-primary-900'>
          partnered with:
        </h2>
        <div className='flow-root'>
          <div className='mx-4 flex flex-wrap justify-between'>
            <Logo PartnersLogo='AGNR' />
            <Logo PartnersLogo='doGood' />
            <Logo PartnersLogo='idahoAg' />
            <Logo PartnersLogo='vitta' />
          </div>
        </div>
      </div>
    </div>
  );
}
