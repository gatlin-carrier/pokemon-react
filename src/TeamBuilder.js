import React from "react";
import Search from "./Search";

class TeamBuilder extends React.Component {
  state = {
    team: []
  };

  render() {
    return (
      <div>
        <h1>Your Team</h1>
        <Search onFormSubmit={this.props.onFormSubmit} />
      </div>
    );
  }
}

export default TeamBuilder;
