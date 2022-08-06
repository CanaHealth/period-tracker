/* eslint-disable unused-imports/no-unused-imports */
import { describe, expect, it, screen } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import * as React from 'react';

import Box from '@/components/period/calendar/Box';
import { defaultProps } from '@/components/period/calendar/options/NoteFlow';
import NoteFlow from '@/components/period/calendar/options/NoteFlow';
import LaunchModal from '@/components/popover/LaunchModal';

describe('LaunchModal', () => {
  it('is accessible', async () => {
    const { container } = render(
      <LaunchModal visible={false} buttonOf={Box}>
        <NoteFlow {...defaultProps} />
      </LaunchModal>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('is accessible with buttonOf', async () => {
    const { container } = render(
      <LaunchModal visible={false} buttonOf={Box}>
        <NoteFlow {...defaultProps} />
      </LaunchModal>
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should launch the modal when the button is clicked', () => {
    const { getByRole } = render(
      <LaunchModal visible={false} buttonOf={<Box />}>
        <NoteFlow {...defaultProps} />
      </LaunchModal>
    );
    const button = getByRole('button', { name: 'launch-modal' });
    fireEvent.click(button);

    const modal = getByRole('dialog');
    expect(modal).not.toHaveClass('hidden');
  });

  it('should close the modal when the button is clicked and the modal is currently open', () => {
    const { getByRole, getByLabelText } = render(
      <LaunchModal visible={true} buttonOf={<Box />}>
        <NoteFlow {...defaultProps} />
      </LaunchModal>
    );
    const button = getByRole('button', { name: 'launch-modal' });
    fireEvent.click(button);

    const modal = getByLabelText('model');
    expect(modal).toHaveClass('hidden');
  });
});
