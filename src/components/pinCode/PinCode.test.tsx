import { render } from '@testing-library/react';
import React from 'react';

import PinCode from '@/components/pinCode/PinCode';

describe('PinCode', () => {
  it('should render', () => {
    const { container } = render(
      <PinCode className='' pincode={[0, 0, 0, 0, 0, 0]} />
    );
    expect(container).toMatchSnapshot();
  });
}); //render the PinCode component with a pincode of [0, 0, 0, 0, 0, 0]
