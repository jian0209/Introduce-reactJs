import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";

const Home_en = () => {
  return (
    <Container>
      <h1>Home_en</h1>
      <Link to="/"> Home </Link>
      <Link to="/Home_en"> About </Link>
    </Container>
  );
};

export default Home_en;
