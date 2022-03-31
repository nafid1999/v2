import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import CardHeader from '@mui/material/CardHeader'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'

const data = [
  {
    name: 'Ilyass LAZAAR',
    agence: 'Oujda',
    percentage: '78 %',
  },
  {
    name: 'Amine Nafid',
    agence: 'Oujda',
    percentage: '78 %',
  },
]
function DelayedImputations() {
  return (
    <Card elevation={0} square>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Collaborateurs en retard d imputation "
        component="div"
      />
      <CardContent>
        <List>
          {data.map(({ name, percentage, agence }) => (
            <>
              <ListItemButton>
                <ListItemText
                  primary={name}
                  primaryTypographyProps={{ variant: 'subtitle1' }}
                  sx={{ width: '30%' }}
                />
                <ListItemText>
                  <Chip
                    label={agence}
                    sx={{
                      padding: '3px 15px 3px 15px',
                      borderRadius: '5px',
                      background: '#f8bbd0',
                      color: '#FF067E',
                    }}
                  />
                </ListItemText>
                <ListItemIcon>
                  <Typography variant="subtitle1" color="text.primary">
                    {percentage}
                  </Typography>
                </ListItemIcon>
              </ListItemButton>
              <Divider />
            </>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}
export default DelayedImputations
