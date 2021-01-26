import React, { Fragment } from "react";
import InvoicesToValidate from "../Home/components/InvoicesToValidate";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";

import Filter from "./Filter";
import { Link as RouterLink } from 'react-router-dom';
import useStyles from "./style.js";


function List() {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <Fragment >
            <Grid container spacing={2} className={classes.firstGrid} alignItems="center" alignContent="flex-end" >
                <Grid item xs={10} >
                    <Filter />
                </Grid>
                <Grid item  xs={2} justify="center" >
                    <Button fullWidth   variant="contained" color="primary" component={RouterLink} to="/add" >
                        {t("Add an invoice")}
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <InvoicesToValidate isDashboard={false}/>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default List;
