// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import Colors from "../Assets/Colors";
import Font from "../Assets/Font";
import "./css/index.css";
import logo from "../Assets/image/self_icon.png";
import Header_cn from "../Components/header_cn";
import Link from "@mui/material/Link";
import Typist from "react-typist";
import { CommonStore } from "../Store/commonStore";

const Home_cn = () => {
  // useState

  // useEffect
  useEffect(() => {}, []);

  // function

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
          <Header_cn />
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
              href="/"
            >
              英文
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
              中文
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
          <span className="animationTyping">我是一名网页设计师.</span>
          <Typist.Backspace count={10} delay={1000} />
          <span className="animationTyping">我是一名前端开发者.</span>
          <Typist.Backspace count={10} delay={1000} />
          <span className="animationTyping">我是一名应用开发者.</span>
          <Typist.Backspace count={10} delay={1000} />
          <span className="animationTyping">
            我想要学习更多的知识.
          </span>
          <Typist.Backspace count={11} delay={1000} />
          <div className="animationTyping">已学习</div>
          <Typist.Backspace count={0} delay={600} />
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
          我是一名喜欢挑战自我， 热爱学习， 和能量满满的社会小白， 新鲜出炉的毕业生， 和前端开发者。 我目前正在学习后端开发 - node js。
        </p>
        <Typist className="typingName" cursor={{
            show: false,
          }}>
        <Typist.Backspace count={0} delay={25000} />
        <span className="description">
          - 郑凯键 -
        </span>
        </Typist>
      </Container>
    </div>
  );
};

export default Home_cn;
