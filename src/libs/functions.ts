import { differenceInCalendarDays, format, isAfter, isBefore } from 'date-fns'

export const formatDate = (date: number | Date) => format(date, 'yyyy-MM-dd')

export const calcElapsedTime = (later: number | Date, earlier: number | Date) => {
  return differenceInCalendarDays(later, earlier)
}

export const isWithinPeriodOfTime = (
  targetDate: number | Date,
  startDate: number | Date,
  endDate: number | Date,
) => {
  return isAfter(targetDate, startDate) && isBefore(targetDate, endDate)
}
