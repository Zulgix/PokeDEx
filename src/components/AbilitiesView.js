import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import commonClasses from "../UI/classes";

const AbilitiesView = ({ abilities, hiddenAbilities }) => {
  const classes = commonClasses();
  return (
    <Grid item container className={classes.inner_info_grid}>
      <Typography variant="h5">Abilities</Typography>

      <Grid item container className={classes.type_frame}>
        <Paper elevation={20} className={classes.paper}>
          {abilities}
        </Paper>
      </Grid>

      <Typography variant="h5">Hidden Abilities</Typography>
      <Grid item container className={classes.type_frame}>
        <Paper elevation={20} className={classes.paper}>
          {hiddenAbilities}
        </Paper>
      </Grid>
    </Grid>
  );
};
export default AbilitiesView;
