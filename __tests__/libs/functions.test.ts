import { calcElapsedTime, formatDate, isWithinPeriodOfTime } from '@/libs/functions'

describe('【formatDate】Function to get a dot-to-dot date string.', () => {
  test('success: param Date', () => {
    const date = new Date(2020, 1, 1)
    expect(formatDate(date)).toBe('2020.02.01')
  })
  test('success: param Number', () => {
    const date = 1653231600000
    expect(formatDate(date)).toBe('2022.05.23')
  })
  test('error: param Date', () => {
    const date = new Date(2020, 1, 1)
    expect(formatDate(date)).not.toBe('2020.03.01')
  })
  test('error: param Number', () => {
    const date = 1653231600000
    expect(formatDate(date)).not.toBe('2022.04.23')
  })
  test('error: format', () => {
    const date = 1653231600000
    expect(formatDate(date)).not.toBe('2022-04-23')
  })
})

describe('【calcElapsedTime】Function to look at a date and calculate the number of days elapsed.', () => {
  test('success: 2 Days by Date', () => {
    const date1 = new Date(2020, 1, 1, 16, 30)
    const date2 = new Date(2020, 1, 3, 15, 30)
    expect(calcElapsedTime(date2, date1)).toBe('2日')
  })
  test('success: 2 Days by Number', () => {
    // 2022.2.1 12:30
    const date1 = 1643686200000
    // 2022.2.3 15:30
    const date2 = 1643869800000
    expect(calcElapsedTime(date2, date1)).toBe('2日')
  })
  test('error: 2 Days by Date', () => {
    const date1 = new Date(2020, 1, 1, 16, 30)
    const date2 = new Date(2020, 1, 4, 15, 30)
    expect(calcElapsedTime(date2, date1)).not.toBe('2日')
  })
  test('error: 2 Days by Number', () => {
    // 2022.2.1 12:30
    const date1 = 1643686200000
    // 2022.2.4 15:30
    const date2 = 1643956200000
    expect(calcElapsedTime(date2, date1)).not.toBe('2日')
  })
})

describe('【isWithinPeriodOfTime】Function to check if it is within the specified period.', () => {
  test('success: within the period', () => {
    const targetDate = new Date(2020, 1, 2, 14, 30)
    const startDate = new Date(2020, 1, 1, 16, 30)
    const endDate = new Date(2020, 1, 3, 15, 30)
    expect(isWithinPeriodOfTime(targetDate, startDate, endDate)).toBe(true)
  })
  test('success: within the period. Close targetDate startDate.', () => {
    const targetDate = new Date(2020, 1, 1, 16, 31)
    const startDate = new Date(2020, 1, 1, 16, 30)
    const endDate = new Date(2020, 1, 3, 15, 30)
    expect(isWithinPeriodOfTime(targetDate, startDate, endDate)).toBe(true)
  })
  test('success: within the period. Close targetDate endDate.', () => {
    const targetDate = new Date(2020, 1, 3, 15, 29)
    const startDate = new Date(2020, 1, 1, 16, 30)
    const endDate = new Date(2020, 1, 3, 15, 30)
    expect(isWithinPeriodOfTime(targetDate, startDate, endDate)).toBe(true)
  })
  test('error: not within the period', () => {
    const targetDate = new Date(2020, 1, 1, 16, 30)
    const startDate = new Date(2020, 1, 2, 16, 30)
    const endDate = new Date(2020, 1, 3, 15, 30)
    expect(isWithinPeriodOfTime(targetDate, startDate, endDate)).toBe(false)
  })
  test('error: within the period. Equal targetDate startDate.', () => {
    const targetDate = new Date(2020, 1, 1, 16, 30)
    const startDate = new Date(2020, 1, 1, 16, 30)
    const endDate = new Date(2020, 1, 3, 15, 30)
    expect(isWithinPeriodOfTime(targetDate, startDate, endDate)).not.toBe(true)
  })
  test('error: within the period. Close targetDate endDate.', () => {
    const targetDate = new Date(2020, 1, 3, 15, 30)
    const startDate = new Date(2020, 1, 1, 16, 30)
    const endDate = new Date(2020, 1, 3, 15, 30)
    expect(isWithinPeriodOfTime(targetDate, startDate, endDate)).not.toBe(true)
  })
})
