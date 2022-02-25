import React from "react";
import "../styles/banner.css";
import Shootingrocker from "../svgComponent/Shootingrocker";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedIn from "@mui/icons-material/LinkedIn";

import logo from "../assets/logo.svg";
import mongodb from "../assets/mongodb.svg";
import nodejs from "../assets/nodejs.svg";
import firebase from "../assets/firebase.svg";
import mypicturecut from "../assets/mypicturecut.png";

const width = window.innerWidth;
const breakpoint = 465;
function Banner(props) {
  return (
    <>
      {width > breakpoint ? (
        <div className="Banner">
          <div className="Banner-container">
            <section className="Titles">
              <h1 className="Title-h1">
                Hey there! Am Ronick Samuel,
                <br /> A MEARN STACK Developer.
              </h1>
              <Typography className="subtitle1" variant="subtitle1">
                I Have Built Many Scalable Enterprise Application. Well
                Structured Data And Correct Algorithm, SEO Optimized, Amazing
                UI/UX with Great Performance
              </Typography>
              <div>
                <a href="https://www.linkedin.com/in/samuel-ronick-a4666a173/">
                  <LinkedIn
                    style={{
                      margin: "12px",
                      color: "skyblue",
                      fontSize: "2em",
                    }}
                  />
                </a>
                <a href="https://github.com/sammy0055">
                  <GitHubIcon style={{ margin: "12px", fontSize: "2em" }} />
                </a>
                <a href="https://wa.me/message/POR6INKEAOCFH1">
                  <WhatsAppIcon
                    style={{ margin: "12px", color: "green", fontSize: "2em" }}
                  />
                </a>
                <a href="https://www.linkedin.com/in/samuel-ronick-a4666a173/">
                  <InstagramIcon
                    style={{ margin: "12px", color: "cream", fontSize: "2em" }}
                  />
                </a>
                {width > breakpoint && (
                  <a href="https://twitter.com/rockey045">
                    <TwitterIcon
                      style={{
                        margin: "12px",
                        color: "skyblue",
                        fontSize: "2em",
                      }}
                    />
                  </a>
                )}
              </div>
            </section>

            <section className="BannerIcon">
              <Shootingrocker />
            </section>
          </div>

          <div className="Bicons">
            <div className="Techlogo-container">
              <img src={logo} alt="not found" className="Techlogo" />
            </div>
            <div className="Techlogo-container">
              <img src={mongodb} alt="not found" className="Techlogo" />
            </div>
            <div className="Techlogo-container">
              <img src={nodejs} alt="not found" className="Techlogo" />
            </div>
            <div className="Techlogo-container">
              <img src={firebase} alt="not found" className="Techlogo" />
            </div>
          </div>
        </div>
      ) : (
        <div className="Bannermobile">
          <div className="Mobile-imageContainer">
            <img width="100px" src={mypicturecut} alt="not found" />
          </div>
          <section className="Mobilebio">
            <h1>Hey there! Am Ronick Samuel, A MEARN STACK Developer.</h1>
            <p>
              {" "}
              I Have Built Many Scalable Enterprise Application. Well Structured
              Data And Correct Algorithm, SEO Optimized, Amazing UI/UX with
              Great Performance
            </p>
          </section>
          <div className="Animation-area">
            <ul className="Box-area">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
