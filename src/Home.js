import React from "react";
import axios from "axios";

class Home extends React.Component {
  getPokemon = async () => {
    let randomNumber = Math.floor(Math.random() * 808);
    const pokemonEndpoint = "https://pokeapi.co/api/v2/pokemon/";
    const response = await axios.get(pokemonEndpoint + randomNumber);
    console.log(response.data);
  };
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>Pokemon</h2>
        <button onClick={event => this.getPokemon(event)}>Get API</button>
      </div>
    );
  }
}

export default Home;
