import Alert from "@mui/material/Alert";
import * as React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from "./containers/Index";
import Home_cn from "./containers/index_cn";
import Contact from "./containers/English/Contact";
import Contact_cn from "./containers/Mandarin/Contact_cn";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/Home_cn" component={Home_cn} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Contact_cn" component={Contact_cn} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
