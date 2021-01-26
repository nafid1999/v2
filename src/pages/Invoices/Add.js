import React from "react";

import AddInvoice from "../Home/components/AddInvoice"
import Grid from "@material-ui/core/Grid";


function Add() {

    return (
        <Grid container spacing={3}>
            <Grid item container spacing={3} alignItems="stretch">
                <AddInvoice />
            </Grid>
        </Grid>
    );

}
export default Add;
