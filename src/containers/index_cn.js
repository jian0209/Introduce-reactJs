// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import { useState, useEffect, forwardRef } from "react";
import Colors from "../Assets/Colors";
import Font from "../Assets/Font";
import "./css/index.css";
import "animate.css";
import logo from "../Assets/image/self_icon.png";
import coding from "../Assets/image/coding.png";
import habit from "../Assets/image/habit.png";
import laugh from "../Assets/image/laugh.jpg";
import languageLogo from "../Assets/image/language.png";
import other from "../Assets/image/other.png";
import Header_cn from "../Components/header_cn";
import normal from "../Assets/image/normal.jpg";
import Link from "@mui/material/Link";
import Typist from "react-typist";
import { CommonStore } from "../Store/commonStore";
import PropTypes from "prop-types";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { ReactComponent as LinkedIn } from "../Assets/svg/linkedInBig.svg";
import { ReactComponent as GitHub } from "../Assets/svg/githubBig.svg";

const Home_cn = () => {
  // useState
  const currentNav = CommonStore.useState((s) => s.navCode);

  // useEffect
  useEffect(() => {}, []);

  // function
  // button style
  const ButtonRoot = forwardRef(function ButtonRoot(props, ref) {
    const { children, ...other } = props;

    return (
      <svg width="200" height="50" {...other} ref={ref}>
        <polygon points="0,50 0,0 200,0 200,50" className="bg" />
        <polygon points="0,50 0,0 200,0 200,50" className="borderEffect" />
        <foreignObject x="0" y="0" width="200" height="50">
          <div className="content">{children}</div>
        </foreignObject>
      </svg>
    );
  });

  ButtonRoot.propTypes = {
    children: PropTypes.node,
  };

  const blue = {
    50: "#F0F7FF",
    100: "#C2E0FF",
    200: "#99CCF3",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    800: "#004C99",
    900: "#003A75",
  };

  const CustomButtonRoot = styled(ButtonRoot)(
    ({ theme }) => `
    overflow: visible;
    cursor: pointer;
    --main-color: ${
      theme.palette.mode === "light" ? Colors.secondaryColor : blue[100]
    };
    --hover-color: ${
      theme.palette.mode === "light" ? Colors.lightSecondaryColor : blue[900]
    };
    --active-color: ${
      theme.palette.mode === "light" ? Colors.lightPrimaryColor : blue[800]
    };
  
    & polygon {
      fill: transparent;
      transition: all 800ms ease;
      pointer-events: none;
    }
    
    & .bg {
      stroke: var(--main-color);
      stroke-width: 1;
      filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
      fill: transparent;
    }
  
    & .borderEffect {
      stroke: var(--main-color);
      stroke-width: 2;
      stroke-dasharray: 150 600;
      stroke-dashoffset: 150;
      fill: transparent;
    }
  
    &:hover,
    &.${buttonUnstyledClasses.focusVisible} {
      .borderEffect {
        stroke-dashoffset: -600;
      }
  
      .bg {
        fill: var(--hover-color);
      }
    }
  
    &:focus,
    &.${buttonUnstyledClasses.focusVisible} {
      outline: 2px solid ${
        theme.palette.mode === "dark" ? Colors.lightSecondaryColor : blue[200]
      };
      outline-offset: 2px;
    }
  
    &.${buttonUnstyledClasses.active} { 
      & .bg {
        fill: var(--active-color);
        transition: fill 300ms ease-out;
      }
    }
  
    & foreignObject {
      pointer-events: none;
  
      & .content {
        font-size: 0.875rem;
        font-family: IBM Plex Sans, sans-serif;
        font-weight: 500;
        line-height: 1.5;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--main-color);
        text-transform: uppercase;
      }
  
      & svg {
        margin: 0 5px;
      }
    }`
  );

  const SvgButton = React.forwardRef(function SvgButton(props, ref) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
  });

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
              href="/introduce-portfolio/"
            >
              英文
            </a>
          </Link>
          <Link
            component="button"
            href="/introduce-portfolio/Home_cn/"
            color={Colors.secondaryColor}
            underline="hover"
            onClick={() => {}}
          >
            <a
              style={{ textDecoration: "none", color: Colors.darkGoldColor }}
              href="/introduce-portfolio/Home_cn/"
            >
              中文
            </a>
          </Link>
        </Container>
      </div>

      {/* absolute bottom container */}
      {currentNav === 0 ? (
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
            <span className="animationTyping">我想要学习更多的知识.</span>
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
            我是一名喜欢挑战自我， 热爱学习， 和能量满满的社会小白，
            新鲜出炉的毕业生， 和前端开发者。 我目前正在学习后端开发 - node js。
          </p>
          <Typist
            className="typingName"
            cursor={{
              show: false,
            }}
          >
            <Typist.Backspace count={0} delay={25000} />
            <span className="description">- 郑凯键 -</span>
          </Typist>
        </Container>
      ) : null}

      {currentNav === 1 ? (
        <Container className="absoluteBottom">
          <div className="skillTop">
            <Grid container spacing={5} columns={16}>
              <Grid item xs={8}>
                <Card>
                  <CardActionArea id="coding">
                    <img
                      src={coding}
                      alt="Logo"
                      class="centerImage"
                      height="150"
                    />
                    <CardContent
                      className="cardContent"
                      style={{
                        padding: "2vh",
                      }}
                    >
                      <p style={Font.title_en}>编程</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={8}>
                <Card>
                  <CardActionArea id="skillLanguage">
                    <img
                      src={languageLogo}
                      alt="Logo"
                      class="centerImage"
                      height="150"
                    />
                    <CardContent
                      className="cardContent"
                      style={{
                        padding: "2vh",
                      }}
                    >
                      <p style={Font.title_en}>语言</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={8}>
                <Card>
                  <CardActionArea id="skillHabit">
                    <img
                      src={habit}
                      alt="Logo"
                      class="centerImage"
                      height="150"
                    />
                    <CardContent
                      className="cardContent"
                      style={{
                        padding: "2vh",
                      }}
                    >
                      <p style={Font.title_en}>爱好</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={8}>
                <Card>
                  <CardActionArea id="skillLanguage">
                    <img
                      src={other}
                      alt="Logo"
                      class="centerImage"
                      height="150"
                    />
                    <CardContent
                      className="cardContent"
                      style={{
                        padding: "2vh",
                      }}
                    >
                      <p style={Font.title_en}>其他</p>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Container>
      ) : null}

      {currentNav === 2 ? (
        <Container className="absoluteBottom" id="contactCont">
          <div className="contactImage animate__animated animate__bounceInRight">
            <img src={laugh} alt="Logo" id="contactImage" height="450" />
          </div>
          <div className="whoAmI animate__animated animate__bounceInLeft">
            <div id="footerContactDetail">
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://github.com/jian0209"
              >
                <GitHub />
              </a>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://apu-joblink-csm.symplicity.com/profiles/tp054604"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
        </Container>
      ) : null}

      {currentNav === 3 ? (
        <Container className="absoluteBottom" id="contactCont">
          <div className="whoAmI animate__animated animate__bounceInLeft">
            <p id="" style={Font.title_en}>我是谁?</p>
            <p
            id="contactDes" 
              className="animate__animated animate__fadeInLeft"
              style={Font.normalizeFont_en}
            >
              郑凯键是一名软体开发者，小领队，
              和社会新鲜人。他拥有当面试者，带领团队和管理小团队的经验。他还拥有了7年的工作历史。郑凯键在一开始的公司担任了管理员和设计师。他在一开始的公司学习了如何管理和autocad的使用方式。在实习的公司，
              他学习了团队作业，使用react开发网页，
              ios和Android的应用程序。他在大学也学习了java， python， visual
              basic， html， css， sql， cisco packet tracer。
            </p>
          </div>
          <div className="contactImage animate__animated animate__bounceInRight">
            <img src={normal} alt="Logo" id="contactImage" height="450" />
          </div>
          <div id="contactButtonCont">
            <a className="buttonStyle" href="/introduce-portfolio/Contact_cn/">
              <SvgButton id="contactButton">了解更多</SvgButton>
            </a>
          </div>
        </Container>
      ) : null}
    </div>
  );
};

export default Home_cn;
