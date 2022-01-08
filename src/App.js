import Alert from "@mui/material/Alert";
import * as React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from "./containers/Index";
import Home_en from "./containers/Home_en";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/Home_en" component={Home_en} exact />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
