import Alert from "@mui/material/Alert";
import * as React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from "./containers/Index";
import Home_en from "./containers/Home-en";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/Home_en" component={Home_en} exact />
      </Switch>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">
          This is a warning alert — check it out!
        </Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
