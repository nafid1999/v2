import React from 'react'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import GroupIcon from '@mui/icons-material/Group'

export default function (collabCount) {
  return [
    {
      title: 'Collaborateurs',
      data: collabCount,
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
        <WhatshotIcon
          fontSize="large"
          sx={{ fontSize: 60, color: '#c0c0c0' }}
        />
      ),
    },
  ]
}
