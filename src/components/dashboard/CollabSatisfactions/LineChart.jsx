import React from 'react'
import { Line } from 'react-chartjs-2'
import Box from '@mui/material/Box'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)
const dataChart = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'April', 'May', 'Jun'],
  datasets: [
    {
      label: 'First dataset',
      data: [2.7, 3, 4, 3, 3.1, 3.8],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
    {
      label: 'Second dataset',
      data: [3, 2.5, 3.5, 5.1, 5.4, 1.2],
      fill: true,
      borderColor: '#742774',
    },
  ],
}

function LineChart() {
  return (
    <Box>
      <Line data={dataChart} />
    </Box>
  )
}

export default LineChart
