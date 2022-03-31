import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Button from '@mui/material/Button'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'

function NonValideVacations() {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Demandes de congé non valides "
        component="div"
      />
      <CardContent sx={{ padding: '0' }}>
        <List
          dense
          sx={{
            width: '100%',
          }}
        >
          {[1, 2, 3].map(() => (
            <>
              <ListItem>
                <ListItemText
                  primary="Amine Nafid"
                  primaryTypographyProps={{ variant: 'subtitle1' }}
                  sx={{ width: '15%' }}
                />
                <ListItemText
                  primary="5 jours"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'primary',
                    align: 'center',
                  }}
                  secondary="du 01/02/2022 au 01/02/2022"
                  secondaryTypographyProps={{
                    align: 'center',
                    variant: 'body2',
                  }}
                />
                <ListItemIcon>
                  <Button variant="text" color="success">
                    <Link href="/">Valider</Link>
                  </Button>
                </ListItemIcon>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button variant="text">
          <Link href="/">Gérer demande</Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default NonValideVacations
