import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'

function DashboardCard({ data, title, icon }) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent sx={{ paddingTop: '9px', marginRight: '2%' }}>
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <Box sx={{ position: 'relative' }}>
            <Typography
              component="h1"
              variant="subtitle1"
              sx={{
                ml: '10px',
                mt: '0',
                fontWeight: '500',
              }}
              color="text.secondary"
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                mt: '10px',
                ml: '10px',
                fontWeight: 'bold',
                color: 'black',
              }}
            >
              {data}{' '}
            </Typography>
          </Box>
          <Box sx={{ height: '100%', marginTop: 'auto' }}>{icon}</Box>
        </Stack>
      </CardContent>
    </Card>
  )
}
DashboardCard.propTypes = {
  data: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired.isRequired,
  icon: PropTypes.element.isRequired,
}

export default DashboardCard
