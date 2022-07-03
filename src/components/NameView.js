import { Grid, Typography } from "@material-ui/core";
import React from "react";
import commonClasses from "../UI/classes";

const NameView = ({ data }) => {
  const classes = commonClasses();
  return (
    <Grid item className={classes.inner_info_grid}>
      <Typography variant="h5"> {data?.name} </Typography>
    </Grid>
  );
};

export default NameView;
