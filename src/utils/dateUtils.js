import 'moment/locale/fr-ca'
import moment from 'moment'

// setting up default locale
moment().locale('fr-ca')

export const defaultDateFormat = 'YYYY-MM-DD'

// accepts 2 moment objects and return if they are in the same day (regardless of nb hours)
export const isInSameDay = (date1, date2) =>
  moment(date1)
    .set(10, 'hours')
    .isSame(moment(date2).set(10, 'hours'), 'day') &&
  moment(date1)
    .set(10, 'hours')
    .isSame(moment(date2).set(10, 'hours'), 'month') &&
  moment(date1).set(10, 'hours').isSame(moment(date2).set(0, 'hours'), 'year')

export const getStartDayOfMonth = (date) =>
  moment(date).clone().startOf('month').startOf('week').add(1, 'day')

export const getEndDayOfMonth = (date) =>
  moment(date).clone().endOf('month').endOf('week')

// pass day index or date
export const isWeekend = (date) => {
  const weekendIndexes = [0, 6]
  if (typeof date === 'number') {
    return weekendIndexes.includes(date)
  }
  return weekendIndexes.includes(date.day())
}

export const businessDaysInMonth = (month) => {
  let count = 0
  const startDate = getStartDayOfMonth(month)
  const endDate = getEndDayOfMonth(month)

  while (startDate.diff(endDate) < 0) {
    if (!isWeekend(startDate) && month.isSame(startDate, 'month')) count += 1
    startDate.add(1, 'day')
  }

  return count
}
