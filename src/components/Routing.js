import React from "react";
import { Switch, Route } from "react-router-dom";
import ProductsList from "./Products/ProductsList";
import Details from "./Details/Details";
import Index from "./Index/Index";

function Routing() {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/products" exact component={ProductsList} />
        <Route path="/details" exact component={Details} />
      </Switch>
    </section>
  );
}

export default Routing;
