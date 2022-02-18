// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import Colors from "../../Assets/Colors";
import Font from "../../Assets/Font";
import "../css/contact.css";
import logo from "../../Assets/image/self_icon.png";
import Link from "@mui/material/Link";
import { ReactComponent as Back } from "../../Assets/svg/back-arrow.svg";
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
import { FaRegCalendarCheck } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import Footer from '../../Components/Footer';

const Contact = () => {
  // useState
  const [timelineYi, setTimelineYi] = useState(false);
  const [timelineChung, setTimelineChung] = useState(false);
  const [timelineApu, setTimelineApu] = useState(false);
  const [timelineAplc, setTimelineAplc] = useState(false);
  const [timelineAus, setTimelineAus] = useState(false);
  const [timelinePython, setTimelinePython] = useState(false);
  const [timelinePypro, setTimelinePypro] = useState(false);
  const [timelinePartPerk, setTimelinePartPerk] = useState(false);
  const [timelineInternPerk, setTimelineInternPerk] = useState(false);
  const [timelineFullPerk, setTimelineFullPerk] = useState(false);

  // useEffect
  useEffect(() => {}, []);

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
          <div id="topBack">
            <Back />
            <a href="/" id="buttonStyle">
              <p style={Font.title_en}>Back</p>
            </a>
          </div>
        </Container>
        <Container id="contactTitle">
          <p style={Font.title_en}>Contact Me</p>
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
        {/* describe */}
        <div className="contactMainCont">
          <div id="imgHere">
            <p>Image here</p>
          </div>
          <div id="contactIntroduction">
            <p style={Font.normalizeFont_en}>
              I am a developer with web, software, and application with 1 year
              experience in tech team, and a designer with AutoCad LT with 6
              years experience. Currently, I am searching a job with develop
              web, software or application.
            </p>
            <p style={Font.normalizeFont_en}>
              My thirst for knowledge has led me to study hard every day.
              Meanwhile, I vastly improved the coding skills to upgrade my
              efficiency at work, to make me work-life balance.
            </p>
            <p style={Font.normalizeFont_en}>
              Me currently working as a Android | IOS | Web developer and is
              always interested in a new challenge. Reach out to
              jian000209@gmail.com.
            </p>
          </div>
        </div>
        {/* Future plan */}
        <div className="contactMiddleCont">
          <div id="futurePlan">
            <p id="futurePlanText" style={Font.title_en}>
              Future Plan
            </p>
          </div>
          <div id="explainFuturePlan">
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              sx={{
                flexGrow: 1,
                maxWidth: 400,
              }}
            >
              <TreeItem nodeId="1" label="Learn Programming">
                <TreeItem nodeId="2" label="Node JS" />
                <TreeItem nodeId="3" label="Angular" />
                <TreeItem nodeId="24" label="Vue JS" />
                <TreeItem nodeId="25" label="Next JS" />
                <TreeItem nodeId="26" label="AJAX" />
                <TreeItem nodeId="28" label="TypeScript" />
              </TreeItem>
              <TreeItem nodeId="1" label="Improve Programming Skill">
                <TreeItem nodeId="5" label="React Native | React JS" />
                <TreeItem nodeId="6" label="Python" />
              </TreeItem>
              <TreeItem nodeId="56" label="Work out everyday"></TreeItem>
              <TreeItem nodeId="57" label="Reading after sleep"></TreeItem>
              <TreeItem
                nodeId="58"
                label="To become full stack developer"
              ></TreeItem>
            </TreeView>
          </div>
        </div>
        {/* timeline */}
        <div className="contactBottomCont">
          <p style={Font.title_en}>Timeline</p>
          <Timeline id="timelineId" minEvents={5} placeholder>
            <TimelineEvent
              icon={HiOutlineOfficeBuilding}
              color={Colors.timelineColor[10]}
              title="Yi Sheng Tool"
              subtitle="2012 Nov - 2019 Nov"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(!timelineYi);
                  setTimelineChung(false);
                  setTimelineApu(false);
                  setTimelineAplc(false);
                  setTimelineAus(false);
                  setTimelinePython(false);
                  setTimelinePypro(false);
                  setTimelinePartPerk(false);
                  setTimelineInternPerk(false);
                  setTimelineFullPerk(false);
                },
              }}
            />
            <TimelineEvent
              icon={IoSchoolOutline}
              color={Colors.timelineColor[9]}
              title="High School"
              subtitle="2013 Jan - 2018 Nov"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(false);
                  setTimelineChung(!timelineChung);
                  setTimelineApu(false);
                  setTimelineAplc(false);
                  setTimelineAus(false);
                  setTimelinePython(false);
                  setTimelinePypro(false);
                  setTimelinePartPerk(false);
                  setTimelineInternPerk(false);
                  setTimelineFullPerk(false);
                },
              }}
            />
            <TimelineEvent
              color={Colors.timelineColor[8]}
              icon={IoSchoolOutline}
              title="Asia Pacific University"
              subtitle="2019 Sep - 2021 Dec"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(false);
                  setTimelineChung(false);
                  setTimelineApu(!timelineApu);
                  setTimelineAplc(false);
                  setTimelineAus(false);
                  setTimelinePython(false);
                  setTimelinePypro(false);
                  setTimelinePartPerk(false);
                  setTimelineInternPerk(false);
                  setTimelineFullPerk(false);
                },
              }}
            />
            <TimelineEvent
              color={Colors.timelineColor[7]}
              icon={FaRegCalendarCheck}
              title="APLC Event"
              subtitle="2019 Apr"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(false);
                  setTimelineChung(false);
                  setTimelineApu(false);
                  setTimelineAplc(!timelineAplc);
                  setTimelineAus(false);
                  setTimelinePython(false);
                  setTimelinePypro(false);
                  setTimelinePartPerk(false);
                  setTimelineInternPerk(false);
                  setTimelineFullPerk(false);
                },
              }}
            />
            <TimelineEvent
              color={Colors.timelineColor[6]}
              icon={FaRegCalendarCheck}
              title='"Are You Safe"'
              subtitle="2020 Apr"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(false);
                  setTimelineChung(false);
                  setTimelineApu(false);
                  setTimelineAplc(false);
                  setTimelineAus(!timelineAus);
                  setTimelinePython(false);
                  setTimelinePypro(false);
                  setTimelinePartPerk(false);
                  setTimelineInternPerk(false);
                  setTimelineFullPerk(false);
                },
              }}
            />
          </Timeline>
          <Timeline minEvents={5} placeholder>
            <TimelineEvent
              color={Colors.timelineColor[5]}
              icon={IoSchoolOutline}
              title="Enrolled Python Course"
              subtitle="2021 Mar"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(false);
                  setTimelineChung(false);
                  setTimelineApu(false);
                  setTimelineAplc(false);
                  setTimelineAus(false);
                  setTimelinePython(!timelinePython);
                  setTimelinePypro(false);
                  setTimelinePartPerk(false);
                  setTimelineInternPerk(false);
                  setTimelineFullPerk(false);
                },
              }}
            />
            <TimelineEvent
              color={Colors.timelineColor[4]}
              icon={FaRegCalendarCheck}
              title='"PYPRO"'
              subtitle="2021 May"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(false);
                  setTimelineChung(false);
                  setTimelineApu(false);
                  setTimelineAplc(false);
                  setTimelineAus(false);
                  setTimelinePython(false);
                  setTimelinePypro(!timelinePypro);
                  setTimelinePartPerk(false);
                  setTimelineInternPerk(false);
                  setTimelineFullPerk(false);
                },
              }}
            />
            <TimelineEvent
              color={Colors.timelineColor[3]}
              icon={HiOutlineOfficeBuilding}
              title="Perksense Sdn Bhd"
              subtitle="2021 Feb - 2021 Sep"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(false);
                  setTimelineChung(false);
                  setTimelineApu(false);
                  setTimelineAplc(false);
                  setTimelineAus(false);
                  setTimelinePython(false);
                  setTimelinePypro(false);
                  setTimelinePartPerk(!timelinePartPerk);
                  setTimelineInternPerk(false);
                  setTimelineFullPerk(false);
                },
              }}
            />
            <TimelineEvent
              color={Colors.timelineColor[2]}
              icon={HiOutlineOfficeBuilding}
              title="Perksense Sdn Bhd"
              subtitle="2021 Sep - 2021 Dec"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(false);
                  setTimelineChung(false);
                  setTimelineApu(false);
                  setTimelineAplc(false);
                  setTimelineAus(false);
                  setTimelinePython(false);
                  setTimelinePypro(false);
                  setTimelinePartPerk(false);
                  setTimelineInternPerk(!timelineInternPerk);
                  setTimelineFullPerk(false);
                },
              }}
            />
            <TimelineEvent
              color={Colors.timelineColor[1]}
              icon={HiOutlineOfficeBuilding}
              title="Perksense Sdn Bhd"
              subtitle="2021 Dec - 2022 Mar"
              action={{
                label: "View Details",
                onClick: () => {
                  setTimelineYi(false);
                  setTimelineChung(false);
                  setTimelineApu(false);
                  setTimelineAplc(false);
                  setTimelineAus(false);
                  setTimelinePython(false);
                  setTimelinePypro(false);
                  setTimelinePartPerk(false);
                  setTimelineInternPerk(false);
                  setTimelineFullPerk(!timelineFullPerk);
                },
              }}
            />
          </Timeline>
        </div>
        {timelineYi ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Yi Sheng Tool Enterprise (Part Time)
            </p>
            <p style={Font.normalizeFont_en}>
              I am a designer who using AutoCad to design and build a furniture
              knife. Also, I had to service with customer with some question,
              and I need to solve their question with my knowledge.
            </p>
          </div>
        ) : null}
        {timelineChung ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Chung Hwa High School (Education)
            </p>
            <p style={Font.normalizeFont_en}>
              I am a student who took the certificate with Unified Examination
              Certificate (UEC) with 1A, 3B, 1C. The strongest subject in UEC is
              Mathematics. Also, I am a discipline manager who manage the
              discipline of the society.
            </p>
          </div>
        ) : null}
        {timelineApu ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Asia Pacific University (Education)
            </p>
            <p style={Font.normalizeFont_en}>
              I am a student who enrolled in Diploma of Information and
              Communications Technology(Software Engineering), and I got a 3.15
              CGPA out of a possible 4.0, and a 3.7 GPA or above for coding
              courses like java, web development and visual basic.
              Unfortunately, the online class was experienced during the school
              year.This also resulted in my EVENT leaving me unsatisfied.
              Luckily I was still able to participate in quite a few
              competitions and online events.
            </p>
          </div>
        ) : null}
        {timelineAplc ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Asia Pacific Language Centre (Event)
            </p>
            <p style={Font.normalizeFont_en}>
              It is an activity to meet more people and to increase your social
              and communication skills. What I liked most about this was the
              activity that the event organizers came up with. It is a benefit
              for introverts. It was almost as if we were interacting with each
              other all the time except for the toilet.
            </p>
          </div>
        ) : null}
        {timelineAus ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              CyberSecurity Talk "Are You Safe" (Event)
            </p>
            <p style={Font.normalizeFont_en}>
              This is an event that recognizes the issue of internet security
              awareness around the world, with organizers presenting on stage
              and practising how hackers can log into our computers or use
              internet routers to take control of our computers and rob us of
              our internet access. It made me realise that the hackers in the
              movies are all frauds, but it also sparked my interest in
              cybersecurity. If there is another event like this I will
              definitely attend it!
            </p>
          </div>
        ) : null}
        {timelinePython ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Enrolled Python Course (Self-Learning)
            </p>
            <p style={Font.normalizeFont_en}>
              It was the first extra-curricular course I signed up for on my
              own, because I wanted to improve my skills and practice my logical
              thinking.
            </p>
          </div>
        ) : null}
        {timelinePypro ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Python Competition - "PYPRO" (Event)
            </p>
            <p style={Font.normalizeFont_en}>
              It was my first intramural coding competition and of course I
              didn't place on the field, although I did my best, but I was happy
              that I gained a lot of experience and learned about the tension of
              the competition.
            </p>
          </div>
        ) : null}
        {timelinePartPerk ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Perksense Sdn Bhd (Part Time)
            </p>
            <p style={Font.normalizeFont_en}>
              I found this company by chance as my part time, so I started to
              work half time, and because this company agreed to let me work
              from home, I took up a position as a developer, which helped me to
              understand the difference between social programming and school,
              and gave me a lot of experience in this area. - React Native |
              React JS
            </p>
          </div>
        ) : null}
        {timelineInternPerk ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Perksense Sdn Bhd (Internship)
            </p>
            <p style={Font.normalizeFont_en}>
              This is also my internship company - React Native | React JS
            </p>
          </div>
        ) : null}
        {timelineFullPerk ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Perksense Sdn Bhd (Full Time)
            </p>
            <p style={Font.normalizeFont_en}>
              When I switched to junior, my post was upgraded along with it.
              I've learned how to interview people at this company. - React
              Native | React JS
            </p>
          </div>
        ) : null}
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
