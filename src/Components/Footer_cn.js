import { Container } from "@mui/material";
import React from "react";
import { useState, useEffect, forwardRef } from "react";
import Colors from "../Assets/Colors";
import Font from "../Assets/Font";
import "animate.css";
import logo from "../Assets/image/self_icon.png";
import Header from "../Components/header";
import Link from "@mui/material/Link";
import axios from "axios";
import Typist from "react-typist";
import PropTypes from "prop-types";
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import "./css/footer.css";
import { ReactComponent as Facebook } from "../Assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "../Assets/svg/instagram.svg";
import { ReactComponent as Gmail } from "../Assets/svg/gmail.svg";
import { ReactComponent as LinkedIn } from "../Assets/svg/linked.svg";
import { ReactComponent as GitHub } from "../Assets/svg/github.svg";

const Footer_cn = () => {
  // useState

  // useEffect
  useEffect(() => {}, []);

  // function

  return (
    <div className="footerMainCont">
      <div id="footerCont">
        <div id="footerContact">
          <p id="contactText" style={Font.title_en}>联络我</p>
          <div id="footerContactDetail">
            <a
              style={{ textDecoration: "none", color: "black", marginRight: "10px" }}
              href="https://www.facebook.com/kaijian.tey"
            >
              <Facebook />
            </a>
            <a
              style={{ textDecoration: "none", color: "black", marginRight: "10px" }}
              href="https://www.instagram.com/kjtey/"
            >
              <Instagram />
            </a>
            <a
              style={{ textDecoration: "none", color: "black", marginRight: "10px" }}
              href="mailto:jian000209@gmail.com?subject=我对你很感兴趣"
            >
              <Gmail />
            </a>
            <a
              style={{ textDecoration: "none", color: "black", marginRight: "10px" }}
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
        <div id="footerAbout">
            <p id="aboutText" style={Font.subtitle_en}>电子邮件: jian000209@gmail.com</p>
                <p id="phoneText" style={Font.subtitle_en}>电话与WhatsApp: +60 18 632 0278</p>
        </div>
      </div>
    </div>
  );
};

export default Footer_cn;
