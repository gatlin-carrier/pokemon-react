import React from "react";
import PokemonDetailCard from "./PokemonDetailCard";
import axios from "axios";

class PokemonDetail extends React.Component {
  state = {
    speciesDetails: null
  };

  getPokemonSpeciesDetails = async () => {
    if (this.props.pokemon) {
      const speciesDetails = await axios.get(
        this.props.pokemon.speciesDetailsURL
      );
      this.setState({
        speciesDetails: speciesDetails
      });
      console.log(this.state.speciesDetails);
    }
  };

  componentWillMount() {
    this.getPokemonSpeciesDetails();
  }

  render() {
    return (
      <PokemonDetailCard
        pokemon={this.props.pokemon}
        addPokemonToTeam={this.props.addPokemonToTeam}
        speciesDetails={this.state.speciesDetails}
      />
    );
  }
}

export default PokemonDetail;
