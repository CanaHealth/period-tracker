/* eslint-disable unused-imports/no-unused-imports */
import { describe, expect, it, screen } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import PinCode from '@/components/pinCode/PinCode';

describe('PinCode', () => {
  it('should render', () => {
    const { container } = render(
      <PinCode className='' pincode={[0, 0, 0, 0, 0, 0]} />
    );
    expect(container).toMatchSnapshot();
  });
});
