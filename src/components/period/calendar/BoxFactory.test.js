/* eslint-disable unused-imports/no-unused-imports */
import { afterAll, clearAllMocks, describe, expect, it } from '@jest/globals';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { newToday } from '@/util/calendarFunc';

import BoxFactory from './BoxFactory';

// -----------------------------------------------------------------------------
// test box factory local storage behavoir
// -----------------------------------------------------------------------------

const unixTimeStamp = 1660550400000;

const date = new Date(unixTimeStamp);

const defaultTestID = 'handle-flow-change';

describe('BoxFactory', () => {
  it('renders without crashing', () => {
    render(<BoxFactory date={date} />);
  });

  // snapshot
  it('matches snapshot', () => {
    const BoxComp = render(<BoxFactory date={date} />);
    expect(BoxComp.asFragment()).toMatchSnapshot();
  });

  it('has a11y violations', async () => {
    const BoxComp = render(<BoxFactory date={date} />);
    const results = await axe(BoxComp.container);
    expect(results).toHaveNoViolations();
  });

  it('got 1 click - saved howheavy to localStorage', () => {
    const BoxComp = render(<BoxFactory date={date} />);
    const button = BoxComp.getByTestId(defaultTestID);
    const dateString = String(unixTimeStamp);
    fireEvent.click(button);
    expect(localStorage.getItem(dateString)).toEqual('light');
  });

  it('got 2 clicks - saved howheavy to localStorage', () => {
    const BoxComp = render(<BoxFactory date={date} />);
    const button = BoxComp.getByTestId(defaultTestID);
    const dateString = String(unixTimeStamp);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(localStorage.getItem(dateString)).toEqual('average');
  });

  it('got 3 clicks - saved howheavy to localStorage', () => {
    const BoxComp = render(<BoxFactory date={date} />);
    const button = BoxComp.getByTestId(defaultTestID);
    const dateString = String(unixTimeStamp);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(localStorage.getItem(dateString)).toEqual('heavy');
  });

  it('got 4 clicks - did not save howheavy to localStorage because we done save none ', () => {
    const BoxComp = render(<BoxFactory date={date} />);
    const button = BoxComp.getByTestId(defaultTestID);
    const dateString = String(unixTimeStamp);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(localStorage.getItem(dateString)).toBeNull();
  });

  it('got 5 clicks - saved howheavy to localStorage', () => {
    const BoxComp = render(<BoxFactory date={date} />);
    const button = BoxComp.getByTestId(defaultTestID);
    const dateString = String(unixTimeStamp);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(localStorage.getItem(dateString)).toEqual('light');
  });

  afterAll(() => {
    localStorage.clear();
  });
});
