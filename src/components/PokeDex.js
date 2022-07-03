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
      <Grid container item spacing={2} className={classes.view_grid}>
        <Screen rightClick={rightClick} leftClick={leftClick} />
        <InfoCard />
      </Grid>
    </>
  );
};

export default PokeDex;
