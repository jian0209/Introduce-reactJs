import Alert from "@mui/material/Alert";
import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./containers/Index";
import Home_cn from "./containers/index_cn";
import Contact from "./containers/English/Contact";
import Contact_cn from "./containers/Mandarin/Contact_cn";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/introduce-portfolio/" component={Index} exact />
            <Route path="/introduce-portfolio/Home_cn/" component={Home_cn} exact />
            <Route path="/introduce-portfolio/Contact/" component={Contact} exact />
            <Route
              path="/introduce-portfolio/Contact_cn/"
              component={Contact_cn}
              exact
            />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
