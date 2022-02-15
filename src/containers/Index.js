// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import Colors from "../Assets/Colors";
import Font from "../Assets/Font";
import "./css/index.css";
import logo from "../Assets/image/self_icon.png";
import Header from "../Components/header";
import Link from "@mui/material/Link";
import db from '../global/db.json';


const Index = () => {
  // useState
  // const [language, setLanguage] = useState([]);

  // useEffect
  useEffect(() => {
    console.log(db);
  }, []);

  // function

  return (
    <div className="cont1">
      {/* absolute top container */}
      <div
        className="absoluteTop"
        style={{
          backgroundColor: Colors.darkGoldColor,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // paddingHorizontal: '5vw',
        }}
      >
        <Container>
          {/* <ul>
            {language.map((user, index) => (
              <li key={index}>
                #{user.name}: {user.age} {user.sex}
              </li>
            ))}
          </ul> */}
          <img src={logo} alt="Logo" width="50" height="35" />
        </Container>
        <Container id="topNav">
          <Header />
        </Container>
        <Container id="language">
          <Link
            component="button"
            href="Home_en"
            color={Colors.goldColor}
            underline="hover"
            style={{ marginRight: 15 }}
            onClick={() => {}}
          >
            English
          </Link>
          <Link
            component="button"
            href="Home_en"
            color={Colors.goldColor}
            underline="hover"
            onClick={() => {}}
          >
            Mandarin
          </Link>
        </Container>
      </div>
      {/* absolute bottom container */}
      <div
        className="absoluteBottom"
        style={{ backgroundColor: Colors.primaryColor }}
      />
    </div>
  );
};

export default Index;
