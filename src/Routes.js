import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageA from "./Pages/A/PageA"
import PageB from "./Pages/B/PageB"
import PageC from "./Pages/C/PageC"

function Routes() {
  return (
    <Switch>
      <Route path="/a" component={PageA} />
      <Route path="/b" component={PageB} />
      <Route path="/c" component={PageC} />
      <Redirect to="/a" />
    </Switch>
  )
}

export default Routes;
