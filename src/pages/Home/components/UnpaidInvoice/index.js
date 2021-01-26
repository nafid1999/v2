import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import InsertDriveFileRounded from "@material-ui/icons/InsertDriveFileOutlined";

import DashboardCard from "../../../../components/DashboardCard/index.js";
import { useTranslation } from "react-i18next";


function UnpaidInvoice(props) {
  const { t } = useTranslation();

  return (
    <DashboardCard title={t("Unpaid invoices")} icon={InsertDriveFileRounded} {...props}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={6}>
              <Typography
                variant="h5"
                color="primary"
                gutterBottom
                align="center"
              >
                4,060 €
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
                align="center"
              >
                {t("Total amount of invoices")}
              </Typography>
            </Grid>
            <Grid item xs={6} className="p-relative">
              <Divider orientation="vertical" absolute />
              <Typography
                variant="h5"
                color="error"
                gutterBottom
                align="center"
              >
                3,158 €
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
                align="center"
              >
                {t("Late")}
              </Typography>
            </Grid>
          </Grid>
        </DashboardCard>
  );
}

export default UnpaidInvoice;
