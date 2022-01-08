import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import Colors from "../Assets/Colors";
import Font from "../Assets/Font";
import "./css/index.css";

const Index = () => {
  return (
    <div className="cont1">
      {/* absolute top container */}
      <div
        className
        className="absoluteTop"
        style={{ backgroundColor: Colors.lightPrimaryColor }}
      />
      {/* absolute bottom container */}
      <div
        className="absoluteBottom"
        style={{ backgroundColor: Colors.primaryColor }}
      />
      <Container className="aboutMe">
        <div className="contAbout">
          <p className="about" style={Font.mainTitle}>
            About Me
          </p>
        </div>
        <div className="chosen">
          <p style={Font.subMainTitle}>
            <a href="/Home_en" style={Font.subMainTitle}>
              English
            </a>{" "}
            |{" "}
            <a href="/" style={Font.subMainTitle}>
              Mandarin
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Index;
