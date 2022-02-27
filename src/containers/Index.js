// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import { useState, useEffect, forwardRef } from "react";
import Colors from "../Assets/Colors";
import Font from "../Assets/Font";
import "./css/index.css";
import "animate.css";
import logo from "../Assets/image/self_icon.png";
import normal from "../Assets/image/normal.jpg";
import java_assignment from "../Assets/image/java_project_image.png";
import class_assignment from "../Assets/image/class_asign_image.png";
import fyp_assignment from "../Assets/image/fyp_assignment.png";
import visualbasic_assignment from "../Assets/image/visualbasic_assignment.png";
import self_project from "../Assets/image/self_project.png";
import coding from "../Assets/image/coding.png";
import habit from "../Assets/image/habit.png";
import languageLogo from "../Assets/image/language.png";
import other from "../Assets/image/other.png";
import Header from "../Components/header";
import Link from "@mui/material/Link";
import axios from "axios";
import {
  API_GET_LAN_DATA,
  API_GET_ALL_DATA,
  API_GET_TEST_DATA,
} from "../global/api";
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
import { CardActionArea } from "@mui/material";
import { ReactComponent as LinkedIn } from "../Assets/svg/linkedInBig.svg";
import { ReactComponent as GitHub } from "../Assets/svg/githubBig.svg";
import Contact from "./English/Contact";
import Contact_cn from "./Mandarin/Contact_cn";
import Index_cn from "./index_cn";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Footer from "../Components/Footer";
import SkillBar from "react-skillbars";

