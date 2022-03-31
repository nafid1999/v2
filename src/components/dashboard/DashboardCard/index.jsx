import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'

function DashboardCard({ data, title, icon }) {
  return (
    <Card elevation={0}>
      <CardContent sx={{ paddingTop: '9px', marginRight: '2%' }}>
        <Stack direction="row" spacing={0} justifyContent="space-between">
          <Box>
            <Typography
              component="span"
              variant="h7"
              sx={{
                ml: '10px',
                mt: '0',
              }}
              color="text.secondary"
            >
              {title}
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{
                mt: '10px',
                ml: '10px',
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
