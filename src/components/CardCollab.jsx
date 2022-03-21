import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardMedia, Container, Grid, IconButton, Stack } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const CardCollab = ({ user, bg, color, bl }) => {
  return (
    <Container maxWidth>
      <Card
        sx={{
          mt: 2,
          mb: 1,
          minHeight: '96px',
          borderLeft: bl,
          borderRadius: '0 !important',
          boxShadow: 'none',
        }}
      >
        <Box>
          <Grid
            container
            sx={{ display: 'flex', gap: '70px', flexWrap: 'nowrap', mt: 3 }}
          >
            <Grid item width="70px">
              <CardMedia
                component="img"
                height="10px"
                image=" https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg"
                sx={{
                  height: '40px',
                  objectFit: 'contain',
                }}
              />
            </Grid>
            <Grid item width="130px">
              <Stack direction="column" spacing={0}>
                <Typography variant="h7" color="darkblue" fontWeight="500">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography color="text.secondary">{user.jobName}</Typography>
              </Stack>
            </Grid>
            <Grid item width="120px">
              <Stack direction="column" spacing={0}>
                <Typography color="text.secondary" component="div">
                  Date de début
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                  {user.startDate}
                </Typography>
              </Stack>
            </Grid>
            <Grid item width="100px">
              <Stack spacing={0}>
                <CardActions>
                  <Button
                    disableRipple
                    variant="outlined"
                    sx={{
                      borderRadius: '8px',
                      border: 'none',

                      background: bg,
                      color: color,
                      '&:hover': {
                        background: bg,
                        color: color,
                        border: 'none',
                      },
                      cursor: 'context-menu',
                    }}
                  >
                    {user.agencyLabel}
                  </Button>
                </CardActions>
              </Stack>
            </Grid>
            <Grid item width="100px">
              <Stack direction="column" spacing={0}>
                <Typography color="text.secondary" component="div">
                  Pôle
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                  {user.serviceName}
                </Typography>
              </Stack>
            </Grid>
            <Grid item width="100px">
              <Stack direction="column" spacing={0}>
                <Typography color="text.secondary" component="div">
                  Email
                </Typography>

                <Typography variant="subtitle1" gutterBottom component="div">
                  {user.email}
                </Typography>
              </Stack>
            </Grid>
            <Grid item sx={{ ml: 'auto' }}>
              <Stack alignItems="flex-end">
                <CardActions>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteForeverIcon color="error" />
                  </IconButton>
                </CardActions>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Container>
  )
}
export default CardCollab
