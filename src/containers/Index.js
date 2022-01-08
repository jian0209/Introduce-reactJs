import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import Colors from "../Assets/Colors";
import Font from "../Assets/Font";


const Index = () => {
  return (
    <Container>
      <h1 style={Font.subtitle_en}>Index</h1>
      <Link to="/" style={Font.normalizeFont_en}>
        {" "}
        Home{" "}
      </Link>
      <Link to="/Home_en" style={Font.title_en}>
        EN
      </Link>
      <p
        style={{
          fontFamily: "NunitoSans-Regular",
        }}
      >
        Something1
      </p>
    </Container>
  );
};

export default Index;
