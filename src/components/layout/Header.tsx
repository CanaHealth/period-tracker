import Link from 'next/link';

import Roots_Logo_Small from '~/svg/Roots_Logo_Small.svg';

export default function Example() {
  return (
    <div className='relative mx-auto  bg-primary-900 px-4 sm:px-6'>
      <div className='flex items-center justify-between py-1 md:justify-start md:space-x-10'>
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <Link href='/'>
            <a>
              <span className='sr-only'>Roots Logo Small</span>
              <Roots_Logo_Small className=' h-20 w-44' />
            </a>
          </Link>
        </div>

        <div className='flex items-center justify-end md:flex-1 lg:w-0'>
          <Link href='https://secure.givelively.org/donate/roots-africa-inc'>
            <a className='inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary-700 px-8 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-400'>
              Support
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
