import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { Typography, Button, Stack } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocalPoliceIcon from '@mui/icons-material/LocalPolice'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import EditSharpIcon from '@mui/icons-material/EditSharp'
import TextField from '@mui/material/TextField'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Tab from '@mui/material/Tab'
import InputAdornment from '@mui/material/InputAdornment'
import CakeIcon from '@mui/icons-material/Cake'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import PropTypes from 'prop-types'
import { useProfileInfo } from '../../backend/userProfile'
import { useCurrentUser } from '../../backend'

function FormEdit() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Stack direction="row" spacing={6}>
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
          <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            disabled
            id="email"
            variant="standard"
            value="oamara@novelis.fr"
            size="small"
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
          <CakeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" variant="standard" size="small" />
        </Box>
      </Stack>
      <Stack direction="row" spacing={6}>
        <Box sx={{ display: 'flex', alignItems: 'end', marginTop: '15px' }}>
          <PhoneIphoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="phone-number"
            variant="standard"
            size="small"
            placeholder="ex : 06XXXXXXXX"
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'end' }}>
          <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="adress"
            variant="standard"
            size="small"
            value="DOUAR TIJDIT DAR EL KEBDANI DRIOUCH "
          />
        </Box>
      </Stack>
    </Box>
  )
}
function DialogModal({ dataProfile }) {
  const [open, setOpen] = React.useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Button
        sx={{ ml: 3 }}
        variant="outlined"
        disableElevation
        startIcon={<EditSharpIcon />}
        size="small"
        onClick={handleClickOpen}
      >
        Edit Profile
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <Grid container direction="row" spacing={1}>
            <Grid item xs={8}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    disabled
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="email"
                    id="email"
                    value={dataProfile.email}
                    size="medium"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Phone Number"
                    id="Phone number"
                    value={dataProfile.phoneNumber}
                    size="medium"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIphoneIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ mt: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="birthday"
                        value={dataProfile.dateOfBirth}
                        onChange={(newValue) => {
                          setValue(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    label="Adress"
                    value={dataProfile.homeAddress}
                    id="address"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HomeIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
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
                  src={`data:image/png;base64,${dataProfile.image}`}
                  alt={dataProfile.firstName}
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
                    {dataProfile.title} {dataProfile.firstName}{' '}
                    {dataProfile.lastName}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {dataProfile?.job?.name}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Update</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

function Profile() {
  const [value, setValue] = React.useState('1')
  const { isLoading, data = {} } = useCurrentUser()
  const { dataProfile = {} } = useProfileInfo(data.id)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  if (isLoading) return <Box>Loading ...</Box>
  return (
    <>
      <Typography sx={{ ml: 3 }} variant="h4">
        {' '}
        Profile
      </Typography>
      <Container maxWidth sx={{ mt: 6, color: '#334E64' }}>
        <Grid container spacing={2}>
          <Grid item md={5} sm={8} xs={12} sx={{ backgroundColor: 'inherit' }}>
            <Card width="100%" elevation={0}>
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
                    src={`data:image/png;base64,${dataProfile.image}`}
                    alt={dataProfile.firstName}
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
                      {dataProfile.title} {dataProfile?.firstName}{' '}
                      {dataProfile?.lastName}
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
          <Grid item container direction="column" md={7}>
            <Card elevation={0}>
              <CardContent>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab label=" Personal Information" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <Grid container direction="column">
                        <Grid item sx={{ mt: 3 }}>
                          <Stack direction="row" spacing={2}>
                            <EmailIcon sx={{ color: '#334E64' }} />
                            <Typography
                              variant="body1"
                              sx={{ color: '#334E64' }}
                            >
                              {dataProfile.email}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ mt: 3 }}>
                          <Stack direction="row" spacing={2}>
                            <PhoneIphoneIcon sx={{ color: '#334E64' }} />
                            <Typography variant="body1">
                              {dataProfile.phoneNumber}
                            </Typography>
                          </Stack>{' '}
                        </Grid>
                        <Grid item sx={{ mt: 3 }}>
                          <Stack direction="row" spacing={2}>
                            <HomeIcon sx={{ color: '#334E64' }} />
                            <Typography
                              variant="body1"
                              sx={{ color: '#334E64' }}
                            >
                              {dataProfile.homeAddress}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ mt: 3 }}>
                          <Stack direction="row" spacing={2}>
                            <WorkIcon sx={{ color: '#334E64' }} />
                            <Typography
                              variant="body1"
                              sx={{ color: '#334E64' }}
                            >
                              {dataProfile?.job?.name}
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid item sx={{ mt: 3 }}>
                          <Stack direction="row" spacing={2}>
                            <CalendarMonthIcon sx={{ color: '#334E64' }} />
                            <Typography
                              variant="body1"
                              sx={{ color: '#334E64' }}
                            >
                              {dataProfile.dateOfBirth}
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </TabPanel>
                    <TabPanel value="2">
                      <FormEdit />
                    </TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                  </TabContext>
                  <DialogModal dataProfile={dataProfile} />
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
                        Identifiant du collaborateur
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
                      />
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
DialogModal.propTypes = {
  dataProfile: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default Profile

// function EditableFieldInfo({ data, icon }) {
//   const [editMode, seteditMode] = useState(false)

//   if (!editMode) {
//     return (
//       <Stack direction="row" spacing={2}>
//         <PhoneIphoneIcon color="primary" />
//         <Typography variant="body1">{data}</Typography>
//         <IconButton
//           sx={{ position: 'relative', width: '27px', height: '27px' }}
//           padding={0}
//           onClick={() => seteditMode(true)}
//         >
//           <EditSharpIcon
//             sx={{
//               color: '#334E64',
//               position: 'absolute',
//               top: '2px',
//               fontSize: '20px',
//             }}
//           />
//         </IconButton>
//       </Stack>
//     )
//   }
//   return (
//     <Stack direction="row" spacing={2}>
//       <PhoneIphoneIcon sx={{ color: '#334E64', padding: 0 }} />
//       <CssTextField
//         id="phone-number"
//         variant="standard"
//         defaultValue="0657421844"
//       />
//       <Box>
//         <IconButton padding={0}>
//           {' '}
//           <SaveAsSharpIcon sx={{ color: '#334E64' }} />
//         </IconButton>
//         <IconButton padding={0} onClick={() => seteditMode(false)}>
//           <ClearSharpIcon sx={{ color: '#334E64' }} />
//         </IconButton>
//       </Box>
//     </Stack>
//   )
// }
