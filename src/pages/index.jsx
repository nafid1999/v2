import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import Documents from '../components/dashboard/Documents'
import DelayedImputations from '../components/dashboard/DelayedImputations'
import NonValideVacations from '../components/dashboard/NonValideVacations'
import CollabSatisfactions from '../components/dashboard/CollabSatisfactions'
import { setUpLangPages } from '../utils/langUtils'
import DashboardCards from '../components/dashboard/DashboardCards'

function RightSideContainer({ children }) {
  return (
    <Grid item md={6} xs={12}>
      <Grid container spacing={0}>
        <Grid item sx={{ minWidth: '100%' }}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  )
}
function LeftSideContainer({ children }) {
  return (
    <Grid item md={6} xs={12}>
      <Grid container spacing={0}>
        <Grid item sx={{ minWidth: '100%' }}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  )
}
function RightSideItem({ children }) {
  return <Box sx={{ mt: 2 }}>{children}</Box>
}

export default function Dashboard() {
  return (
    <>
      <Container maxWidth sx={{ mt: 5, padding: 0 }}>
        <Grid
          container
          spacing={{ sm: 3, md: 1.5, xs: 2 }}
          columns={13}
          justifyContent="space-between"
        >
          <DashboardCards />
        </Grid>
      </Container>
      {/* cards */}
      <Container maxWidth sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <RightSideContainer>
            <Typography variant="h5" component="h3">
              Noveliens Récents
            </Typography>
          </RightSideContainer>
          <LeftSideContainer>
            {/* Delayed imputations */}
            <CollabSatisfactions />
            <DelayedImputations />
            <NonValideVacations />
            <Documents />
          </LeftSideContainer>
        </Grid>
      </Container>
    </>
  )
}

RightSideContainer.propTypes = {
  children: PropTypes.element.isRequired,
}
RightSideItem.propTypes = {
  children: PropTypes.element.isRequired,
}
LeftSideContainer.propTypes = {
  children: PropTypes.element.isRequired,
}

export async function getStaticProps({ locale }) {
  return setUpLangPages(locale)
}
