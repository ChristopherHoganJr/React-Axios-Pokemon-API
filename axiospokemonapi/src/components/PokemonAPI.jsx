import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonAPI = () => {
  const [pokemon, setPokemon] = useState([]);
  const [renderPokemon, setRenderPokemon] = useState(false);

  const getPokemon = () => {
    setRenderPokemon(!renderPokemon);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        setPokemon(response.data.results);
      });
  };

  return (
    <fieldset>
      <legend>PokemonAPI</legend>
      <button onClick={() => getPokemon()}>
        {renderPokemon ? "Hide Pokemon Names" : "Show Pokemon Names"}
      </button>
      <ol>
        {renderPokemon ? (
          pokemon.map((p, idx) => <li key={idx}>{p.name}</li>)
        ) : (
          <p>Nothing yet</p>
        )}
      </ol>
    </fieldset>
  );
};

export default PokemonAPI;
