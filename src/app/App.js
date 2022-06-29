import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navigation/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import MenuOrNo from "./layouts/menuOrNo";
import NotFount from "./components/navigation/notFount";
import Home from "./layouts/home";

function App() {
  return (
    <div>
      <NavBar />

      <Switch>
        <Route path="/home" render={() => <Home />} />
        <Route path="/menu" component={MenuOrNo} />
        <Route path="/404" component={NotFount} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
