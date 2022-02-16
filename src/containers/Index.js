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
import axios from 'axios';
import {LOCAL_API_DATA} from '../global/api';

const Index = () => {
  // useState
  // const [language, setLanguage] = useState([]);
  const jsonString = [
    { name: "eric", id: "1" },
    { name: "andrew", id: "2" },
    { name: "john", id: "3" },
    { name: "Flintoff", id: "4" },
    { name: "Greg", id: "5" },
    { name: "Francis", id: "6" },
  ];

  // useEffect
  useEffect(() => {
    // console.log(JSON.stringify(jsonString, null, 4));
    fetchData();
    fetchSetData(jsonString);
  }, []);

  // function
  const fetchData = async () => {
    await axios
    .get(LOCAL_API_DATA)
    .then((res) => {console.log(res.data)})
    .catch((err) => {console.log(err)})
  }

  const fetchSetData = async (data) => {
    await axios
    .put(LOCAL_API_DATA, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    })
  }

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
