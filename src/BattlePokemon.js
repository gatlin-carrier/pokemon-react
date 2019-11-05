import React from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

class BattlePokemon extends React.Component {
  // class Pokemon {
  //   constructor(
  //     name,
  //     moves,
  //     ability,
  //     status,
  //     heldItem,
  //     types,
  //     sprites,
  //     stats,
  //     weight,
  //     forms
  //   ) {
  //     this.name = name;
  //     this.moves = moves;
  //     this.ability = ability;
  //     this.status = status;
  //     this.heldItem = heldItem;
  //     this.types = types;
  //     this.sprites = sprites;
  //     this.stats = stats;
  //     this.weight = weight;
  //     this.forms = forms;
  //   }
  // }

  state = {
    pokemon: []
  };

  getPokemon = async () => {
    let randomNumberOne = Math.floor(Math.random() * 805);
    let randomNumberTwo = Math.floor(Math.random() * 805);

    if (randomNumberOne !== randomNumberTwo) {
      const pokemonEndpoint = "https://pokeapi.co/api/v2/pokemon/";
      const responseOne = await axios.get(pokemonEndpoint + randomNumberOne);
      const responseTwo = await axios.get(pokemonEndpoint + randomNumberTwo);

      const pokemonOneData = responseOne.data;
      const pokemonTwoData = responseTwo.data;

      const pokemonOne = new Pokemon(
        pokemonOneData.species.name,
        pokemonOneData.moves,
        pokemonOneData.abilities,
        null,
        null,
        pokemonOneData.types,
        pokemonOneData.sprites,
        pokemonOneData.stats,
        pokemonOneData.weight,
        pokemonOneData.forms
      );

      const pokemonTwo = new Pokemon(
        pokemonTwoData.species.name,
        pokemonTwoData.moves,
        pokemonTwoData.abilities,
        null,
        null,
        pokemonTwoData.types,
        pokemonTwoData.sprites,
        pokemonTwoData.stats,
        pokemonTwoData.weight,
        pokemonTwoData.forms
      );

      if (pokemonOne.name && pokemonTwo.name) {
        this.setState({
          pokemon: [pokemonOne, pokemonTwo]
        });
      }

      console.log(this.state.pokemon[0]);
      console.log(this.state.pokemon[1]);
      console.log(this.state);
    }
  };

  componentDidMount() {
    this.getPokemon();
  }

  render() {
    return (
      <div>
        {this.state.pokemon[0] ? (
          <img src={this.state.pokemon[0].sprites.front_default} alt="" />
        ) : (
          false
        )}

        {this.state.pokemon[1] ? (
          <img src={this.state.pokemon[1].sprites.front_default} alt="" />
        ) : (
          false
        )}
      </div>
    );
  }
}

export default BattlePokemon;
