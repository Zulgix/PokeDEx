import React from "react";
import { Paper } from "@material-ui/core";

const PokeItem = (props) => {
  return (
    <Paper elevation={12} className="paper">
      <ul>
        <li>{props.name}</li>
        <li>{props.type}</li>
        <li>
          <img src={props.pic}></img>
        </li>
      </ul>
    </Paper>
  );
};

export default PokeItem;
