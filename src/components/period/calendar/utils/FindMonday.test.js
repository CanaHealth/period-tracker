/* eslint-disable unused-imports/no-unused-imports */
import { describe, expect, it, screen } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import findMonday from '@/compoenent/period/calendar/utils/FindMonday';

describe('findMonday', () => {
  it('should return the first monday of the month', () => {
    const date = new Date(2020, 1, 1);
    expect(findMonday(date)).toEqual(new Date(2020, 0, 4));
  }).timeout(1000);
});
