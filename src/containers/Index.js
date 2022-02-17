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
import axios from "axios";
import {
  API_GET_LAN_DATA,
  API_GET_ALL_DATA,
  API_GET_TEST_DATA,
} from "../global/api";
import Typist from "react-typist";
import Contact from "./English/Contact";
import { CommonStore } from "../Store/commonStore";

const Index = () => {
  // useState
  const [language, setLanguage] = useState([]);

  const currentNav = CommonStore.useState((s) => s.navCode);

  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(currentNav);
  }, [currentNav]);

  // function
  const fetchData = async () => {
    await axios
      .get(API_GET_LAN_DATA)
      .then((res) => {
        console.log(res.data);
        setLanguage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const createData = async (data123) => {
  //   const data1 = {
  //     "id": 4,
  //     "name": "eric",
  //     "surname": "sharasd",
  //   }
  //   axios.post(API_GET_LOCAL_DATA, data1)
  //     // .then((res) => {res.json()})
  //     .then((data) => console.log(data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // const article = { title: 'React Put Request Exampl' };
  //   // const response = await axios.put(API_GET_TEST_DATA, article);
  //   // console.log(response.data);

  // };

  return (
    <div className="cont1">
      {/* absolute top container */}
      <div
        className="absoluteTop"
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
            href="/Home_cn"
            color={Colors.secondaryColor}
            underline="hover"
            onClick={() => {}}
          >
            <a
              style={{ textDecoration: "none", color: Colors.darkGoldColor }}
              href="Home_cn"
            >
              Mandarin
            </a>
          </Link>
        </Container>
      </div>
      {/* absolute bottom container */}
      <Container className="absoluteBottom">
        <Typist
          className="animationTypingMain"
          cursor={{
            show: false,
          }}
        >
          <span className="animationTyping">I'm a Web Developer.</span>
          <Typist.Backspace count={21} delay={1000} />
          <span className="animationTyping">I'm a Frontend Developer.</span>
          <Typist.Backspace count={25} delay={1000} />
          <span className="animationTyping">I'm a Application Developer.</span>
          <Typist.Backspace count={28} delay={1000} />
          <span className="animationTyping">
            I can learn everything with my best.
          </span>
          <Typist.Backspace count={36} delay={1000} />
          <div className="animationTyping">LEARNED</div>
          <Typist.Backspace count={0} delay={500} />
          <span className="animationTyping">JAVA</span>
          <Typist.Backspace count={4} delay={1000} />
          <span className="animationTyping">JavaScript</span>
          <Typist.Backspace count={10} delay={1000} />
          <span className="animationTyping">Visual Basic</span>
          <Typist.Backspace count={12} delay={1000} />
          <span className="animationTyping">HTML | CSS</span>
          <Typist.Backspace count={10} delay={1000} />
          <span className="animationTyping">PHP</span>
          <Typist.Backspace count={3} delay={1000} />
          <span className="animationTyping">PYTHON</span>
          <Typist.Backspace count={6} delay={1000} />
          <span className="animationTyping">CISCO PACKET TRACER</span>
          <Typist.Backspace count={19} delay={1000} />
          <span className="animationTyping">SQL</span>
          <Typist.Backspace count={3} delay={1000} />
          <span className="animationTyping">REACT NATIVE | REACT JS</span>
        </Typist>

        <p className="description">
          I'm a startup software developer, Fresh Graduate Student, and Frontend
          Designer who loves ambitious challenges, study, and energetic. Currently, I learning node js as the backend of my project.
        </p>
        <Typist className="typingName" cursor={{
            show: false,
          }}>
        <Typist.Backspace count={0} delay={30000} />
        <span className="description">
          - Nicholas Tey Kai Jian -
        </span>
        </Typist>
      </Container>
    </div>
  );
};

export default Index;
