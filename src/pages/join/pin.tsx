import * as React from 'react';

import PinCode from '@/components/pinCode/PinCode';

export default function PinPage() {
  return (
    <main>
      <section className=''>
        <div className='layout min-h-screen py-20'>
          <PinCode className='' pincode={[0, 0, 0, 0, 0, 0]} />
        </div>
      </section>
    </main>
  );
}
