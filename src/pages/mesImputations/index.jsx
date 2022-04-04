import React, { useState } from 'react'
import { Button, Grid, IconButton, Typography } from '@mui/material'
import moment from 'moment'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { ChevronLeft } from '@mui/icons-material'
import { useTranslation } from 'next-i18next'
import {
  businessDaysInMonth,
  defaultDateFormat,
  getEndDayOfMonth,
  getStartDayOfMonth,
  isWeekend,
} from '../../utils/dateUtils'
import ImputationsCalendar from '../../components/mesImputations/home/ImputationsCalendar'
import { setUpLangPages } from '../../utils/langUtils'
import { useImputations } from '../../backend/imputations'
import MonthPicker from '../../components/mesImputations/MonthPicker'
import ImputationBottomBarHelper from '../../components/mesImputations/ImputationBottomBarHelper'

export default function MesImputations() {
  const { t } = useTranslation('mes-imputations-calendar')
  const currentDate = moment().format(defaultDateFormat)

  const [checkedDates, setCheckedDates] = useState([])
  const [currentMonth, setCurrentMonth] = useState(
    moment(currentDate, defaultDateFormat)
      .set('date', 1)
      .format(defaultDateFormat),
  )
  const imputations = useImputations(
    getStartDayOfMonth(currentMonth).format(defaultDateFormat),
    getEndDayOfMonth(currentMonth).format(defaultDateFormat),
  )

  const getTasks = () => {
    const imputationsRecieved = imputations?.data || []
    const mappedImputations = imputationsRecieved.map((imputation) => {
      if (imputation.absence) {
        return {
          date: moment(imputation.date).format(defaultDateFormat),
          name: imputation.absence.absenceType.name,
          subTasks: [],
        }
      }
      if (imputation.task) {
        return {
          date: moment(imputation.date),
          name: imputation.task.project.name,
          subTasks: [imputation.task.description],
        }
      }
      return {
        date: '',
        name: '',
        subTasks: [],
      }
    })
    return mappedImputations
  }

  const areAllDaysOfMonthSelected = () =>
    businessDaysInMonth(moment()) === checkedDates.length

  const addCheckedDate = async (date) => {
    if (checkedDates.includes(date)) {
      const checkedDatesHelper = [...checkedDates]
      checkedDatesHelper.splice(checkedDatesHelper.indexOf(date), 1)
      setCheckedDates(checkedDatesHelper)
    } else setCheckedDates([...checkedDates, date])
  }

  const selectAllDatesOfMonth = () => {
    if (!areAllDaysOfMonthSelected()) {
      const startDate = getStartDayOfMonth(currentMonth)
      const endDate = getEndDayOfMonth(currentMonth)

      const checkedDatesHelper = [...checkedDates]
      while (startDate.diff(endDate) < 0) {
        if (
          !checkedDatesHelper.includes(startDate.format(defaultDateFormat)) &&
          !isWeekend(startDate) &&
          moment().isSame(startDate, 'month')
        )
          checkedDatesHelper.push(startDate.format(defaultDateFormat))
        startDate.add(1, 'day')
      }
      setCheckedDates(checkedDatesHelper)
    } else setCheckedDates([])
  }

  const resetSelectedDates = () => {
    setCheckedDates([])
  }

  const prevMonth = () => {
    resetSelectedDates()
    setCurrentMonth(
      moment(currentMonth, defaultDateFormat)
        .subtract(1, 'month')
        .format(defaultDateFormat),
    )
  }
  const nextMonth = () => {
    resetSelectedDates()
    setCurrentMonth(
      moment(currentMonth, defaultDateFormat)
        .add(1, 'month')
        .format(defaultDateFormat),
    )
  }

  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <Typography variant="h4">{t('my_imputations')}</Typography>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton color="secondary" onClick={prevMonth}>
                <ChevronLeft />
              </IconButton>
            </Grid>
            <Grid item>
              <MonthPicker
                currentMonth={moment(currentMonth)}
                setCurrentMonth={setCurrentMonth}
              />
            </Grid>
            <Grid item>
              <IconButton color="secondary" onClick={nextMonth}>
                <ChevronRightIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{ textTransform: 'uppercase', fontWeight: '600' }}
          >
            {t('validate_month')}
          </Button>
        </Grid>
      </Grid>
      <ImputationsCalendar
        tasks={getTasks()}
        currentMonth={currentMonth}
        addCheckedDate={addCheckedDate}
        checkedDates={checkedDates}
      />

      <ImputationBottomBarHelper
        selectedDates={checkedDates}
        isAllSelected={areAllDaysOfMonthSelected()}
        selectAll={selectAllDatesOfMonth}
      />
    </>
  )
}
export async function getStaticProps({ locale }) {
  return setUpLangPages(locale)
}
