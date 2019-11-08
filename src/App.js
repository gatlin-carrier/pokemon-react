import React from "react";
import Pokedex from "./Pokedex";
import TeamBuilder from "./TeamBuilder";
import axios from "axios";
import Pokemon from "./Pokemon";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";

class App extends React.Component {
  state = {
    pokemonList: [],
    currentResponse: null,
    selectedPokemon: null,
    team: []
  };

  getPokemon = async () => {
    const pokemonArray = [];
    const pokemonEndpoint = "https://pokeapi.co/api/v2/pokemon/";
    const response = await axios.get(pokemonEndpoint);
    const pokemonData = response.data.results;

    pokemonData.forEach(details => {
      let pokemonDetails;
      axios.get(details.url).then(response => {
        pokemonDetails = response.data;
        // console.log(pokemonDetails);

        const pokemon = new Pokemon(
          pokemonDetails.species.name,
          pokemonDetails.moves,
          pokemonDetails.abilities,
          null,
          null,
          pokemonDetails.types,
          pokemonDetails.sprites,
          pokemonDetails.stats,
          pokemonDetails.weight,
          pokemonDetails.forms,
          pokemonDetails.id,
          pokemonDetails.species.url
        );

        pokemonArray.push(pokemon);
        pokemonArray.sort(
          (pokemonOne, pokemonTwo) => pokemonOne.id - pokemonTwo.id
        );
      });

      this.setState({
        pokemonList: pokemonArray,
        currentResponse: response
      });
    });
  };

  getNextPokemonList = async () => {
    const pokemonArray = [];
    if (this.state.currentResponse) {
      const response = await axios.get(this.state.currentResponse.data.next);
      const pokemonData = response.data.results;
      pokemonData.forEach(details => {
        axios.get(details.url).then(response => {
          const pokemonDetails = response.data;

          const pokemon = new Pokemon(
            pokemonDetails.species.name,
            pokemonDetails.moves,
            pokemonDetails.abilities,
            null,
            null,
            pokemonDetails.types,
            pokemonDetails.sprites,
            pokemonDetails.stats,
            pokemonDetails.weight,
            pokemonDetails.forms,
            pokemonDetails.id
          );

          pokemonArray.push(pokemon);

          pokemonArray.sort(
            (pokemonOne, pokemonTwo) => pokemonOne.id - pokemonTwo.id
          );
        });
      });

      this.setState({
        pokemonList: pokemonArray,
        currentResponse: response
      });
    }
  };

  getPreviousPokemonList = async () => {
    const pokemonArray = [];
    if (this.state.currentResponse) {
      const response = await axios.get(
        this.state.currentResponse.data.previous
      );
      const pokemonData = response.data.results;
      pokemonData.forEach(details => {
        axios.get(details.url).then(response => {
          const pokemonDetails = response.data;

          const pokemon = new Pokemon(
            pokemonDetails.species.name,
            pokemonDetails.moves,
            pokemonDetails.abilities,
            null,
            null,
            pokemonDetails.types,
            pokemonDetails.sprites,
            pokemonDetails.stats,
            pokemonDetails.weight,
            pokemonDetails.forms,
            pokemonDetails.id
          );

          pokemonArray.push(pokemon);

          pokemonArray.sort(
            (pokemonOne, pokemonTwo) => pokemonOne.id - pokemonTwo.id
          );
        });
      });

      this.setState({
        pokemonList: pokemonArray,
        currentResponse: response
      });
    }
  };

  onPokemonSelect = pokemon => {
    this.setState({
      selectedPokemon: pokemon
    });
  };

  onPokemonDelete = pokemon => {
    let currentTeamArray = this.state.team;
    let teamMemberIndex = currentTeamArray.indexOf(pokemon);

    this.setState({
      team: currentTeamArray.splice(teamMemberIndex + 1, 1)
    });
  };

  onTermSubmit = async term => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`
    );

    const pokemonData = response.data;
    console.log(pokemonData);
    const pokemonArray = [];

    const pokemon = new Pokemon(
      pokemonData.species.name,
      pokemonData.moves,
      pokemonData.abilities,
      null,
      null,
      pokemonData.types,
      pokemonData.sprites,
      pokemonData.stats,
      pokemonData.weight,
      pokemonData.forms,
      pokemonData.id,
      pokemonData.species.url
    );

    pokemonArray.push(pokemon);

    this.setState({
      pokemonList: pokemonArray,
      selectedPokemon: pokemonArray[0]
    });
  };

  addPokemonToTeam = pokemon => {
    this.setState({
      team: [...this.state.team, pokemon]
    });
    console.log(this.state.team);
  };

  componentDidMount() {
    this.getPokemon();
  }

  render() {
    return (
      <div>
        <Router>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/team-builder">
                  Team Builder
                </Link>
              </li>
              <li>
                <Link className="link" to="/pokedex">
                  Search
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route
              path="/team-builder"
              component={() => (
                <TeamBuilder
                  onFormSubmit={this.onTermSubmit}
                  addPokemonToTeam={this.addPokemonToTeam}
                  pokemonList={this.state.pokemonList}
                  team={this.state.team}
                  onPokemonDelete={this.onPokemonDelete}
                />
              )}
            ></Route>
            {/* <Route path="/battle" component={Battle}></Route> */}
            <Route
              path="/pokedex"
              component={() => (
                <Pokedex
                  addPokemonToTeam={this.addPokemonToTeam}
                  pokemonList={this.state.pokemonList}
                  getPokemon={this.getPokemon}
                  getNextPokemonList={this.getNextPokemonList}
                  getPreviousPokemonList={this.getPreviousPokemonList}
                  selectedPokemon={this.state.selectedPokemon}
                  onPokemonSelect={this.onPokemonSelect}
                  onFormSubmit={this.onTermSubmit}
                />
              )}
            ></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
