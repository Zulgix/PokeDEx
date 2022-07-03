import { Grid, Typography } from "@material-ui/core";
import React from "react";
import commonClasses from "../UI/classes";

const NumberView = ({ data }) => {
  const classes = commonClasses();
  return (
    <Grid item className={classes.inner_info_grid}>
      <Typography variant="h5">Pokemon Number: {data?.pokeNumber}</Typography>
    </Grid>
  );
};
export default NumberView;
