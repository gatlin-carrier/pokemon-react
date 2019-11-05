import React from "react";
import PokemonCard from "./PokemonCard";

const PokedexItem = props => {
  return (
    <div onClick={() => props.onPokemonSelect(props.pokemon)}>
      <PokemonCard
        image={props.pokemon.sprites.front_default}
        name={props.pokemon.name}
        types={props.pokemon.types}
        species={props.pokemon.species}
        id={props.pokemon.id}
      />
    </div>
  );
};

export default PokedexItem;
