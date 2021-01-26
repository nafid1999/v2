import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";

import MyTasks from "./components/MyTasks";
import PaidInvoice from "./components/PaidInvoice";
import UnpaidInvoice from "./components/UnpaidInvoice";
import LastActions from "./components/LastActions";
import Statistics from "./components/Statistics";
import AddInvoice from "./components/AddInvoice";
import TotalExpenses from "./components/TotalExpenses";
import InvoicesToValidate from "./components/InvoicesToValidate";
import TotalAchat from "./components/TotalAchat";

import useStyles from "./style.js";

function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container alignItems="stretch" className={classes.firstGrid}>
        <Grid item xs={12} sm={4}>
          <MyTasks elevation={26} square />
        </Grid>
        <Grid container item xs={12} sm={8}>
          <Grid item xs={6}>
            <PaidInvoice elevation={26} square />
          </Grid>
          <Grid item xs={6}>
            <UnpaidInvoice
              elevation={26}
              square
              style={{ background: "#f8f9fa" }}
            />
          </Grid>
          <Grid item xs={6}>
            <AddInvoice elevation={26} square />
          </Grid>
          <Grid item xs={6}>
            <LastActions elevation={26} square />
          </Grid>
        </Grid>
      </Grid>
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
            <InvoicesToValidate isDashboard={true}/>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