const Index = () => {
  // var
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  // useState
  const [language, setLanguage] = useState([]);

  const [showHardSkills, setShowHardSkills] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showSoftSkills, setShowSoftSkills] = useState(false);
  const [showOthers, setShowOthers] = useState(false);

  const currentNav = CommonStore.useState((s) => s.navCode);
  const isEnglishContact = CommonStore.useState((s) => s.isEnglishContact);
  const isEnglish = CommonStore.useState((s) => s.isEnglish);
  const isMandarinContact = CommonStore.useState((s) => s.isMandarinContact);
  const isMandarin = CommonStore.useState((s) => s.isMandarin);

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

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: windowWidth * 0.6,
    maxHeight: windowHeight * 0.8,
    overflow: "auto",
    border: "1px solid",
    borderColor: Colors.lightSecondaryColor,
    backgroundColor: Colors.lightPrimaryColor,
    boxShadow: 24,
    p: 4,
    borderRadius: 10,
  };

  const hardSkills = [
    { type: "React Native", level: 85 },
    { type: "React JS", level: 80 },
    { type: "Java", level: 73 },
    { type: "HTML CSS", level: 71 },
    { type: "Visual Basic", level: 70 },
    { type: "SQL", level: 65 },
    { type: "PHP", level: 60 },
    { type: "TypeScript", level: 58 },
    { type: "Python", level: 57 },
  ];

  const languageSkills = [
    { type: "Mandarin", level: 90 },
    { type: "English", level: 70 },
    { type: "Malay", level: 30 },
  ];

  const softSkills = [
    { type: "Responsibility", level: 96 },
    { type: "Cooperation", level: 95 },
    { type: "Learning", level: 90 },
    { type: "Problem Solving", level: 85 },
    { type: "Adaptability", level: 80 },
    { type: "Organization", level: 75 },
    { type: "Communication", level: 68 },
  ];

  const otherSkills = [
    { type: "AutoCad LT", level: 90 },
    { type: "PowerPoint", level: 90 },
    { type: "Visio", level: 87 },
    { type: "Git", level: 80 },
    { type: "Word", level: 75 },
    { type: "Access", level: 73 },
    { type: "Excel", level: 55 },
  ];

  const skillsColors = {
    bar: {
      hue: 200,
      saturation: 34,
      level: {
        minimum: 30,
        maximum: 65,
      },
    },
    title: {
      text: {
        hue: 14,
        saturation: {
          minimum: 23,
          maximum: 2,
        },
        level: 48,
      },
      background: {
        hue: 32,
        saturation: {
          minimum: 38,
          maximum: 78,
        },
        level: {
          minimum: 95,
          maximum: 100,
        },
      },
    },
  };

  return (
    <div>
      {/* modal start */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showHardSkills}
        onClose={() => {
          setShowHardSkills(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showHardSkills}>
          <Box sx={modalStyle}>
            <p
              style={Font.title_en}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Hard Skills Set
            </p>
            <SkillBar colors={skillsColors} skills={hardSkills} />
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showLanguage}
        onClose={() => {
          setShowLanguage(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showLanguage}>
          <Box sx={modalStyle}>
            <p
              style={Font.title_en}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Language Skills Set
            </p>
            <SkillBar colors={skillsColors} skills={languageSkills} />
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showSoftSkills}
        onClose={() => {
          setShowSoftSkills(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showSoftSkills}>
          <Box sx={modalStyle}>
            <p
              style={Font.title_en}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Soft Skills Set
            </p>
            <SkillBar colors={skillsColors} skills={softSkills} />
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showOthers}
        onClose={() => {
          setShowOthers(false);
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showOthers}>
          <Box sx={modalStyle}>
            <p
              style={Font.title_en}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Software Skills Set
            </p>
            <SkillBar colors={skillsColors} skills={otherSkills} />
          </Box>
        </Fade>
      </Modal>
      {/* modal end */}
      {isEnglish ? (
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
              zIndex: 5,
              // paddingHorizontal: '5vw',
            }}
          >
            <Container id="topNav">
              <Header />
            </Container>
            <Container id="language">
              <Link
                component="button"
                color={Colors.secondaryColor}
                underline="hover"
                style={{ marginRight: 15 }}
                onClick={() => {}}
              >
                English
              </Link>
              <Link
                component="button"
                color={Colors.secondaryColor}
                underline="hover"
                onClick={() => {
                  CommonStore.update((s) => {
                    s.isMandarin = true;
                    s.isEnglish = false;
                  });
                }}
              >
                Mandarin
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
                <span className="animationTyping">I'm a Web Developer.</span>
                <Typist.Backspace count={21} delay={1000} />
                <span className="animationTyping">
                  I'm a Frontend Developer.
                </span>
                <Typist.Backspace count={25} delay={1000} />
                <span className="animationTyping">
                  I'm a Application Developer.
                </span>
                <Typist.Backspace count={28} delay={1000} />
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
                I'm a startup software developer, Fresh Graduate Student, and
                Frontend Designer who loves ambitious challenges, study, and
                energetic. Currently, I learning node js as the backend of my
                project.
              </p>
              <Typist
                className="typingName"
                cursor={{
                  show: false,
                }}
              >
                <Typist.Backspace count={0} delay={30000} />
                <span className="description">- Nicholas Tey Kai Jian -</span>
              </Typist>
            </Container>
          ) : null}

          {currentNav === 1 ? (
            <Container className="absoluteBottom">
              <div className="skillTop">
                <Grid
                  container
                  spacing={5}
                  columns={windowWidth < 426 ? 8 : 16}
                >
                  <Grid item xs={8}>
                    <Card>
                      <CardActionArea
                        onClick={() => {
                          setShowHardSkills(true);
                        }}
                        id="coding"
                      >
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
                          <p style={Font.title_en}>HARD SKILLS</p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={8}>
                    <Card>
                      <CardActionArea
                        onClick={() => {
                          setShowLanguage(true);
                        }}
                        className="skills"
                      >
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
                          <p style={Font.title_en}>LANGUAGES</p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={8}>
                    <Card>
                      <CardActionArea
                        onClick={() => {
                          setShowSoftSkills(true);
                        }}
                        id="soft"
                      >
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
                          <p style={Font.title_en}>SOFT SKILLS</p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={8}>
                    <Card>
                      <CardActionArea
                        onClick={() => {
                          setShowOthers(true);
                        }}
                        className="skills"
                      >
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
                          <p style={Font.title_en}>OTHERS</p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </div>
            </Container>
          ) : null}

          {currentNav === 2 ? (
            <Container className="absoluteBottom" id="portfolioInnerCont">
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={5}
                columns={windowWidth < 550 ? 4 : 12}
              >
                <Grid item xs={4}>
                  <div className="portfolioInnerCont animate__animated animate__fadeInTopLeft ">
                    <div className="topInnerCont">
                      <img
                        src={class_assignment}
                        alt="class_assignment"
                        class="imgInnerCont"
                      />
                    </div>
                    <div className="bottomInnerCont">
                      <p style={Font.normalizeFont_en}>
                        Type: Mini Side Project
                      </p>
                      <p style={Font.normalizeFont_en}>
                        Name: Class Assignment
                      </p>
                      <p style={Font.normalizeFont_en}>
                        Programming Language: -
                      </p>
                      <p style={Font.normalizeFont_en}>Software: MS Excel</p>
                      <p style={Font.normalizeFont_en}>
                        Features: To allocate the class to teacher in the
                        school.
                      </p>
                      <p style={Font.normalizeFont_en}>
                        Description: This is my first very simple side project
                        from the outside which was entrusted by a teacher who
                        from Chung Hwa High School located at Muar Johor.
                      </p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="portfolioInnerCont animate__animated animate__fadeInDown ">
                    <div className="portfolioInnerCont">
                      <div className="topInnerCont">
                        <img
                          src={fyp_assignment}
                          alt="fyp_assignment"
                          class="imgInnerCont"
                        />
                      </div>
                      <div className="bottomInnerCont">
                        <p style={Font.normalizeFont_en}>
                          Type: Final Year Project
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Name: Restaurant Management System
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Programming Language: Visual Basic
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Software: Visual Studio
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Software Requirement: SAP Crystal Report(runtime
                          version)
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Features: Order Payment, Customer Membership,
                          Report(Weekly Sales, Monthly Sales, Remaining Stock),
                          Manage Employee, Manage Supplier.
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Login Account: staff ID - 100001, password - test
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Login Account: admin ID - 100000, password - test
                        </p>
                        <p style={Font.normalizeFont_en}>Database - SQL</p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="portfolioInnerCont animate__animated animate__fadeInTopRight">
                    <div className="portfolioInnerCont">
                      <div className="topInnerCont">
                        <img
                          src={visualbasic_assignment}
                          alt="visualbasic_assignment"
                          class="imgInnerCont"
                        />
                      </div>
                      <div className="bottomInnerCont">
                        <p style={Font.normalizeFont_en}>
                          Type: Individual Assignment
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Name: Student Internship System
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Programming Language: Visual Basic
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Software: Visual Studio
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Software Requirement: SAP Crystal Report(runtime
                          version)
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Features: Register Account as Diploma or Degree
                          students, Edit account, Create CV, Create Logbook,
                          Edit and Delete Logbook.
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Description: To create logbook and cv when students is
                          during internship.
                        </p>
                        <p style={Font.normalizeFont_en}>Database - SQL</p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="portfolioInnerCont animate__animated animate__fadeInBottomLeft">
                    <div className="portfolioInnerCont">
                      <div className="topInnerCont">
                        <img
                          src={self_project}
                          alt="self_project"
                          class="imgInnerCont"
                        />
                      </div>
                      <div className="bottomInnerCont">
                        <p style={Font.normalizeFont_en}>Type: Portfolio</p>
                        <p style={Font.normalizeFont_en}>
                          Programming Language: React JS
                        </p>
                        <p style={Font.normalizeFont_en}>Software: VS Code</p>
                        <p style={Font.normalizeFont_en}>
                          Description: To know about my skills, portfolio,
                          github, and about me.
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Database - json server (API)
                        </p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="portfolioInnerCont animate__animated animate__fadeInUp">
                    <div className="portfolioInnerCont">
                      <div className="topInnerCont">
                        <img
                          src={java_assignment}
                          alt="java_assignment"
                          class="imgInnerCont"
                        />
                      </div>
                      <div className="bottomInnerCont">
                        <p style={Font.normalizeFont_en}>
                          Type: Individual Assignment
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Name: Banking System
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Programming Language: Java
                        </p>
                        <p style={Font.normalizeFont_en}>Software: Netbean</p>
                        <p style={Font.normalizeFont_en}>
                          Features: login as admin, register customer account,
                          edit customer information, withdrawal, deposit,
                          transaction history, transfer cash, and mini game.
                        </p>
                        <p style={Font.normalizeFont_en}>
                          Login Account: username - jin, password - asd
                        </p>
                        <p style={Font.normalizeFont_en}>Database - Textpad</p>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className="portfolioInnerCont animate__animated animate__fadeInBottomRight">
                    <div className="portfolioInnerCont">
                      <div className="topInnerCont">
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          href="https://github.com/jian0209"
                          target="_blank"
                        >
                          <GitHub class="imgInnerCont" />
                        </a>
                      </div>
                      <div className="topInnerCont">
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          href="https://apu-joblink-csm.symplicity.com/profiles/tp054604"
                          target="_blank"
                        >
                          <LinkedIn class="imgInnerCont" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          ) : null}

          {currentNav === 3 ? (
            <Container className="absoluteBottom" id="contactCont">
              <div className="whoAmI animate__animated animate__bounceInLeft">
                <img
                  src={logo}
                  alt="Logo"
                  class="logo animate__animated animate__fadeInDown"
                  height="150"
                />
                <p style={Font.title_en}>Who Am I?</p>
                <p id="contactDes" style={Font.normalizeFont_en}>
                  Jian is a Software Developer, junior leader and a fresh
                  graduate student, with experience interviewing, leading, and
                  managing the small team in his internship. He has a background
                  of 7 years working. The previous company is to work with
                  design with AutoCad and manage the worker at back. The
                  internship company is to work with develop the website, ios
                  and android application with react js, and react native. On
                  the university, he learned java, python, visual basic, sql,
                  and web development.
                </p>
              </div>
              <div className="contactImage animate__animated animate__bounceInRight">
                <img src={normal} alt="Logo" id="contactImage" height="450" />
                {/* logo */}
                {/* <img src={logo} alt="Logo" id="contactLogo" class="animate__animated animate__fadeInDown" height="150" /> */}
              </div>
              <div id="contactButtonCont">
                <button
                  className="buttonStyle"
                  onClick={() => {
                    CommonStore.update((s) => {
                      s.isEnglishContact = true;
                      s.isEnglish = false;
                    });
                  }}
                >
                  <SvgButton id="contactButton">get in touch</SvgButton>
                </button>
              </div>
            </Container>
          ) : null}
        </div>
      ) : null}

      {isEnglishContact ? <Contact /> : null}
      {isMandarin ? <Index_cn /> : null}
      {isMandarinContact ? <Contact_cn /> : null}
    </div>
  );
};

export default Index;
