import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navigation/navBar";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFount from "./components/navigation/notFount";
import Home from "./layouts/homePage";
import { Footer } from "./components/main-page";
import AboutPage from "./layouts/aboutPage";
import DeliveryPage from "./layouts/deliveryPage";
import MenuPage from "./layouts/menuPage";

function App() {
  return (
    <div className="wrapper">
      <NavBar />

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/menu" render={() => <MenuPage />} />
        <Route exact path="/delivery" render={() => <DeliveryPage />} />
        <Route exact path="/about" render={() => <AboutPage />} />
        <Route path="/404" component={NotFount} />
        <Redirect to="/404" />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
