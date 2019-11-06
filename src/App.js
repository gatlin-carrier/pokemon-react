import React from "react";
import Home from "./Home";
import Battle from "./Battle";
import Pokedex from "./Pokedex";
import axios from "axios";
import Pokemon from "./Pokemon";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = {
    pokemonList: [],
    currentResponse: null,
    selectedPokemon: null
  };

  getPokemon = async () => {
    const pokemonArray = [];

    const pokemonEndpoint = "https://pokeapi.co/api/v2/pokemon/";
    const response = await axios.get(pokemonEndpoint);

    const pokemonData = response.data.results;
    pokemonData.forEach(details => {
      axios.get(details.url).then(response => {
        const pokemonDetails = response.data;
        console.log(pokemonDetails);
        let pokemonDescription;
        axios
          .get(pokemonDetails.species.url)
          .then(responseB => (pokemonDescription = responseB));
        console.log(pokemonDescription);
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
          // pokemonDescription.data.genera[2]
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
    console.log(pokemon);
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/battle">Battle</Link>
              </li>
              <li>
                <Link to="/pokedex">Pokedex</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/battle" component={Battle}></Route>
            <Route
              path="/pokedex"
              component={() => (
                <Pokedex
                  pokemonList={this.state.pokemonList}
                  getPokemon={this.getPokemon}
                  getNextPokemonList={this.getNextPokemonList}
                  getPreviousPokemonList={this.getPreviousPokemonList}
                  selectedPokemon={this.state.selectedPokemon}
                  onPokemonSelect={this.onPokemonSelect}
                />
              )}
            ></Route>
          </Switch>
        </Router>

        {/* <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Router>
              <Typography variant="h6">
                <Link to="/">Home</Link>
              </Typography>
              <Typography variant="h6">
                <Link to="/battle">Battle</Link>
              </Typography>
              <Typography variant="h6">
                <Link to="/pokedex">Pokedex</Link>
              </Typography>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/battle" component={Battle}></Route>
                <Route
                  path="/pokedex"
                  component={() => (
                    <Pokedex
                      pokemonList={this.state.pokemonList}
                      getPokemon={this.getPokemon}
                      getNextPokemonList={this.getNextPokemonList}
                      getPreviousPokemonList={this.getPreviousPokemonList}
                      selectedPokemon={this.state.selectedPokemon}
                      onPokemonSelect={this.onPokemonSelect}
                    />
                  )}
                ></Route>
              </Switch>
            </Router>
          </Toolbar>
        </AppBar> */}
        {/* <NavBar
          pokemonList={this.state.pokemonList}
          getPokemon={this.getPokemon}
          getNextPokemonList={this.getNextPokemonList}
          getPreviousPokemonList={this.getPreviousPokemonList}
          selectedPokemon={this.state.selectedPokemon}
          onPokemonSelect={this.onPokemonSelect}
        /> */}
      </div>
    );
  }
}

export default App;

// state = {
//   allPokemon: []
// };

// getPokemon = async () => {
//   let counter = 1;
//   let pokemonArray = [];

//   while (counter < 805) {
//     const pokemonEndpoint = "https://pokeapi.co/api/v2/pokemon/";
//     const response = await axios.get(pokemonEndpoint + counter);
//     const pokemonData = response.data;

//     const pokemon = {
//       name: pokemonData.species.name,
//       id: pokemonData.id,
//       image: pokemonData.sprites.front_default
//     };
//     //   const pokemon = new Pokemon(
//     //     pokemonData.species.name,
//     //     pokemonData.moves,
//     //     pokemonData.abilities,
//     //     null,
//     //     null,
//     //     pokemonData.types,
//     //     pokemonData.sprites,
//     //     pokemonData.stats,
//     //     pokemonData.weight,
//     //     pokemonData.forms
//     //   );
//     pokemonArray.push(pokemon);
//     counter++;
//   }

//   this.setState({
//     allPokemon: pokemonArray
//   });
// };
