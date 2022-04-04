import React from 'react'
import {
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import { useTranslation } from 'next-i18next'

function ImputationBottomBarHelper({
  selectedDates,
  selectAll,
  isAllSelected,
}) {
  const { t } = useTranslation('mes-imputations-calendar')

  return (
    <Drawer
      anchor="bottom"
      open={selectedDates.length > 0}
      variant="persistent"
    >
      <Grid
        container
        justifyContent="space-between"
        sx={{
          px: '150px',
          py: '15px',
        }}
      >
        <Grid item xs="6">
          <FormControlLabel
            label={t('check_all')}
            control={
              <Checkbox
                checked={isAllSelected}
                onChange={() => {
                  selectAll()
                }}
              />
            }
          />
        </Grid>

        <Grid
          container
          item
          alignItems="center"
          xs="6"
          spacing={1}
          justifyContent="flex-end"
        >
          <Grid item>
            <Typography>
              {selectedDates.length} {t('selected_dates')}
            </Typography>
          </Grid>

          <Grid item>
            <Button variant="contained" sx={{ textTransform: 'uppercase' }}>
              {t('imputer')}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Drawer>
  )
}

ImputationBottomBarHelper.propTypes = {
  selectedDates: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectAll: PropTypes.func.isRequired,
  isAllSelected: PropTypes.bool.isRequired,
}

export default ImputationBottomBarHelper
