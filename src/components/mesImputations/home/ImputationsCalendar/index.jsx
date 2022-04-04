import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useTheme } from '@emotion/react'
import { grey } from '@mui/material/colors'
import {
  isInSameDay,
  defaultDateFormat,
  getStartDayOfMonth,
  getEndDayOfMonth,
  isWeekend,
} from '../../../../utils/dateUtils'
import ImputationDay from './ImputationDay'

const daysOfWeek = moment.weekdays()

export default function ImputationsCalendar({
  tasks,
  currentMonth,
  addCheckedDate,
  checkedDates,
}) {
  const getDayTasks = (date) =>
    tasks.filter((task) => isInSameDay(moment(task.date), date))

  const startDay = getStartDayOfMonth(currentMonth)
  const endDay = getEndDayOfMonth(currentMonth)

  const [calendar, setCalendar] = useState([])

  useEffect(async () => {
    let date = startDay

    const calendarComputed = []

    while (date.isBefore(endDay)) {
      calendarComputed.push({
        date: date.clone(),
      })
      date = date.add(1, 'days').clone()
    }
    setCalendar(calendarComputed)
  }, [currentMonth])

  const theme = useTheme()

  const currentDate = moment()

  const isCurrentMonth = currentDate.isBetween(startDay, endDay)

  return (
    <Grid
      container
      columns={10}
      rowSpacing={2}
      columnSpacing={3}
      sx={{
        marginTop: '100px',
        minWidth: '1000px',
      }}
    >
      {daysOfWeek
        .filter((item, index) => !isWeekend(index))
        .map((dayOfWeek) => (
          <Grid item xs={2}>
            <Typography
              variant="h5"
              sx={{
                textTransform: 'capitalize',
                marginLeft: 1,
                color:
                  currentDate.format('dddd') === dayOfWeek && isCurrentMonth
                    ? theme.palette.primary.main
                    : grey[700],
              }}
            >
              {dayOfWeek}
            </Typography>
          </Grid>
        ))}
      {calendar
        .filter((day) => !isWeekend(day.date.weekday()))
        .map((day) => (
          <Grid key={day.date} container item xs={2}>
            <ImputationDay
              day={day.date}
              tasks={getDayTasks(day.date)}
              showCheckbox={moment().isSame(day.date, 'month')}
              checked={checkedDates.includes(
                day.date.format(defaultDateFormat),
              )}
              addCheckedDate={addCheckedDate}
            />
          </Grid>
        ))}
    </Grid>
  )
}
ImputationsCalendar.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentMonth: PropTypes.string.isRequired,
  addCheckedDate: PropTypes.func.isRequired,
  checkedDates: PropTypes.arrayOf(PropTypes.object).isRequired,
}
