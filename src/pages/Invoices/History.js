import React from "react";
import Grid from "@material-ui/core/Grid";
import useStyles from "./style.js";

import { useTranslation } from "react-i18next";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function History() {

    const classes = useStyles();
    const { t } = useTranslation();
    return (<List >
        {history.map((item) => (
            <ListItem >
                <ListItemText  primary={
                    <div className={classes.truncate}>
                        <strong>
                            @{item.name}
                        </strong>{'  -  '}
                        {item.date}
                    </div>
                } secondary={<Grid container xs={12} spacing={2} className={classes.space}>
                    <Grid container item xs={12} spacing={2}>
                        {item.status && <Grid item container xs={12} >
                            <Grid item xs={6} color="secondary"  >{t('Status')}</Grid>
                            <Grid item xs={6}  >{item.status}</Grid>
                        </Grid>}
                        {item.dateOfReceipt && <Grid item container xs={12}>
                            <Grid item xs={6} >{t('dateOfReceipt')}</Grid>
                            <Grid item xs={6} >{item.dateOfReceipt}</Grid>
                        </Grid>}
                        {item.verificationDate && <Grid item container xs={12}>
                            <Grid item xs={6} >{t('verificationDate')}</Grid>
                            <Grid item xs={6} >{item.verificationDate}</Grid>
                        </Grid>}
                        {item.controlDate && <Grid item container xs={12}>
                            <Grid item xs={6} >{t('controlDate')}</Grid>
                            <Grid item xs={6} >{item.controlDate}</Grid>
                        </Grid>}
                    </Grid>
                    <Grid item xs={12} spacing={2}>
                         <Divider />
                    </Grid>
                </Grid>} />
            </ListItem>

        ))}
    </List>

    );
}

const history = [{ date: "07/08/2020", name: "MehdiNafe", status: "Mise en paiement" },
{ date: "08/08/2020", name: "LindaMedefine", status: "Mise en Contrôle", dateOfReceipt: "08/08/2020", verificationDate: "08/08/2020", controlDate: "08/08/2020" },
{ date: "09/08/2020", name: "Ilyass", status: "Mise en Contrôle" }];

export default History;

