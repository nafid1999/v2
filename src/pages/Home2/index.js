import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import Statistics from "../Home/components/Statistics";
import TotalExpenses from "../Home/components/TotalExpenses";
import InvoicesToValidate from "../Home/components/InvoicesToValidate";
import TotalAchat from "../Home/components/TotalAchat";

function Home() {

  return (
    <Fragment>
      <Grid container spacing={4} alignItems="stretch">
        <Grid item xs={12} sm={8}>
          <Statistics />
        </Grid>
        <Grid container spacing={4} item xs={12} sm={4}>
          <Grid item xs={12}>
            <TotalAchat />
          </Grid>
          <Grid item xs={12}>
            <TotalExpenses />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid container spacing={4} item xs={12}>
          <Grid item xs={12} sm={12}>
            <InvoicesToValidate />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
