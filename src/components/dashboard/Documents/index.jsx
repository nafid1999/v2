import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Button from '@mui/material/Button'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'

const Documents = function () {
  return (
    <Card elevation={0} square sx={{ mt: 3 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Documents "
      />
      <CardContent>
        <List>
          {[1, 2, 3].map(() => (
            <>
              <ListItem>
                <ListItemText
                  primary="CV archtect FrontEnd"
                  primaryTypographyProps={{ variant: 'subtitle1' }}
                  sx={{ width: '30%' }}
                />
                <ListItemText
                  primary="PDF"
                  primaryTypographyProps={{ variant: 'subtitle1' }}
                />
                <ListItemIcon>
                  <IconButton padding={0}>
                    <AutorenewIcon color="primary" />
                  </IconButton>
                  <IconButton padding={0}>
                    <FileDownloadIcon />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button variant="text">
          <Link href="/">Ajouter un document</Link>
        </Button>
      </CardActions>
    </Card>
  )
}
export default Documents
