import React from "react";
import Search from "./Search";
import PokemonDetail from "./PokemonCard";
import TeamBuilderItem from "./TeamBuilderItem";

class TeamBuilder extends React.Component {
  state = {
    team: this.props.team
  };

  renderedList = this.state.team.map((teamMember, index) => {
    return (
      <TeamBuilderItem
        onPokemonDelete={this.props.onPokemonDelete}
        key={index}
        pokemon={teamMember}
      />
    );
  });
  render() {
    return (
      <div>
        <h1>Your Team</h1>
        {/* <Search onFormSubmit={this.props.onFormSubmit} /> */}
        {this.state.team ? this.renderedList : null}
      </div>
    );
  }
}

export default TeamBuilder;
