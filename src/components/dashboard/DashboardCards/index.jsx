import { Grid, Typography, Stack } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DashboardCard from '../DashboardCard'
import { useCollabsCount } from '../../../backend/collaborator'
import cardsData from './cardData'

function DashboardCards() {
  const { data: dataCard } = useCollabsCount()
  return (
    <>
      <Grid item md={3.5} sm={6.5} xs={13}>
        <Typography variant="h4" component="h1">
          Mes Imputations
        </Typography>
        <Typography
          component="div"
          variant="subtitle1"
          color="text.secondary"
          sx={{
            marginTop: '7px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          vous n avez pas encore imputé aujourd hui
        </Typography>
        <Typography variant="div" component="h2" color="primary">
          <Stack
            direction="row"
            spacing={1}
            sx={{ overflow: 'hidden', marginTop: '10px' }}
          >
            <Typography>
              <AddCircleIcon sx={{ fontSize: 27 }} />
            </Typography>
            <Typography component="h6" variant="h5">
              Completer mes Imputations
            </Typography>
          </Stack>
        </Typography>
      </Grid>
      {cardsData(dataCard)?.map(({ icon, title, data }) => (
        <Grid item md={3} sm={6.5} xs={13}>
          <DashboardCard data={data} title={title} icon={icon} />
        </Grid>
      ))}
    </>
  )
}

export default DashboardCards
