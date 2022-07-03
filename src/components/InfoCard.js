import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import TypesView from "./TypesView";
import commonClasses from "../UI/classes";
import AbilitiesView from "./AbilitiesView";
import StatsView from "./StatsView";
import { usePokemonData } from "../context/PokedexContext";

const InfoCard = ({ }) => {
  const classes = commonClasses();
  const pokemonData = usePokemonData();


  return (
    <Grid
      container
      item
      direction="column"
      xs={6}
      md={6}
      lg={6}
      className={classes.info_grid_main}
    >
      <Grid item className={classes.info_grid}>
        <Typography variant="h5"> Info </Typography>

        <TypesView data={pokemonData} />
        <AbilitiesView abilities={pokemonData?.abilities} hiddenAbilities={pokemonData?.hidden_abilities} />
        <StatsView data={pokemonData?.stats} />
      </Grid>
    </Grid>
  );
};
export default InfoCard;
