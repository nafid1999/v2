import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style.js";

import { useTranslation } from "react-i18next";
import { TextField, DialogTitle, Typography, DialogContent, Chip, Dialog, DialogActions, Button } from "@material-ui/core";
import format from 'date-fns/format';
import Autocomplete from "@material-ui/lab/Autocomplete";


const currentDate = () => {
    return format(new Date(), 'yyyy-MM-dd');

}
function Form(props) {
    const { t } = useTranslation();

    return (<Dialog
        open={props.open}
        onClose={props.handleCloseCorrectPopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            <Typography variant="h6" color="primary" >
                {t('editForm')} : INV-87239 <Chip label={t('Invoices to verify')} size="small" color="secondary" />
            </Typography>
        </DialogTitle>
        <DialogContent>
            <form>
                <Grid container xs={12} spacing={3}>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <Autocomplete

                                options={suppliers}
                                getOptionLabel={(option) => option.title}
                                id="Supplier"
                                renderInput={(params) => <TextField {...params} label={t('Supplier')} margin="normal" />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete

                                options={suppliers}
                                getOptionLabel={(option) => option.title}
                                id="PaymentTerms"
                                renderInput={(params) => <TextField {...params} label={t('Payment terms')} margin="normal" />}
                            /></Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={6}><TextField label={t('Release date')} type="date" defaultValue={currentDate()} /></Grid>
                        <Grid item xs={6}><TextField label={t('Due date')} type="date" defaultValue={currentDate()} /></Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={6}><TextField label={t('Delivery address')} multiline rows={2} /></Grid>
                        <Grid item xs={6}><TextField label={t('Billing address')} multiline rows={2} /></Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid item xs={6}><TextField label={t('Total HT')} type="number" /></Grid>
                        <Grid item xs={6}><TextField label={t('VAT amount')} type="number" /></Grid>
                    </Grid>
                </Grid>
            </form>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleCloseCorrectPopup} color="secondary" autoFocus>
                {t('cancel')}
            </Button>
            <Button onClick={props.handleCloseCorrectPopup} color="secondary" >
                {t('confirm')}
            </Button>
        </DialogActions>
    </Dialog>
    );

}

const suppliers = [
    { title: 'supplier1', code: "s1" },
    { title: 'supplier2', code: "s2" },
    { title: 'supplier3', code: "s3" },
    { title: 'supplier4', code: "s4" },
    { title: 'supplier5', code: "s5" },
]
const paymentTerms = [
    { title: 'immediat', code: "p1" },
    { title: 'cheque', code: "p2" }
]
export default Form;