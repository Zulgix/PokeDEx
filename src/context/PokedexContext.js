import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

const PokemonDataContext = React.createContext({
    name: "",
    picture: "",
    abilities: "",
    hidden_abilities: "",
    types: "",
    stats: "",
    pokeNumber: "",
  });
const PokemonNameContext = React.createContext({
  pokemon: "",
  updatePokemonName: null,
});

export const usePokemonData = () => {
  return useContext(PokemonDataContext);
};

export const usePokemonName = () => {
  return useContext(PokemonNameContext);
};

const PokedexContext = ({ children }) => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  const getPokemon = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; //gets the spesific pokemon
      const { data } = await axios.get(url);
      const dataArry = {
        name: data.name,
        picture: data.sprites["front_default"],
        abilities: data.abilities[0].ability.name,
        hidden_abilities: data.abilities[1]?.ability.name,
        types: data.types,
        stats: data.stats,
        pokeNumber: data.id,
      };
      console.log(data);
      setPokemonData(dataArry);
    } catch (e) {
      console.log(e);
    }
  };

  const updatePokemonName = (value) => {
    setPokemon(value);
  };

  return (
    <PokemonDataContext.Provider value={pokemonData}>
      <PokemonNameContext.Provider
        value={{ pokemon, updatePokemonName }}
      >
        {children}
      </PokemonNameContext.Provider>
    </PokemonDataContext.Provider>
  );
};

export default PokedexContext;
