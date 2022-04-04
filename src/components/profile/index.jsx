import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Image from 'next/image'
import { Typography, Button, Stack } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { Grid3x3 } from '@mui/icons-material'
import LocalPoliceIcon from '@mui/icons-material/LocalPolice'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp'
import { useCurrentUser } from '../../backend'
import EditSharpIcon from '@mui/icons-material/EditSharp'
import IconButton from '@mui/material/IconButton'
import SaveAsSharpIcon from '@mui/icons-material/SaveAsSharp'
import ClearSharpIcon from '@mui/icons-material/ClearSharp'
import TextField from '@mui/material/TextField'
import { alpha, styled } from '@mui/material/styles'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#334E64',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#334E64',
  },
})

const EditableFieldInfo = ({ data, icon }) => {
  const [editMode, seteditMode] = useState(false)

  if (!editMode) {
    return (
      <Stack direction={'row'} spacing={2}>
        <PhoneIphoneIcon color="primary" />
        <Typography variant="body1">{data}</Typography>
        <IconButton
          sx={{ position: 'relative', width: '27px', height: '27px' }}
          padding={0}
          onClick={() => seteditMode(true)}
        >
          <EditSharpIcon
            sx={{
              color: '#334E64',
              position: 'absolute',
              top: '2px',
              fontSize: '20px',
            }}
          />
        </IconButton>
      </Stack>
    )
  }
  return (
    <Stack direction={'row'} spacing={2}>
      <PhoneIphoneIcon sx={{ color: '#334E64', padding: 0 }} />
      <CssTextField
        id="phone-number"
        variant="standard"
        defaultValue="0657421844"
      />
      <Box>
        <IconButton padding={0}>
          {' '}
          <SaveAsSharpIcon sx={{ color: '#334E64' }} />
        </IconButton>
        <IconButton padding={0} onClick={() => seteditMode(false)}>
          <ClearSharpIcon sx={{ color: '#334E64' }} />
        </IconButton>
      </Box>
    </Stack>
  )
}

function Profile() {
  const [editMode, seteditMode] = useState(false)
  const { isLoading, data = {} } = useCurrentUser()
  console.log(data)
  if (isLoading) return <Box>Loading ...</Box>
  return (
    <>
      <Typography sx={{ ml: 3 }} variant="h4">
        {' '}
        Profile
      </Typography>
      <Container maxWidth sx={{ mt: 6, color: '#334E64' }}>
        <Grid container spacing={2}>
          <Grid item md={4} sx={{ backgroundColor: 'inherit' }}>
            <Card width="100%">
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src="/assets/images/profile/R.jpg"
                    alt="my picture"
                    width={140}
                    height={140}
                    style={{ borderRadius: '100%' }}
                  />
                  <Box sx={{ mt: 2 }}>
                    <Typography
                      variant="h6"
                      component="h1"
                      sx={{ mb: 1, fontWeight: 'bold' }}
                    >
                      {data?.firstName} {data?.lastName}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Full Stack Developer
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                      Bay Area, San Francisco, CA
                    </Typography>
                    <Button variant="contained">Follow</Button>
                    <Button variant="outlined">Message</Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item container direction={'column'} md={8}>
            <Card>
              <CardContent>
                <Box sx={{ padding: '5px 20px 10px 20px' }}>
                  <Typography variant="h5" sx={{ color: '#334E64' }}>
                    Personal Information - servicesss
                  </Typography>
                  <Grid container direction={'column'}>
                    <Grid item sx={{ mt: 3 }}>
                      <Stack direction={'row'} spacing={2}>
                        <EmailIcon sx={{ color: '#334E64' }} />
                        <Typography variant="body1" sx={{ color: '#334E64' }}>
                          {data?.login}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item sx={{ mt: 3 }}>
                      <EditableFieldInfo data={data?.login} />
                    </Grid>
                    <Grid item sx={{ mt: 3 }}>
                      <Stack direction={'row'} spacing={2}>
                        <HomeIcon sx={{ color: '#334E64' }} />
                        <Typography variant="body1" sx={{ color: '#334E64' }}>
                          somthing here
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item sx={{ mt: 3 }}>
                      <Stack direction={'row'} spacing={2}>
                        <WorkIcon sx={{ color: '#334E64' }} />
                        <Typography variant="body1" sx={{ color: '#334E64' }}>
                          manager
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item sx={{ mt: 3 }}>
                      <Stack direction={'row'} spacing={2}>
                        <CalendarMonthIcon sx={{ color: '#334E64' }} />
                        <Typography variant="body1" sx={{ color: '#334E64' }}>
                          06/12/2022
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
            <Card
              elevation={0}
              sx={{
                mt: 3,
                border: '3px solid #dee2e',
              }}
            >
              <CardContent
                sx={{
                  padding: 0,
                  height: '100%',
                  border: '2px solid #dee2e6',
                  '&:last-child': {
                    paddingBottom: 0,
                  },
                }}
              >
                <Grid container sx={{ padding: '0' }}>
                  <Grid
                    item
                    md={4}
                    sx={{ padding: '5px', border: '1px solid #dee2e6' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        height: '100%',
                        padding: '10px 0 10px 0',
                      }}
                    >
                      <WorkIcon
                        sx={{
                          fontSize: '40px',
                          color: '#17a2b8',
                          paddingBottom: '5px',
                          marginBottom: '5px',
                        }}
                      />
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ marginBottom: '5px' }}
                      >
                        33
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ marginBottom: '5px' }}
                      >
                        Identifiant du collaborate
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    sx={{ padding: '5px', border: '1px solid #dee2e6' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        height: '100%',
                        padding: '10px 0 10px 0',
                      }}
                    >
                      <LocalPoliceIcon
                        sx={{
                          fontSize: '40px',
                          color: '#yellow',
                          paddingBottom: '5px',
                        }}
                      />
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ marginBottom: '5px' }}
                      >
                        Contrat signé
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ marginBottom: '5px' }}
                      >
                        Statut du collaborateur
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={4}
                    sx={{ padding: '5px', border: '1px solid #dee2e6' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <CreditCardIcon
                        sx={{
                          fontSize: '40px',
                          paddingBottom: '5px',
                        }}
                      />
                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{ marginBottom: '5px' }}
                      >
                        RIB
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ marginBottom: '5px' }}
                      ></Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile
