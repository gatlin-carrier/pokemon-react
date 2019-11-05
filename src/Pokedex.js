import React from "react";
import PokedexItem from "./PokedexItem";
import PokedexDetail from "./PokedexDetail";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import axios from "axios";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const renderedList = this.props.pokemonList.map(pokemon => {
      return (
        <PokedexItem
          onPokemonSelect={this.props.onPokemonSelect}
          key={pokemon.id}
          pokemon={pokemon}
        />
      );
    });
    return (
      <Grid container spacing={1}>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="flex-start"
        >
          {renderedList}
          <ArrowBackIosIcon
            onClick={() => this.props.getPreviousPokemonList()}
          />
          <ArrowForwardIosIcon
            onClick={() => this.props.getNextPokemonList()}
          />
        </Grid>
        <Grid>
          <PokedexDetail pokemon={this.props.selectedPokemon} />
        </Grid>
      </Grid>
    );
  }
}

export default Pokedex;
