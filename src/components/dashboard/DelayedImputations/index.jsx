import React from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import CardHeader from '@mui/material/CardHeader'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'

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
                <Typography variant="h6" component="h4">
                  Ilyass lazaar
                </Typography>
                <Typography variant="h6" component="h4">
                  <Button
                    disableRipple
                    variant="outlined"
                    color="primary"
                    background="#1a237e"
                    sx={{
                      borderRadius: '5px',
                      border: 'none',
                      width: '90px',
                      background: '#f8bbd0',
                      padding: '3px 7px 3px 7px',
                      color: '#ec407a',
                      '&:hover': {
                        color: '#1a237e',
                        border: 'none',
                      },
                      cursor: 'context-menu',
                    }}
                  >
                    Oujda
                  </Button>
                </Typography>
                <Typography variant="h7" component="h4">
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
                <Typography variant="h6" component="h4" sx={{ ml: 0 }}>
                  Amine Nafid
                </Typography>
                <Typography variant="h6" component="h4">
                  <Button
                    disableRipple
                    variant="outlined"
                    color="primary"
                    background="#1a237e"
                    sx={{
                      borderRadius: '5px',
                      border: 'none',
                      width: '90px',
                      background: '#bbdefb',
                      padding: '3px 7px 3px 7px',
                      color: '#1976d2',
                      '&:hover': {
                        color: '#1a237e',
                        border: 'none',
                      },
                      cursor: 'context-menu',
                    }}
                  >
                    Oujda
                  </Button>
                </Typography>
                <Typography variant="h7" component="h4">
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
