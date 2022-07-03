import { Grid, Paper } from "@material-ui/core";
import React from "react";
import commonClasses from "../UI/classes";

const StatsView = ({ data }) => {
  const classes = commonClasses();

  return (
    <Grid item className={classes.inner_info_grid}>
      {data?.map((stat) => [
        <Grid
          key={stat.stat.name}
          item
          container
          className={classes.type_frame}
        >
          <Paper elevation={20} className={classes.paper}>
            {stat.stat.name}:{stat.base_stat}
          </Paper>
        </Grid>,
      ])}
    </Grid>
  );
};
export default StatsView;
