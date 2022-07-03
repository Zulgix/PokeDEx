import { Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import commonClasses from "../UI/classes";
import NameView from "./NameView";
import ImgView from "./ImgView";
import NumberView from "./NumberView";
import ArrowsView from "./ArrowsView";
import { usePokemonData } from "../context/PokedexContext";

const Screen = ({ rightClick, leftClick }) => {
  const classes = commonClasses();
  const pokemonData = usePokemonData();

  console.log(pokemonData);
  return (
    <Grid
      item
      container
      direction="column"
      className={classes.info_grid_main}
      xs={6}
      md={6}
      lg={6}
      // className={classes.view_grid}
    >
      <NameView data={pokemonData} />
      <ImgView data={pokemonData} />

      <NumberView data={pokemonData} />
      <ArrowsView data={pokemonData} rightClick={rightClick} leftClick={leftClick} />
    </Grid>
  );
};
export default Screen;
