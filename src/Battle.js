import React from "react";
import BattlePokemon from "./BattlePokemon";

class Battle extends React.Component {
  state = {
    turn: 0,
    terrain: null,
    weather: null
  };
  render() {
    return (
      <div>
        <h1>Battle</h1>
        <BattlePokemon />
        <BattlePokemon />
      </div>
    );
  }
}

export default Battle;
