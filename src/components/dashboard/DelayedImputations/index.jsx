import React from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import CardHeader from '@mui/material/CardHeader'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Chip from '@mui/material/Chip'

function DelayedImputations() {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Collaborateurs en retard d imputation "
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
            spacing={1}
          >
            <Grid item sx={{ mt: 2, paddingLeft: 0 }}>
              <Container
                maxWidth
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h6" component="h7">
                  Ilyass lazaar
                </Typography>
                <Typography variant="h6" component="h4">
                  <Chip
                    label="Oujda"
                    sx={{
                      padding: '3px 15px 3px 15px',
                      borderRadius: '5px',
                      background: '#f8bbd0',
                      color: '#FF067E',
                    }}
                  />
                </Typography>
                <Typography variant="h6" component="h7">
                  78%
                </Typography>
              </Container>
            </Grid>
            <Grid item sx={{ mt: 2, paddingLeft: 0 }}>
              <Container
                maxWidth
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="h6" component="h7">
                  Amine Nafid
                </Typography>
                <Typography variant="h6" component="h4">
                  <Chip
                    label="Oujda"
                    sx={{
                      padding: '3px 15px 3px 15px',
                      borderRadius: '5px',
                      background: '#f8bbd0',
                      color: '#FF067E',
                    }}
                  />
                </Typography>
                <Typography variant="h6" component="h7">
                  78%
                </Typography>
              </Container>
            </Grid>
          </Stack>
        </List>
      </CardContent>
    </Card>
  )
}
export default DelayedImputations
