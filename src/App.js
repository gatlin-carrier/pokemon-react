import React from "react";
import Home from "./Home";
import Battle from "./Battle";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
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
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/battle" component={Battle}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
