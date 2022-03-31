import { Grid } from '@mui/material'
import React from 'react'
import DashboardCard from '../DashboardCard'
import { useCollabsCount } from '../../../backend/collabsCount'
import cardsData from './cardData'

function DashboardCards() {
  const { data: dataCard } = useCollabsCount()

  return (
    <>
      {' '}
      {cardsData(dataCard)?.map(({ icon, title, data }) => (
        <Grid padding={0} item md={3} sm={6.5} xs={13}>
          <DashboardCard data={data} title={title} icon={icon} />
        </Grid>
      ))}
    </>
  )
}

export default DashboardCards
