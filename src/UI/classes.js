import React from "react";
import { makeStyles } from "@material-ui/core";

const commonClasses = makeStyles((theme) => ({
    main_grid: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      height: 500,
    },
    item_grid_header_container: {
      background: "#4caf50",
      height: "15%",
      justifyContent: "center",
      alignItems: "center",
    },
    view_grid: {
      justifyContent: "center",
      textAlign: "center",
      fontSize: "1.3rem",
    },
    type_frame: {
      justifyContent: "center",
    },
  
    stats_frame: {
      justifyContent: "center",
    },
  
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    info_grid_main: {
      justifyContent: "center",
      textAlign: "center",
      border: "5px solid black",
      borderRadius: "20px",
      height: "35rem",
      spaceBetween: "50px",
    },
    paper: {
      width: "30%",
      justifyContent: "center",
      background: "#7C99AC",
    },
  
    button_container_grid: {
      spaceBetween: "3em",
      justifyContent: "center",
      background: "white",
      border: "5px solid grey",
      borderRadius: "10px",
    },
    inner_info_grid: {
      background: "white",
      border: "5px solid grey",
      borderRadius: "10px",
      justifyContent: "center",
      paddingTop: "5px",
    },
  }));

  export default commonClasses;