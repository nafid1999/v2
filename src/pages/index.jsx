import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import Stack from '@mui/material/Stack'
import CardHeader from '@mui/material/CardHeader'
import PropTypes from 'prop-types'
import Documents from '../components/dashboard/Documents'
import DelayedImputations from '../components/dashboard/DelayedImputations'
import NonValideVacations from '../components/dashboard/NonValideVacations'
import CollabSatisfactions from '../components/dashboard/CollabSatisfactions'
import { setUpLangPages } from '../utils/langUtils'
import DashboardCards from '../components/dashboard/DashboardCards'

function RightSideContainer({ children }) {
  return (
    <Grid item md={6} sm={12} xs={12}>
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
    <Grid item md={6} sm={12} xs={12}>
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
          <Grid padding={0} item md={3.5} sm={6.5} xs={13}>
            <Box>
              <Typography variant="h4" component="h1">
                Mes Imputations
              </Typography>
              <Typography
                component="h7"
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
              <Typography variant="h7" component="h2" color="primary">
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ overflow: 'hidden', marginTop: '10px' }}
                >
                  <Box>
                    <AddCircleIcon sx={{ fontSize: 27 }} />
                  </Box>
                  <Box
                    sx={{
                      padding: '0',
                      fontSize: '20px',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    Completer mes imputations
                  </Box>
                </Stack>
              </Typography>
            </Box>
          </Grid>
          {/* eslint-disable-next-line */}
          <DashboardCards />
        </Grid>
      </Container>
      {/* cards */}
      <Container maxWidth sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <RightSideContainer>
            <RightSideItem>
              <Typography variant="h5" component="h3">
                Noveliens Récents
              </Typography>
              <Box sx={{ mt: 5 }}>
                {/* <CardCollab agence="oujda" bg="secoary" />
                <CardCollab agence="Rabat" bg="priary" /> */}
              </Box>
            </RightSideItem>
            <RightSideItem>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  action={
                    <FlightTakeoffIcon
                      fontSize="large"
                      sx={{ fontSize: 60, color: '#87CEFA' }}
                    />
                  }
                  title="Solde congé"
                  subheader="78"
                />
              </Card>
            </RightSideItem>
          </RightSideContainer>
          <LeftSideContainer>
            {/* Delayed imputations */}
            <RightSideItem>
              <CollabSatisfactions />
            </RightSideItem>
            <RightSideItem>
              <DelayedImputations />
            </RightSideItem>
            <RightSideItem>
              <NonValideVacations />
            </RightSideItem>
            <RightSideItem>
              <Documents />
            </RightSideItem>
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
