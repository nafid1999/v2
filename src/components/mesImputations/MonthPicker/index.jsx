import React, { useState } from 'react'
import { Button, Grid, Popover } from '@mui/material'
import moment from 'moment'
import PropTypes from 'prop-types'
import { LocalizationProvider, MonthPicker as MuiMonthPicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { fr } from 'date-fns/locale'
import { useTranslation } from 'next-i18next'
import { defaultDateFormat } from '../../../utils/dateUtils'

function MonthPicker({ currentMonth, setCurrentMonth }) {
  const { t } = useTranslation('mes-imputations-calendar')
  const [anchorEl, setAnchorEl] = useState(null)

  const dateButtonClicked = ({ currentTarget }) => {
    setAnchorEl(currentTarget)
  }
  const currentDate = moment()

  return (
    <>
      <Button
        color="secondary"
        sx={{ textTransform: 'capitalize' }}
        aria-describedby="month-popover-btn"
        onClick={dateButtonClicked}
      >
        {currentMonth.format('MMM YYYY')}
      </Button>

      <Popover
        anchorEl={anchorEl}
        id="month-popover"
        open={anchorEl !== null}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <LocalizationProvider locale={fr} dateAdapter={AdapterDateFns}>
          <Grid
            container
            flexDirection="column"
            alignItems="center"
            spacing={2}
            sx={{ mt: 2, mb: 2 }}
          >
            <Grid item>
              {(!currentMonth.isSame(currentDate, 'month') ||
                !currentMonth.isSame(currentDate, 'year')) && (
                <Button
                  onClick={() => {
                    setCurrentMonth(currentDate.format(defaultDateFormat))
                  }}
                  variant="contained"
                >
                  {t('now')}
                </Button>
              )}
            </Grid>
            <Grid item>
              <MuiMonthPicker
                onChange={(newDate) => {
                  setCurrentMonth(moment(newDate).format(defaultDateFormat))
                }}
                date={currentMonth.toDate()}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Popover>
    </>
  )
}
MonthPicker.propTypes = {
  currentMonth: PropTypes.instanceOf(moment).isRequired,
  setCurrentMonth: PropTypes.func.isRequired,
}

export default MonthPicker
