import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import GroupIcon from '@mui/icons-material/Group'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import Stack from '@mui/material/Stack'
import CardHeader from '@mui/material/CardHeader'
import PropTypes from 'prop-types'
import Documents from '../../components/dashboard/Documents'
import DelayedImputations from '../../components/dashboard/DelayedImputations'
import NonValideVacations from '../../components/dashboard/NonValideVacations'
import CollabSatisfactions from '../../components/dashboard/CollabSatisfactions'
import { setUpLangPages } from '../../utils/langUtils'
import DashboardCard from '../../components/dashboard/DashboardCard'

const dataDashboard = [
  {
    title: 'Collaborateurs',
    data: '100',
    icon: (
      <GroupIcon fontSize="large" sx={{ fontSize: 60, color: '#c0c0c0' }} />
    ),
  },
  {
    title: 'Prochain congé',
    data: '01/20/2022',
    icon: (
      <FlightTakeoffIcon
        fontSize="large"
        sx={{ fontSize: 60, color: '#87CEFA' }}
      />
    ),
  },
  {
    title: 'Solde de Congé',
    data: '12',
    icon: (
      <WhatshotIcon fontSize="large" sx={{ fontSize: 60, color: '#c0c0c0' }} />
    ),
  },
]

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
      <Grid
        container
        spacing={2.5}
        margin="10px auto"
        columns={13}
        justifyContent="space-around"
      >
        <Grid padding={0} item md={3.5} sm={6} xs={6}>
          <Typography variant="h7" component="h2">
            Mes Imputations
          </Typography>
          <Typography
            component="div"
            variant="div"
            color="text.secondary"
            sx={{
              marginTop: '7px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
            }}
          >
            vous n avez pas encore imputé aujourd hui
          </Typography>
          <Typography
            variant="h7"
            component="h2"
            color="primary"
            sx={{ fontSize: '23px' }}
          >
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
                }}
              >
                Completer mes imputations
              </Box>
            </Stack>
          </Typography>
        </Grid>
        {/* eslint-disable-next-line */}
        {dataDashboard.map(({ icon, title, data }, id) => (
          <Grid padding={0} item md={3} sm={6} xs={6}>
            <DashboardCard data={data} title={title} icon={icon} />
          </Grid>
        ))}
      </Grid>
      {/* cards */}
      <Container maxWidth sx={{ mt: 10 }}>
        <Grid container spacing={2}>
          <LeftSideContainer>
            <RightSideItem>
              <Typography variant="h5" component="h4">
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
          </LeftSideContainer>
          <RightSideContainer>
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
          </RightSideContainer>
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
