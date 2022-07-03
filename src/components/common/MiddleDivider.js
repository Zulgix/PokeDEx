import { Divider, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  divider: {
    height: "6px",
  },
}));

const MiddleDivider = () => {
  const classes = useStyles();
  return <Divider className={classes.divider} />;
};

export default MiddleDivider;
