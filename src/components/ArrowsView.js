import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import commonClasses from "../UI/classes";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const ArrowsView = ({ data, rightClick, leftClick }) => {
  const classes = commonClasses();
  return (
    <Grid item container className={classes.button_container_grid}>
      <Grid item xs={4}>
        <IconButton onClick={leftClick}>
          <ChevronLeftIcon />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <IconButton onClick={rightClick}>
          <ChevronRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ArrowsView;
