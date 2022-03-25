import React from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import ButtonGroup from '@mui/material/ButtonGroup'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Grid from '@mui/material/Grid'

const Documents = function () {
  return (
    <Card>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Documents "
        component="div"
      />
      <CardContent sx={{ padding: '0' }}>
        <Stack
          direction="column"
          divider={<Divider orientation="horisontal" flexItem />}
          spacing={1}
        >
          {/* eslint-disable-next-line no-unused-vars */}
          {[1, 2, 3].map((_) => (
            <Grid item sx={{ mt: 2, paddingLeft: 0 }}>
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
                  sx={{ display: 'flex', alignSelf: 'center' }}
                >
                  CV archtect FrontEnd
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="h4"
                  sx={{ display: 'flex', alignSelf: 'center' }}
                >
                  PDF
                </Typography>
                <Typography variant="h6" component="h4">
                  <ButtonGroup
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      cursor: ' pointer ',
                      padding: ' 0px ',
                    }}
                  >
                    <IconButton padding={0}>
                      <AutorenewIcon color="primary" />
                    </IconButton>
                    <IconButton padding={0}>
                      <FileDownloadIcon />
                    </IconButton>
                  </ButtonGroup>
                </Typography>
              </Container>
            </Grid>
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Typography
          variant="div"
          component="div"
          color="primary"
          padding={2}
          paddingRight={4}
        >
          <Link href="/">Ajouter un document</Link>
        </Typography>
      </CardActions>
    </Card>
  )
}
export default Documents
