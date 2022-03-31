import React from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import DoneIcon from '@mui/icons-material/Done'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

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
          <Stack
            direction="column"
            divider={<Divider orientation="horisontal" flexItem />}
            spacing={0}
          >
            <Grid
              item
              sx={{
                mt: 2,
                ml: 0,
                paddingTop: '2px',
                borderButtom: '1px solid gray',
                paddingLeft: 0,
              }}
            >
              <Container
                maxWidth
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="h6"
                  component="h4"
                  sx={{
                    ml: 0,
                    diplay: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Amine Nafid
                </Typography>

                <Stack direction="column">
                  <Typography
                    variant="subtitle1"
                    component="div"
                    color="primary"
                    sx={{ textAlign: 'center' }}
                  >
                    5 jours
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    color="secondary"
                  >
                    du 01/02/2022 au 01/02/2022
                  </Typography>
                </Stack>
                <Typography variant="h6" component="h4">
                  <DoneIcon color="success" />
                </Typography>
              </Container>
            </Grid>
            <Grid
              item
              sx={{
                mt: 2,
                ml: 0,
                paddingTop: '2px',
                borderButtom: '1px solid gray',
                paddingLeft: 0,
              }}
            >
              <Container
                maxWidth
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="h6"
                  component="h7"
                  sx={{
                    ml: 0,
                    diplay: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Amine Nafid
                </Typography>

                <Stack direction="column">
                  <Typography
                    variant="subtitle1"
                    component="div"
                    color="primary"
                    sx={{ textAlign: 'center' }}
                  >
                    5 jours
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    color="secondary"
                  >
                    du 01/02/2022 au 01/02/2022
                  </Typography>
                </Stack>
                <Typography variant="h6" component="h4">
                  <DoneIcon color="success" />
                </Typography>
              </Container>
            </Grid>
          </Stack>
        </List>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="text">
          <Link href="/">Gérer demande</Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default NonValideVacations
