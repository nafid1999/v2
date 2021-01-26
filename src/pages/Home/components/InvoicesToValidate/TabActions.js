import React from "react";
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import  Menu from '@material-ui/core/Menu';
import  MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router'
import {  fetchDocumentInvoice ,deleteInvoice,fetchInvoices,downloadInvoice} from '../../../../redux/actions/invoices/index';


function TabActions(props) {

    const { t } = useTranslation();
    const history = useHistory();
   
    return (
            <Menu
                elevation={0}
                id={props.id}
                open={props.open}
                anchorEl={props.anchorEl}
                onClose={props.handleClose}
            >                

                <MenuItem  onClick={()=>{history.push("/invoices/details",{idInvoice:props.idInvoice})}}>
                    <IconButton aria-label="show">
                        <VisibilityIcon />
                </IconButton>
                <Typography variant="inherit">{t('Show')}</Typography>
            </MenuItem>
            <MenuItem onClick={
                    (e) => {
                        props.downloadInvoice(props.idInvoice);
                    }
                }>
                <IconButton aria-label="download" >
                    <GetAppIcon />
                </IconButton>
                    <Typography variant="inherit">{t('Download')}</Typography>
                </MenuItem>
                <MenuItem onClick={
                    (e) => {
                        props.deleteInvoice(props.idInvoice).then(response =>{
                            props.fetchInvoices();
                        });
                        props.handleClose();
                    }
                }>
                <IconButton aria-label="delete" >
                        <DeleteIcon />
                    </IconButton>
                    <Typography variant="inherit">{t('Delete')}</Typography>
                </MenuItem>
            </Menu>
    );
}

const mapStateToProps = state => {
    var dataQueris = state.requests.queries;
    return ({
        document: dataQueris.FETCH_DOCUMENT_INVOICE && dataQueris.FETCH_DOCUMENT_INVOICE.data,
    })
};
const mapDispatchToProps = {
    fetchDocumentInvoice,deleteInvoice,fetchInvoices,downloadInvoice
};
export default connect(mapStateToProps, mapDispatchToProps)(TabActions);