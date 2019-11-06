import React from "react";
import Home from "./Home";
// import Battle from "./Battle";
import Pokedex from "./Pokedex";
import TeamBuilder from "./TeamBuilder";
import axios from "axios";
import Pokemon from "./Pokemon";
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
          pokemonDetails.id
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

  onTermSubmit = async term => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${term}`
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
      pokemonData.id
    );

    pokemonArray.push(pokemon);

    this.setState({
      pokemonList: pokemonArray
    });
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
                <Link to="/team-builder">Team Builder</Link>
              </li>
              {/* <li>
                <Link to="/battle">Battle</Link>
              </li> */}
              <li>
                <Link to="/pokedex">Pokedex</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              path="/team-builder"
              component={() => <TeamBuilder onFormSubmit={this.onTermSubmit} />}
            ></Route>
            {/* <Route path="/battle" component={Battle}></Route> */}
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
                  onFormSubmit={this.onTermSubmit}
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
