import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import FileCopyRounded from "@material-ui/icons/FileCopyOutlined";
import { useTranslation } from "react-i18next";

import DashboardCard from "../../../../components/DashboardCard/index.js";


function PaidInvoice(props) {
  const { t } = useTranslation();

  return (
      <DashboardCard title={t("Paid invoices")} icon={FileCopyRounded} {...props}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={6}>
              <Typography
                variant="h5"
                color="primary"
                gutterBottom
                align="center"
              >
                24,860 €
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
                color="primary"
                gutterBottom
                align="center"
              >
                2,025 €
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                gutterBottom
                align="center"
              >
                {t("Total VAT amount")}
              </Typography>
            </Grid>
          </Grid>
        </DashboardCard>
  );
}

export default PaidInvoice;
