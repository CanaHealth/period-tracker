import * as React from 'react';

import PinCode from '@/components/pinCode/PinCode';

export default function IndexPage() {
  {
    /* Use Context to set the pincode */
  }

  return (
    <main>
      <section className='flex min-h-screen flex-col items-center justify-center bg-gray-98'>
        <PinCode pincode={[1, 2, 3, 4, 5, 6]} variant='col' />
      </section>
    </main>
  );
}
