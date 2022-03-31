import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import LineChart from './LineChart'

const CollabSatisfactions = function () {
  return (
    <Card elevation={0} square>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Satisfactions des collaborateurs"
        component="div"
      />
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <LineChart />
        </Box>
      </CardContent>
    </Card>
  )
}
export default CollabSatisfactions
