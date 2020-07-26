import React from "react";
// import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";

// import "assets/scss/material-kit-react.scss?v=1.9.0";

import LandingPage from "./pages/LandingPage"
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

// var hist = createBrowserHistory();

const App = ()=>{
  return  <Router >
    <Switch>
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={LandingPage} exact/>
  
    </Switch>
  </Router>


}

export default App
