import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import commonClasses from "../UI/classes";


const TypesView = ({ data }) => {
  const classes = commonClasses();
  return (
    <Grid item className={classes.inner_info_grid}>
      <Typography variant="h5">Types</Typography>
      {data?.types?.map((type) => (
        <Grid
          key={type.type.name}
          item
          container
          className={classes.type_frame}
        >
          <Paper elevation={20} className={classes.paper}>
            <Typography variant="h5">{type.type.name}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TypesView;
