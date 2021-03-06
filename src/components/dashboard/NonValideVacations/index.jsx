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
import PermissionProvider from '../../permissions/PermissionProvider'
import { useListAbsences } from '../../../backend/collaborator'
import { formatDate, getNumOfVacationDays } from '../../../utils/dateUtils'

const defaultPermission =
  'modulePermissions.collaborators.absences.manageAbsences'

function NonValideVacations() {
  const { data: absences } = useListAbsences()

  return (
    <PermissionProvider permission={defaultPermission}>
      <Card elevation={0} square sx={{ mt: 3 }}>
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
            {(absences && absences.length) > 0 &&
              absences.slice(0, 3).map((absence) => (
                <>
                  <ListItem>
                    <ListItemText
                      primary={absence.collaborators[0].name}
                      primaryTypographyProps={{ variant: 'subtitle1' }}
                      sx={{ width: '15%' }}
                    />

                    <ListItemText
                      primary={`${getNumOfVacationDays(
                        absence.start,
                        absence.end,
                      )} jours`}
                      primaryTypographyProps={{
                        variant: 'subtitle1',
                        color: 'primary',
                        align: 'center',
                      }}
                      secondary={`${formatDate(absence.start)} au ${formatDate(
                        absence.end,
                      )}`}
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
    </PermissionProvider>
  )
}

export default NonValideVacations
