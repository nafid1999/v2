import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";

import ChartCard from "../../components/ChartCard";
import NumberIconCard from "../../components/NumberIconCard";

import useStyles from "./style.js";

function Home() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container alignItems="stretch" spacing={4}>
        <Grid item xs="12" sm="4">
          <ChartCard
            title="Evolution des candidats"
            subtitle="304"
            variation="+5.78%"
            color="primary.main"
            data={[50, 59, 70, 65, 56, 80, 70]}
          />
        </Grid>
        <Grid item xs="12" sm="4">
          <ChartCard
            title="Evolution des candidatures"
            subtitle="117"
            variation="+2.78%"
            color="info.main"
            data={[67, 59, 70, 65, 56, 80, 81]}
          />
        </Grid>
        <Grid container item xs="12" sm="4" direction="column" spacing={4}>
          <Grid item>
            <NumberIconCard number="17" title="Offres" Icon={AccessAlarmIcon} />
          </Grid>
          <Grid item>
            <NumberIconCard
              number="15"
              title="Actions à faire"
              Icon={AccessAlarmIcon}
              color="info.main"
            />
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Home;
