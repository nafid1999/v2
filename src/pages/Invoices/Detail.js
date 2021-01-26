/* eslint-disable react-hooks/exhaustive-deps*/
import React, { Fragment, useEffect } from "react";
import { connect } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from "./style.js";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from "react-i18next";
import Chip from "@material-ui/core/Chip";
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import History from "./History";
import { format } from "date-fns";

import { fetchInvoice, fetchDocumentInvoice, fetchSuppliers, updateInvoice } from '../../redux/actions/invoices';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} height="100%" fullWidth >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function ContentTabInvoice(props) {
    const classes = useStyles();
    const { t } = useTranslation();
    const [isEditFacture, setisEditFacture] = React.useState(false);
    const [rowToEdit, setRowToEdit] = React.useState(null);
    const [invoice, setInvoice] = React.useState(props.invoicePersisted);
    useEffect(() => {
        if (!invoice) {
            setInvoice(props.invoicePersisted);
        }
    });
    return (
        <Grid container xs={12} spacing={4} fullWidth justify="center" >
            <Grid container item xs={11} spacing={4} justify="center">
                <Grid container item xs={12} spacing={4}>
                    <Grid item xs={6}>

                        <Typography
                            variant="subtitle2"
                            align="left"
                        >
                            {t('Supplier')}<br />
                            {isEditFacture ?
                                <Select
                                    labelId="supplier"
                                    id="supplier"
                                    fullWidth
                                    value={invoice && invoice.supplier && invoice.supplier.label}
                                >
                                    <MenuItem value="">
                                        <em>{t('None')}</em>
                                    </MenuItem>
                                    {props.suppliers && props.suppliers.map((supplier, i) => { return <MenuItem key={i} value={supplier.code}>{supplier.label}</MenuItem> })}
                                </Select>
                                :
                                <Typography
                                    variant="subtitle2"
                                    align="left"
                                    color="secondary"
                                >
                                    {invoice && invoice.supplier && invoice.supplier.label}
                                </Typography>
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle2"
                            align="left"
                        >
                            {t('Release date')}<br />
                            {isEditFacture ?
                                <Input fullWidth type="date" onChange={(e) => { setInvoice({ ...invoice, issueDate: e.target.value }); }} value={invoice && invoice.issueDate ? format(new Date(invoice.issueDate), 'yyyy-MM-dd') : null} />
                                :
                                <Typography
                                    variant="subtitle2"
                                    align="left"
                                    color="secondary"
                                >
                                    {invoice && invoice.issueDate}
                                </Typography>}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={4}>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle2"
                            align="left"
                        >
                            {t('Delivery address')}<br />
                            {isEditFacture ?
                                <Input fullWidth onChange={(e) => { setInvoice({ ...invoice, deliveryAddress: e.target.value }); }} value={invoice && invoice.deliveryAddress} />
                                :
                                <Typography
                                    variant="subtitle2"
                                    align="left"
                                    color="secondary"
                                >
                                    {invoice && invoice.deliveryAddress}
                                </Typography>
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle2"
                            align="left"
                        >
                            {t('Due date')}<br />
                            {isEditFacture ?
                                <Input fullWidth type="date" onChange={(e) => { setInvoice({ ...invoice, dueDate: e.target.value }); }} value={invoice && invoice.issueDate ? format(new Date(invoice.dueDate), 'yyyy-MM-dd') : null} />
                                :
                                <Typography
                                    variant="subtitle2"
                                    align="left"
                                    color="secondary"
                                >
                                    {invoice && invoice.dueDate}
                                </Typography>}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={4}>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle2"
                            align="left"
                        >
                            {t('Billing addres')}
                            {isEditFacture ?
                                <Input fullWidth onChange={(e) => { setInvoice({ ...invoice, billingAddress: e.target.value }); }} value={invoice && invoice.billingAddress} />
                                :
                                <Typography
                                    variant="subtitle2"
                                    align="left"
                                    color="secondary"
                                >
                                    {invoice && invoice.billingAddress}
                                </Typography>}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="subtitle2"
                            align="left"
                        >
                            {t('Payment terms')}
                            {isEditFacture ?
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    fullWidth
                                    value={invoice && invoice.paymentTerms && invoice.paymentTerms.label}
                                >
                                    <MenuItem value="">
                                        <em>{t('None')}</em>
                                    </MenuItem>
                                    {props.paymentTerms && props.paymentTerms.map(paymentTerm => { return <MenuItem value={paymentTerm.code}>{paymentTerm.label}</MenuItem> })}
                                </Select>
                                :
                                <Typography
                                    variant="subtitle2"
                                    align="left"
                                    color="secondary"
                                >
                                    {invoice && invoice.paymentTerms && invoice.paymentTerms.label}
                                </Typography>}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}>
                {isEditFacture ?
                    <Button variant="contained" size="medium" onClick={() => { setisEditFacture(false); props.updateInvoice(props.history.location.state.idInvoice, invoice) }} color="secondary" autoFocus>
                        {t('save')}
                    </Button> :
                    <Button variant="contained" size="medium" onClick={() => { setisEditFacture(true) }} color="secondary" autoFocus>
                        {t('edit')}
                    </Button>}
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="h6"
                    align="left"
                >
                    {t('Commands')}
                </Typography>
                <TableContainer component={Paper} elevation={0}  >
                    <Table className={classes.table} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">{t('codeArticle')}</TableCell>
                                <TableCell align="right">{t('designation')}</TableCell>
                                <TableCell align="right">{t('quantity')}</TableCell>
                                <TableCell align="right">{t('vat')}</TableCell>
                                <TableCell align="right">{t('unitPrice')}</TableCell>
                                <TableCell align="right">{t('totalHt')}</TableCell>
                                <TableCell align="right">{t('deliveryDelay')}</TableCell>
                                <TableCell align="center" colSpan={2}>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {commands.map((row) => (
                                <TableRow key={row.id} >

                                    {rowToEdit && row.id === rowToEdit ?
                                        <Fragment>
                                            <TableCell className={classes.tableCell}> <Input value={row.codeArticle} /></TableCell>
                                            <TableCell className={classes.tableCell}> <Input value={row.designation} /></TableCell>
                                            <TableCell className={classes.tableCell}> <Input value={row.quantity} /></TableCell>
                                            <TableCell className={classes.tableCell}> <Input value={row.vat} /></TableCell>
                                            <TableCell className={classes.tableCell} align="right"> <Input value={row.unitPrice} /></TableCell>
                                            <TableCell className={classes.tableCell} align="right"> <Input value={row.totalHt} /></TableCell>
                                            <TableCell className={classes.tableCell} align="right"> <Input value={row.unitPrice} /></TableCell>
                                            <TableCell><IconButton onClick={() => setRowToEdit(null)}>
                                                <Clear />
                                            </IconButton></TableCell>
                                            <TableCell><IconButton>
                                                <Check />
                                            </IconButton></TableCell>
                                        </Fragment>
                                        :
                                        <Fragment>
                                            <TableCell><Typography
                                                variant="subtitle"
                                                align="left"
                                            >
                                                {row.codeArticle}
                                            </Typography></TableCell>
                                            <TableCell><Typography
                                                variant="subtitle"
                                                align="left"
                                            >
                                                {row.designation}
                                            </Typography></TableCell>
                                            <TableCell><Typography
                                                variant="subtitle"
                                                align="left"
                                            >
                                                {row.quantity}
                                            </Typography></TableCell>
                                            <TableCell><Typography
                                                variant="subtitle"
                                                align="left"
                                            >
                                                {row.vat}
                                            </Typography></TableCell>
                                            <TableCell align="right"><Typography
                                                variant="subtitle"
                                                align="left"
                                            >
                                                {row.unitPrice}
                                            </Typography></TableCell>
                                            <TableCell align="right"><Typography
                                                variant="subtitle"
                                                align="left"
                                            >
                                                {row.totalHt}
                                            </Typography></TableCell>
                                            <TableCell align="right"><Typography
                                                variant="subtitle"
                                                align="left"
                                            >
                                                {row.deliveryDelay}
                                            </Typography></TableCell>
                                            <TableCell><IconButton>
                                                <DeleteOutline />
                                            </IconButton></TableCell>
                                            <TableCell><IconButton onClick={() => {
                                                if (rowToEdit != null && row.id === rowToEdit) {
                                                    setRowToEdit(null);

                                                } else {
                                                    setRowToEdit(row.id);
                                                }
                                            }}>
                                                <Edit />
                                            </IconButton></TableCell>
                                        </Fragment>
                                    }

                                </TableRow>

                            ))}
                            <TableRow>
                                <TableCell rowSpan={6} />
                                <TableCell rowSpan={6} />
                                <TableCell rowSpan={6} />
                                <TableCell rowSpan={6} />
                                <TableCell align="right" classes={{ root: classes.tableCell }}>{t('Total HT')}</TableCell>
                                <TableCell align="right" classes={{ root: classes.tableCell }}>{invoice && invoice.totalHT}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right">{t('VAT amount')}</TableCell>
                                <TableCell align="right">{invoice && invoice.vat} </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="right" classes={{ root: classes.tableCell }}>{t('Total amount')}</TableCell>
                                <TableCell align="right" classes={{ root: classes.tableCell }}> {invoice && invoice.total} €</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

function ContentTabCommand() {
    return (<div>
        Détails Commande
    </div>
    );
}

function Detail(props) {
    const classes = useStyles();
    const { t } = useTranslation();

    useEffect(() => {
        props.fetchSuppliers();

        if (props.history.location.state && props.history.location.state.idInvoice) {
            props.fetchInvoice(props.history.location.state.idInvoice);
            props.fetchDocumentInvoice(props.history.location.state.idInvoice, 'inv');
        }

    }, []);

    const [value, setValue] = React.useState(0);
    const [scValue, setScValue] = React.useState(0);
    const [openRejectPopup, setOpenRejectPopup] = React.useState(false);
    const handleCloseRejectPopup = () => {
        setOpenRejectPopup(!openRejectPopup)
    }

    const filedate = () => {

        const blob = new Blob([props.document], {
            type: "application/pdf"
        });
        const fileURL = URL.createObjectURL(blob);
        return fileURL;
    }
    const defaultPropsRejectionReason = {
        options: rejectReasons,
        getOptionLabel: (option) => option.title,
    };
    const theme = useTheme();

    const handleChangeFirstTab = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeSecondTab = (event, newScValue) => {
        setScValue(newScValue);
    };
    const DialogReject = () => <Dialog
        open={openRejectPopup}
        onClose={handleCloseRejectPopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">{t('rejectMessage')}</DialogTitle>
        <DialogContent>
            <Autocomplete
                {...defaultPropsRejectionReason}
                id="rejectionReason"
                renderInput={(params) => <TextField {...params} label={t('rejectionReason')} margin="normal" />}
            />
            <TextField
                id="outlined-multiline-static"
                label={t('rejectionDetails')}
                multiline
                fullWidth
                rows={4}
                defaultValue=""
                variant="outlined"
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseRejectPopup} color="secondary" autoFocus>
                {t('cancel')}
            </Button>
            <Button onClick={handleCloseRejectPopup} color="secondary" >
                {t('confirm')}
            </Button>
        </DialogActions>
    </Dialog>
    return (
        <Fragment>
            <Grid container xs={12} >
                <Grid item container xs={6} className={classes.root}>
                    <Grid item xs={12} style={{ height: "5%" }}>
                        <Typography variant="h6" align="left" color="primary" >
                            {props.invoicePersisted && props.invoicePersisted.invoiceNo} <Chip label={props.invoicePersisted && props.invoicePersisted.status && props.invoicePersisted.status.label} size="small" color="secondary" />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <AppBar position="static" color="default" elevation={0}>
                            <Tabs
                                value={value}
                                onChange={handleChangeFirstTab}
                                indicatorColor="secondary"
                                textColor="secondary"
                                variant="fullWidth"
                                aria-label="tab facture"
                            >

                                <Tab label={t('Invoice Details')} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Grid container xs={12} spacing={2} alignItems="stretch" justify="flex-end">
                                <Grid item xs={12}>
                                    <ContentTabInvoice {...props} />
                                </Grid>

                                <Grid item container xs={12} alignItems="center" spacing={1} >
                                    <Grid item xs={4}>
                                        <Button variant="contained" fullWidth className={classes.rejectButton} onClick={() => { setOpenRejectPopup(true) }}>
                                            {t("Reject Invoice")}
                                        </Button>
                                        <DialogReject />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="contained" fullWidth className={classes.correctButton} >
                                            {t("Correct Extraction")}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button variant="contained" fullWidth className={classes.controlButton} to="/">
                                            {t("Control")}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <ContentTabCommand />
                        </TabPanel>
                    </Grid>
                </Grid>
                <Grid item container xs={6} className={classes.root}>
                    <Grid item xs={12}>
                        <AppBar position="relative" color="default" elevation={0}>
                            <Tabs
                                value={scValue}
                                onChange={handleChangeSecondTab}
                                indicatorColor="secondary"
                                textColor="secondary"
                                variant="fullWidth"
                                aria-label="full width tabs example2"
                            >

                                <Tab label={t('Invoice overview')} />
                                <Tab label={t('History')} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={scValue} index={0} dir={theme.direction}>
                            <iframe
                                src={filedate()}
                                type="application/pdf"
                                style={{ maxHeight: 700, backgroundcolor: "0xFF525659" }}
                                width="100%"
                                height="600px"
                                title="invoice"

                            />
                        </TabPanel>
                        <TabPanel value={scValue} index={1} dir={theme.direction}>
                            <History {...props} />
                        </TabPanel>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
}

const rejectReasons = [
    { title: 'motif1', code: "m1" },
    { title: 'motif2', code: "m2" },
    { title: 'motif3', code: "m3" },
    { title: 'motif4', code: "m4" },
    { title: 'motif5', code: "m5" },
]
const commands = [
    { id: "1", codeArticle: 'CD123', designation: "Désignation", quantity: '12', vat: "0.05", unitPrice: "10.00", totalHt: "13.00", deliveryDelay: "15" },
    { id: "2", codeArticle: 'CD123', designation: "Désignation", quantity: '12', vat: "0.05", unitPrice: "10.00", totalHt: "13.00", deliveryDelay: "15" },
    { id: "3", codeArticle: 'CD123', designation: "Désignation", quantity: '12', vat: "0.05", unitPrice: "10.00", totalHt: "13.00", deliveryDelay: "15" },

]
const mapStateToProps = state => {
    const dataQueris = state.requests.queries;
    return ({
        statusList: dataQueris.LIST_FETCH_STATUS && dataQueris.LIST_FETCH_STATUS.data && dataQueris.LIST_FETCH_STATUS.data.invoiceStatusList,
        paymentterms: dataQueris.LIST_FETCH_PAYMENT_TERM && dataQueris.LIST_FETCH_PAYMENT_TERM.data,
        suppliers: dataQueris.LIST_FETCH_SUPPLIER && dataQueris.LIST_FETCH_SUPPLIER.data,
        supplier: dataQueris.FETCH_SUPPLIER && dataQueris.FETCH_SUPPLIER.data,
        status: dataQueris.FETCH_STATUS && dataQueris.FETCH_STATUS.data,
        invoicePersisted: dataQueris.FETCH_INVOICE && dataQueris.FETCH_INVOICE.data,
        document: dataQueris.FETCH_DOCUMENT_INVOICE && dataQueris.FETCH_DOCUMENT_INVOICE.data,
        response: dataQueris.RESPONSE && dataQueris.RESPONSE.data
    })
};
const mapDispatchToProps = {
    fetchInvoice, fetchDocumentInvoice, fetchSuppliers, updateInvoice
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);