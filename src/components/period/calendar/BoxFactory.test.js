/* eslint-disable unused-imports/no-unused-imports */
import { describe, expect, it, screen } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import BoxFactory from './BoxFactory';

// -----------------------------------------------------------------------------
// test box factory local storage behavoir
// -----------------------------------------------------------------------------

describe('BoxFactory', () => {
  beforeEach(() => {
    // to fully reset the state between tests, clear the storage
    localStorage.clear();
    // and reset all mocks
    jest.clearAllMocks();

    // clearAllMocks will impact your other mocks too, so you can optionally reset individual mocks instead:
    localStorage.setItem.mockClear();
  });

  it('should render without crashing', () => {
    render(<BoxFactory />);
  });
});
