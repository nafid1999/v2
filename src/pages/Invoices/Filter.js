/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import useStyles from "./style.js";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import format from 'date-fns/format';
import { connect } from "react-redux";
import { fetchInvoices, fetchListStatus } from "../../redux/actions/invoices";

function Filter(props) {
    const classes = useStyles();
    const { t } = useTranslation();
    const [status, setStatus] = React.useState([]);
    const [filter, setFilter] = React.useState({ invoiceNoOrSupplierCode: '', status: [], startDate: null, endDate: null, pageNo: null, pageSize: null });
    const handleChangeStatus = (event) => {
        setFilter({ ...filter, status: event.target.value });
        setStatus(event.target.value);
        props.fetchInvoices({ ...filter, status: event.target.value });

    };
    useEffect(() => {
        props.fetchInvoices();
        props.fetchListStatus();
        console.log("status", status)
    }, []);
    return (

        <Grid container spacing={2} xs={12} alignItems="stretch" justify="center">
            <Grid item container xs={12} alignItems="stretch" justify="center" spacing={2}>
                <Grid item xs={4} alignItems="stretch" justify="center"  >
                    <FormControl fullWidth>
                        <InputLabel id="search"> </InputLabel>
                        <Input
                            id="standard-adornment-search"
                            type="text"
                            value={filter.invoiceNoOrSupplierCode}
                            onChange={(event) => {
                                setFilter({ ...filter, invoiceNoOrSupplierCode: event.target.value });
                                props.fetchInvoices({ ...filter, invoiceNoOrSupplierCode: event.target.value });
                            }}
                            placeholder={t('SearchInvoice')}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconButton
                                        color="primary"
                                        aria-label="Recherche"
                                        className={classes.searchIcon}
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                </Grid>
                <Grid item container xs={4} justify="center">
                    <Grid item xs={6}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="startDate"
                                label={t("StartDate")}
                                type="date"
                                value={filter.startDate}
                                onChange={(event) => {
                                    setFilter({ ...filter, startDate: format(new Date(event.target.value), 'yyyy-MM-dd') });
                                    props.fetchInvoices({ ...filter, startDate: event.target.value });
                                }}
                                // defaultValue={currentDate()}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Grid>
                    <Grid item xs={6}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="endDate"
                                label={t("EndDate")}
                                type="date"
                                value={filter.endDate}
                                onChange={(event) => {
                                    setFilter({ ...filter, endDate: format(new Date(event.target.value), 'yyyy-MM-dd') });
                                    props.fetchInvoices({ ...filter, endDate: event.target.value });
                                }}
                                //defaultValue={currentDate()}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Grid>
                </Grid>
                <Grid item container xs={4} justify="center">
                    <FormControl fullWidth>
                        <InputLabel id="status">{t('Status')}</InputLabel>
                        <Select
                            labelId="status"
                            id="statusId"
                            multiple
                            value={filter.status}
                            onChange={handleChangeStatus}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                        >
                            {props.statusList && props.statusList.map((row, i) => (
                                <MenuItem key={i} value={row.code}>
                                    <Checkbox checked={filter.status.indexOf(row.code) > -1} />
                                    <ListItemText primary={row.label} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    const dataQueris = state.requests.queries;
    return ({
        invoices: dataQueris.LIST_FETCH_INVOICE && dataQueris.LIST_FETCH_INVOICE.data,
        statusList: dataQueris.LIST_FETCH_STATUS && dataQueris.LIST_FETCH_STATUS.data && dataQueris.LIST_FETCH_STATUS.data.invoiceStatusList

    })
};
export default connect(mapStateToProps, { fetchInvoices, fetchListStatus })(Filter);
