/* eslint-disable unused-imports/no-unused-imports */
import { afterAll, describe, expect, it } from '@jest/globals'
import { cleanup, fireEvent, render } from '@testing-library/react'

import { mockFlowInfoFromStorage } from '@/components/period/calendar/Calendar'

import {
  daysFrom,
  findPrevMonday,
  manyWeeks,
  normalizeDate,
  weekOfDates,
  weeksFrom,
} from '@/util/calendarFunc'

// Mon Aug 15 2022 08:00:00 GMT-0400 (Eastern Daylight Time)
const unixTimeDefault = 1660564800000

const defaultDay = new Date(unixTimeDefault)

describe('normalizeDate', () => {
  it('returns a date object', () => {
    const date = normalizeDate(defaultDay)
    expect(date).toBeInstanceOf(Date)
  })

  it('returns a date object with time 00:00:01', () => {
    const date = normalizeDate(defaultDay)
    expect(date.getHours()).toEqual(8)
    expect(date.getMinutes()).toEqual(0)
    expect(date.getSeconds()).toEqual(0)
    expect(date.getMilliseconds()).toEqual(0)
  })
})

// test daysFrom
describe('daysFrom', () => {
  it('return the previous day', () => {
    const diff = -1
    const dateForTest = daysFrom(defaultDay, diff)
    const dayOfMonth = defaultDay.getDate() + diff
    expect(dateForTest.getDate()).toEqual(dayOfMonth)
  })
  it('return the previous week', () => {
    const diff = -7
    const dateForTest = daysFrom(defaultDay, diff)
    const dayOfMonth = defaultDay.getDate() + diff
    expect(dateForTest.getDate()).toEqual(dayOfMonth)
  })
})

// test WeeksFrom
describe('weeksFrom', () => {
  it('return the previous week', () => {
    const diff = -1
    const dateForTest = weeksFrom(defaultDay, diff)
    const dayOfMonth = defaultDay.getDate() + diff * 7
    expect(dateForTest.getDate()).toEqual(dayOfMonth)
  })
})

// test findPrevMonday
describe('findPrevMonday', () => {
  it('returns the previous Monday', () => {
    const dateForTest = findPrevMonday(defaultDay)
    const dayOfMonth = defaultDay.getDate()
    expect(dateForTest.getDate()).toEqual(dayOfMonth)
  })
  it('returns the monday from the week before', () => {
    const defaultPrevMonday = findPrevMonday(defaultDay)
    const diff = -3
    const dateForTest = findPrevMonday(daysFrom(defaultDay, diff))
    const dayOfMonth = defaultPrevMonday.getDate() - 7
    expect(dateForTest.getDate()).toEqual(dayOfMonth)
  })
})

// test weekOfDates
describe('weekOfDates', () => {
  it('returns an array of 7 objects { timestamp: flow Intensity }', () => {
    const week = weekOfDates(defaultDay, mockFlowInfoFromStorage)
    expect(Object.keys(week).length).toEqual(7)
  })
})

// test manyWeeks
describe('manyWeeks', () => {
  it('returns an array of 5 arrays of 7 objects { timestamp: flow Intensity }', () => {
    const weeks = manyWeeks(defaultDay, 5, mockFlowInfoFromStorage)
    expect(Object.keys(weeks).length).toEqual(5 * 7)
  })
})

afterAll(() => {
  cleanup()
  localStorage.clear()
})
