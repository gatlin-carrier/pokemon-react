import React from "react";

const PokedexDetail = props => {
  return (
    <div>
      {props.pokemon ? (
        <div>
          <h1>{props.pokemon.name}</h1>
          <img src={props.pokemon.sprites.front_default} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default PokedexDetail;
