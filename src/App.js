import Alert from "@mui/material/Alert";
import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./containers/Index";
import Home_cn from "./containers/index_cn";
import Contact from "./containers/English/Contact";
import Contact_cn from "./containers/Mandarin/Contact_cn";

function App() {
  const [isDev, setIsDev] = useState(true);
  return (
    <BrowserRouter>
      {isDev ? (
        <div className="App">
          <Switch>
            <Route path="/introduce-portfolio/" component={Index} exact />
            <Route path="/introduce-portfolio/Home_cn" component={Home_cn} />
            <Route path="/introduce-portfolio/Contact" component={Contact} />
            <Route
              path="/introduce-portfolio/Contact_cn"
              component={Contact_cn}
            />
          </Switch>
        </div>
      ) : (
        <div className="App">
          <Switch>
            <Route path="jian0209.github.io/introduce-portfolio/" component={Index} exact />
            <Route path="jian0209.github.io/introduce-portfolio/Home_cn" component={Home_cn} />
            <Route path="jian0209.github.io/introduce-portfolio/Contact" component={Contact} />
            <Route
              path="jian0209.github.io/introduce-portfolio/Contact_cn"
              component={Contact_cn}
            />
          </Switch>
        </div>
      )}
      {/* <div className="App">
      <Switch>
        <Route path="/introduce-portfolio/" component={Index} exact />
        <Route path="/introduce-portfolio/Home_cn" component={Home_cn} />
        <Route path="/introduce-portfolio/Contact" component={Contact} />
        <Route path="/introduce-portfolio/Contact_cn" component={Contact_cn} />
      </Switch>
    </div> */}
    </BrowserRouter>
  );
}

export default App;
