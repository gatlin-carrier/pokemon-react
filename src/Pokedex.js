import React from "react";
import PokedexItem from "./PokedexItem";
import PokemonDetail from "./PokedexDetail";
import Search from "./Search";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { withRouter } from "react-router";
import "./Pokedex.css";

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
    return renderedList ? (
      <div>
        <Search onFormSubmit={this.props.onFormSubmit} />

        <IconButton onClick={() => this.props.getPreviousPokemonList()}>
          <ArrowBackIosIcon />
        </IconButton>

        <IconButton onClick={() => this.props.getNextPokemonList()}>
          <ArrowForwardIosIcon />
        </IconButton>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            {renderedList}
          </Grid>
          <Grid item xs={6}>
            <PokemonDetail
              pokemon={this.props.selectedPokemon}
              addPokemonToTeam={this.props.addPokemonToTeam}
            />
          </Grid>
        </Grid>
        <IconButton onClick={() => this.props.getPreviousPokemonList()}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={() => this.props.getNextPokemonList()}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    ) : null;
  }
}

export default withRouter(Pokedex);
