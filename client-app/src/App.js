import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import PrivateRoute from "./components/auth/PrivateRoute";
import HomePageContainer from "./components/landing/HomePageContainer";
import LoginPage from "./components/auth/LoginPage";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <PrivateRoute exact path="/" component={HomePageContainer} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
