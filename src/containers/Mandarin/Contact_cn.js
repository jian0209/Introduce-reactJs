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
import Footer_cn from "../../Components/Footer_cn";

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
            <a href="Home_cn" id="buttonStyle">
              <p style={Font.title_cn}>返回</p>
            </a>
          </div>
        </Container>
        <Container id="contactTitle">
          <p style={Font.title_cn}>关于</p>
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
              href="Contact"
            >
              英文
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
              href=""
            >
              中文
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
              我是一名拥有1年经验的网络、软件和应用程序开发人员。也是一名在AutoCad
              LT上拥有6年经验的设计师。目前，我正在寻找一份网络设计、软件或应用程序的工作。
            </p>
            <p style={Font.normalizeFont_en}>
              对知识的渴求使我每天都在努力学习。同时，我极大地提高了编码技能，以提高我的工作效率。在工作中的效率，使我的工作和生活得到平衡。
            </p>
            <p style={Font.normalizeFont_en}>
              我目前是一名Android | IOS |
              Web开发员，对新的挑战一直很感兴趣。总是对新的挑战感兴趣。若有兴趣，请联系
              jian000209@gmail.com。
            </p>
          </div>
        </div>
        {/* Future plan */}
        <div className="contactMiddleCont">
          <div id="futurePlan">
            <p id="futurePlanText" style={Font.title_en}>
              未来计划
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
              <TreeItem nodeId="1" label="学习新语言">
                <TreeItem nodeId="2" label="Node JS" />
                <TreeItem nodeId="3" label="Angular" />
                <TreeItem nodeId="24" label="Vue JS" />
                <TreeItem nodeId="25" label="Next JS" />
                <TreeItem nodeId="26" label="AJAX" />
                <TreeItem nodeId="28" label="TypeScript" />
              </TreeItem>
              <TreeItem nodeId="1" label="增加编程技术">
                <TreeItem nodeId="5" label="React Native | React JS" />
                <TreeItem nodeId="6" label="Python" />
              </TreeItem>
              <TreeItem nodeId="56" label="每一天的运动"></TreeItem>
              <TreeItem nodeId="57" label="睡前学习"></TreeItem>
              <TreeItem nodeId="58" label="目标为全端工程师"></TreeItem>
            </TreeView>
          </div>
        </div>
        {/* timeline */}
        <div className="contactBottomCont">
          <p style={Font.title_en}>时间线</p>
          <Timeline id="timelineId" minEvents={5} placeholder>
            <TimelineEvent
              icon={HiOutlineOfficeBuilding}
              color={Colors.timelineColor[10]}
              title="Yi Sheng Tool"
              subtitle="2012 Nov - 2019 Nov"
              action={{
                label: "查看详情",
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
                label: "查看详情",
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
                label: "查看详情",
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
                label: "查看详情",
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
                label: "查看详情",
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
                label: "查看详情",
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
                label: "查看详情",
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
                label: "查看详情",
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
                label: "查看详情",
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
                label: "查看详情",
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
              我是一名设计师，使用AutoCad来设计和建造一个家具
              刀。此外，我还需要为客户提供一些问题的服务。
              而我需要用我的知识来解决他们的问题。
            </p>
          </div>
        ) : null}
        {timelineChung ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Chung Hwa High School (Education)
            </p>
            <p style={Font.normalizeFont_en}>
              我是一名参加统考的学生。证书（UEC），成绩为1A、3B、1C。统考中最强的科目是数学。此外，我是一名纪律管理员，负责管理社会纪律。
            </p>
          </div>
        ) : null}
        {timelineApu ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Asia Pacific University (Education)
            </p>
            <p style={Font.normalizeFont_en}>
              我是一名报读Diploma of Information and Communications
              Technology(Software
              Engineering)的学生，在4.0分中，我得到了3.15分的CGPA，编码课程如java、web开发和visual
              basic的GPA也在3.7以上。不幸的是，在学年期间经历了在线课程。幸运的是，我仍然能够参加一些比赛和在线活动。
            </p>
          </div>
        ) : null}
        {timelineAplc ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Asia Pacific Language Centre (Event)
            </p>
            <p style={Font.normalizeFont_en}>
              这是一个认识更多的人，增加我的社交和沟通能力的活动。我最喜欢的是活动组织者想出的一些活动。这对内向的人来说是一种好处。
            </p>
          </div>
        ) : null}
        {timelineAus ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              CyberSecurity Talk "Are You Safe" (Event)
            </p>
            <p style={Font.normalizeFont_en}>
              这是一个认识到互联网安全问题的活动。组织者在舞台上介绍了互联网安全问题。组织者在舞台上介绍并实践了黑客如何登录我们的电脑或使用互联网路由器来控制我们的电脑并抢走我们的
              我们的互联网接入。这让我意识到，电影中的黑客都是骗子。电影中的黑客都是骗子，但它也激发了我对网络安全的兴趣。如果再有这样的活动，我非常乐意参加!
            </p>
          </div>
        ) : null}
        {timelinePython ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Enrolled Python Course (Self-Learning)
            </p>
            <p style={Font.normalizeFont_en}>
            这是我自己报名参加的第一个课外课程，因为我想提高自己的技能，锻炼自己的逻辑思维。
            </p>
          </div>
        ) : null}
        {timelinePypro ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Python Competition - "PYPRO" (Event)
            </p>
            <p style={Font.normalizeFont_en}>
            这是我第一次参加校内编码比赛，当然，我没有在赛场上取得名次。尽管我已经尽力了，但我还是觉得很高兴，因为我获得了很多经验，并了解了比赛的紧张气氛。
            </p>
          </div>
        ) : null}
        {timelinePartPerk ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Perksense Sdn Bhd (Part Time)
            </p>
            <p style={Font.normalizeFont_en}>
            我偶然发现这家公司，并成为了我的兼职，所以我开始了半工半读的生活。因为这家公司同意让我在家工作，所以我担任了一个开发人员的职位，这帮助我了解社会编程和学校之间的区别。同时在这方面给了我很多经验。 - React Native |
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
            这也是我的实习公司 - React Native | React JS
            </p>
          </div>
        ) : null}
        {timelineFullPerk ? (
          <div className="timelineDescription animate__animated animate__fadeInLeft">
            <p style={Font.title_en} className="timelineTitle">
              Perksense Sdn Bhd (Full Time)
            </p>
            <p style={Font.normalizeFont_en}>
            当我正式转为全职人员时，我的职位也一并升级了。在这家公司，我也学会了如何面试别人。 - React
              Native | React JS
            </p>
          </div>
        ) : null}
      </Container>
      <Footer_cn />
    </div>
  );
};

export default Contact;
