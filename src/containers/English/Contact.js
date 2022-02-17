// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import Colors from "../../Assets/Colors";
import Font from "../../Assets/Font";
import "../css/contact.css";
import logo from "../../Assets/image/self_icon.png";
import Header from "../../Components/header";
import Link from "@mui/material/Link";


const Contact = () => {
  // useState

  // useEffect

  // function

  return (
    <div className="contactCont">
      {/* absolute top container */}
      <div
        className="contactAbsoluteTop"
        style={{
          backgroundColor: Colors.lightPrimaryColor,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // paddingHorizontal: '5vw',
        }}
      >
        <Container id="topNav">
          <Header />
        </Container>
        <Container id="language">
          <Link
            component="button"
            href=""
            color={Colors.secondaryColor}
            underline="hover"
            style={{ marginRight: 15 }}
            onClick={() => {}}
          >
            <a
              style={{ textDecoration: "none", color: Colors.darkGoldColor }}
              href=""
            >
              English
            </a>
          </Link>
          <Link
            component="button"
            href="/Contact_cn"
            color={Colors.secondaryColor}
            underline="hover"
            onClick={() => {}}
          >
            <a
              style={{ textDecoration: "none", color: Colors.darkGoldColor }}
              href="Contact_cn"
            >
              Mandarin
            </a>
          </Link>
        </Container>
      </div>
      {/* absolute bottom container */}
      <Container className="contactAbsoluteBottom">
        <div className="mainCont">

        </div>
      </Container>
    </div>
  );
};

export default Contact;
