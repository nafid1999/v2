import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import useStyles from "./style.js";

function NumberIconCard({ title, number, Icon, color = "primary.main" }) {
  const classes = useStyles(color)();

  return (
    <Card>
      <CardContent>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">{number}</Typography>
            <Typography>{title}</Typography>
          </Grid>
          <Grid item>
            <Box
              width={50}
              height={50}
              borderRadius={45}
              color={color}
              display="flex"
              justifyContent="center"
              alignItems="center"
              className={classes.bgIcon}
            >
                <Icon />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default NumberIconCard;
