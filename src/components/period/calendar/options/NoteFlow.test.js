/*
    <div className={clsxm('', className)}>
      <h1 className='w-full text-2xl font-semibold'>Todays flow:</h1>
      <div className=' flex flex-col-reverse items-center justify-center md:flex-row'>
        {buttonProps.map((button, index) => (
          <button
            key={index}
            className={clsxm(
              'm-2 flex h-44 w-44 flex-col items-center justify-center rounded border-2 border-white shadow-sm hover:shadow-md',

              button.text == choice ? 'border border-blue-93' : greyButtonClass
            )}
            onClick={() => handleClick(button.text)}
          >
            <div // dynamically set the color
              className={clsxm(
                'flex flex-col items-center justify-center text-center align-middle',
                button.text == choice ? 'text-indigo-600' : 'text-gray-600'
              )}
            >
              {button.icon}
              {button.text}
            </div>
          </button>
        ))}
      </div>
    </div>
*/

/* eslint-disable unused-imports/no-unused-imports */
import { describe, expect, it, screen } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import * as React from 'react';

import NoteFlow, {
  defaultProps,
} from '@/components/period/calendar/options/NoteFlow';

const defaultNote = <NoteFlow {...defaultProps} />;

describe('NoteFlow', () => {
  it('should render without crashing', () => {
    const { container } = render(defaultNote);
    expect(container).toBeInTheDocument();
  });

  // it('should look the same as snapshot', () => {
  //   const { container } = render(defaultNote);
  //   expect(container).toMatchSnapshot();
  // });

  it('should have no accessibility issues', async () => {
    const { container } = render(defaultNote);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render the correct number of buttons', () => {
    const { container } = render(defaultNote);
    expect(container.querySelectorAll('button').length).toBe(
      defaultProps.buttonProps.length
    );
  });
});
