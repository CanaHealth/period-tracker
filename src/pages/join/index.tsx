import * as React from 'react';

import PinCode from '@/components/pinCode/PinCode';

export default function IndexPage() {
  return (
    <main>
      <section className='flex min-h-screen flex-col items-center justify-center bg-gray-98'>
        <PinCode pincode={[0, 0, 0, 0, 0, 0]} variant='col' />
      </section>
    </main>
  );
}
