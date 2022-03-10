import React from 'react'
import { toast as toastify } from 'react-toastify'
import {
  faCheckCircle,
  faInfoCircle,
  faExclamationCircle,
} from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Typography } from '@mui/material'

const Message = ({ message, icon }) => (
  <Grid container alignItems="center" spacing={0}>
    <Grid item>
      <Typography variant="h5" className="co-toastify-icon">
        <FontAwesomeIcon icon={icon} />
      </Typography>
    </Grid>
    <Grid item xs={10}>
      {message}
    </Grid>
  </Grid>
)
Message.displayName = 'toast-Message'

const toast = (message, ...args) => message && toastify(message, ...args)

toast.info = (message, ...args) => {
  if (message && typeof message === 'string')
    toastify.info(<Message message={message} icon={faInfoCircle} />, ...args)
}

toast.error = (message, ...args) => {
  if (message && typeof message === 'string')
    toastify.error(
      <Message message={message} icon={faExclamationCircle} />,
      ...args,
    )
}

toast.success = (message, ...args) => {
  if (message && typeof message === 'string')
    toastify.success(
      <Message message={message} icon={faCheckCircle} />,
      ...args,
    )
}

export default toast
