import Alert from "@mui/material/Alert";
import * as React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from "./containers/Index";
import Home_cn from "./containers/index_cn";
import Contact from "./containers/English/Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/Home_cn" component={Home_cn} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
