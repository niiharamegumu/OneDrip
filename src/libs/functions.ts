import { differenceInCalendarDays, format, isAfter, isBefore } from 'date-fns'

export const formatDate = (date: number | Date): string => format(date, 'yyyy.MM.dd')

export const calcElapsedTime = (later: number | Date, earlier: number | Date): string => {
  return `${differenceInCalendarDays(later, earlier)}日`
}

export const isWithinPeriodOfTime = (
  targetDate: number | Date,
  startDate: number | Date,
  endDate: number | Date,
): boolean => {
  return isAfter(targetDate, startDate) && isBefore(targetDate, endDate)
}
