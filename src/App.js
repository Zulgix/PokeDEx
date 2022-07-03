import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import PokeDex from "./components/PokeDex";
import PokedexContext from "./context/PokedexContext";

function App() {
  return (
    <Grid className="container" container direction="column" wrap="nowrap">
      <PokedexContext>
        <PokeDex />
      </PokedexContext>
    </Grid>
  );
}

export default App;
