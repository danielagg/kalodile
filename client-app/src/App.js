import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import PrivateRoute from "./components/auth/PrivateRoute";
import HomePage from "./components/landing/HomePage";
import LoginPage from "./components/auth/LoginPage";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
