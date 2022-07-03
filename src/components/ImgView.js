import React from "react";
import commonClasses from "../UI/classes";
import { Grid } from "@material-ui/core";

const ImgView = ({ data }) => {
  const classes = commonClasses();
  return (
    <Grid item>
      <img className={classes.img} alt="complex" src={data?.picture} />
    </Grid>
  );
};
export default ImgView;
