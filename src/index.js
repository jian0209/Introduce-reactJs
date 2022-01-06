import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Index from "./containers/Index";
import Home_en from "./containers/Home-en";


// const App = () => {
//   <BrowserRouter>
//     <Routes>
//       {/* doing routing here */}
//       <Route path="/" element={<Index />} />
//       <Route path="/Home_en" element={<Home_en />} />
//     </Routes>
//   </BrowserRouter>;
// };

// const rootElement = document.getElementById("root");

// ReactDOM.render(<App />, rootElement);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
