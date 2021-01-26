import React from "react";
import Grid from "@material-ui/core/Grid";

import AddInvoice from "../Home/components/AddInvoice";
import InvoicesToValidate from "../Home/components/InvoicesToValidate";

function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={12}>
          <AddInvoice />
        </Grid>
        <Grid item xs={12} sm={12}>
            <InvoicesToValidate />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
