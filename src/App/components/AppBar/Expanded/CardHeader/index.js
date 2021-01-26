import React from "react";

import useStyles from "./style.js";
import { Typography, Paper } from "@material-ui/core";

export default function ({ title, content, color = "primary" }) {
  const classes = useStyles();
  return (
    <Paper square className={classes.root} elevation={0}>
      <Typography variant="h5" color={color} align="center">
        {title}
      </Typography>
      <Typography variant="body2" align="center">
        {content}
      </Typography>
    </Paper>
  );
}
