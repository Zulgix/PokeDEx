import React, { useState, useEffect } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import axios from "axios";

const types = [
  {
    title: "Normal",
    value: "normal",
  },
  {
    title: "Grass",
    value: "grass",
  },
  {
    title: "Fire",
    value: "fire",
  },
  {
    title: "Water",
    value: "water",
  },
];

function TypeFilter() {
  const [pokemonType, setPokemonType] = useState("normal");
  const [typePic, setTypePic] = useState("");

  useEffect(() => {
    if (pokemonType);
    getType();
  }, [pokemonType]);

  const handleChange = (event) => {
    setPokemonType(event.target.value);
    console.log(event.target.value);
  };

  const getType = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/type/${pokemonType}`; //gets pokemons by type
      const res = await axios.get(url);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container direction="column" className="container">
      <label>select Type:</label>
      <select
        name="type"
        id="pokemons"
        className="select"
        onChange={(event) => {
          console.log(event);
          handleChange(event);
        }}
      >
        {types.map((type) => (
          <option value={type.value} key={type.title}>{type.title}</option>
        ))}
      </select>
      <Paper elevation={12} className="paper">
        <img src={typePic} />
      </Paper>
    </Grid>
  );
}

export default TypeFilter;
