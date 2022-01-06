import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";

// homepage

const Index = () => {
  return (
    <Container>
      <h1>Index</h1>
      <Link to="/"> Home </Link>
      <Link to="/Home_en">EN</Link>
    </Container>
  );
};

export default Index;
