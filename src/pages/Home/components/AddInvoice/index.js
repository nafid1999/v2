import React, { Fragment } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { useTranslation } from "react-i18next";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "./style.js";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import { connect } from 'react-redux';
import { useHistory } from 'react-router'
import DashboardCard from "../../../../components/DashboardCard/index.js";
import { createInvoice } from "../../../../redux/actions/invoices/index.js";

const acceptedInvoices = ['image/jpeg', 'image/png', 'application/pdf'];

function AddInvoice(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const [files, setFiles] = React.useState([]);

  const onloadFiles = (files) => {
    setFiles(files);
    if (typeof props.changeFile !== "undefined") {
      props.changeFile(files);
    }
  }
  const onDeleteFile = (file) => {
    files.splice(files.indexOf(file), 1);
  }
  const onclick = (e) => {
    files.forEach(element => {
      props.createInvoice(element);
    });
    history.push("/invoices");
  }

  return (
    <DashboardCard
      title={t("Add an invoice")}
      {...props}
    >
      <Grid container spacing={2} justify="center" xs={12}>

        <Card {...props} className={classes.dropzoneCard}>
          <CardContent  >
            <DropzoneArea
              filesLimit={10}
              showFileNames={true}
              dropzoneText={
                <Fragment>
                  {t("Add your Invoice")}
                  <u>{t("browse")}</u>
                </Fragment>
              }
              dropzoneClass={classes.dropzone}
              dropzoneParagraphClass={classes.text}
              onChange={onloadFiles}
              onDelete={onDeleteFile}
              acceptedFiles={acceptedInvoices}
            />
          </CardContent>

          <CardActions justify="center">
            <Button variant="contained" color="secondary" className={classes.dropzoneActions} onClick={onclick}>
              {t("Add an invoice")}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </DashboardCard>
  );
}
const mapDispatchToProps = {
  createInvoice
};
export default connect(null, mapDispatchToProps)(AddInvoice);
