import { Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import { usePokemonData, usePokemonName } from "../context/PokedexContext";
import InfoCard from "./InfoCard";
import Screen from "./Screen";

const useStyles = makeStyles((theme) => ({
  view_grid: {
    justifyContent: "center",
    textAlign: "center",
    fontSize: "1.3rem",
  },
}));

const PokeDex = ({}) => {
  const classes = useStyles();
  const { updatePokemonName } = usePokemonName();
  const { pokeNumber } = usePokemonData();

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePokemonName(event.target[0].value);
  };

  const rightClick = () => {
    const value = (pokeNumber + 1).toString();
    updatePokemonName(value);
  };

  const leftClick = () => {
    const value = (pokeNumber - 1).toString();
    updatePokemonName(value);
  };

  return (
    <>
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        className="textfeildContainer"
        overflow="auto"
      >
        <Grid item>
          <form onSubmit={handleSubmit}>
            <TextField
              className="input"
              fullWidth
              id="filled-basic"
              label="Enter Pokemon Name:"
              variant="outlined"
              type="text"
              placeholder="Enter Pokemon Name:"
            />
          </form>
        </Grid>
      </Grid>
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        className={classes.view_grid}
      >
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          item
          xs={12}
          md={6}
        >
          <Screen rightClick={rightClick} leftClick={leftClick} />
        </Grid>
        <Grid
          container
          item
          justifyContent="flex-start"
          alignItems="center"
          xs={12}
          md={6}
        >
          <InfoCard />
        </Grid>
      </Grid>
    </>
  );
};

export default PokeDex;
