import React from "react";
import PokedexItem from "./PokedexItem";
import PokedexDetail from "./PokedexDetail";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

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
        <IconButton>
          <ArrowBackIosIcon
            onClick={() => this.props.getPreviousPokemonList()}
          />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon
            onClick={() => this.props.getNextPokemonList()}
          />
        </IconButton>
        <Grid container spacing={3}>
          <Grid
            item
            xs={6}
            direction="column"
            justify="space-around"
            alignItems="flex-start"
          >
            {renderedList}
          </Grid>
          <Grid
            item
            xs={6}
            direction="column"
            alignItems="flex-end"
            justify="flex-start"
          >
            <PokedexDetail pokemon={this.props.selectedPokemon} />
          </Grid>
        </Grid>
        <IconButton>
          <ArrowBackIosIcon
            onClick={() => this.props.getPreviousPokemonList()}
          />
        </IconButton>
        <IconButton>
          <ArrowForwardIosIcon
            onClick={() => this.props.getNextPokemonList()}
          />
        </IconButton>
      </div>
    ) : null;
  }
}

export default Pokedex;
