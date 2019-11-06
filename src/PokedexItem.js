import React from "react";
import PokemonCard from "./PokemonCard";

const PokedexItem = props => {
  return (
    <div>
      <PokemonCard
        pokemon={props.pokemon}
        image={props.pokemon.sprites.front_default}
        name={props.pokemon.name}
        types={props.pokemon.types}
        species={props.pokemon.species}
        id={props.pokemon.id}
        onPokemonSelect={props.onPokemonSelect}
      />
    </div>
  );
};

export default PokedexItem;
