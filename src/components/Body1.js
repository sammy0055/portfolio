import React from "react";
import "../styles/body1.css";
import Twomanhold from "../svgComponent/Twomanhold";
import Card from "@mui/material/Card";
import logo from "../assets/logo.svg";
import mongodb from "../assets/mongodb.svg";
import nodejs from "../assets/nodejs.svg";
import firebase from "../assets/firebase.svg";

function Body1(props) {
  return (
    <div className="Body1">
      .
      <section className="Body1banner">
        <Twomanhold />
      </section>
      <section className="Body1banner-text">
        <h1>Technical Skills</h1>
        <p>hello, below are my featured skills</p>
      </section>
      <section className="Card-container">
        <Card style={{ backgroundColor: "#161C24" }} className="Card">
          <div className="Cardicon">
            <img src={logo} alt="not found" />
          </div>
          <h1>react js</h1>
          <p>
            I have worked with react js for 3+ years. I have developed good
            understanding of the libriary and its eco-system.
          </p>
        </Card>

        <Card style={{ backgroundColor: "#161C24" }} className="Card">
          <div className="Cardicon">
            <img src={nodejs} alt="not found" />
          </div>
          <h1>node js</h1>
          <p>
            I have worked with react js for 3+ years. I have good understanding
            of Events, Express js and node core functionalities.
          </p>
        </Card>

        <Card style={{ backgroundColor: "#161C24" }} className="Card">
          <div className="Cardicon">
            <img src={mongodb} alt="not found" />
          </div>
          <h1>mongoDB</h1>
          <p>
            I have good understing of mongoDB core functions. I can impliment
            Cruid, sorting, validations and complex queries
          </p>
        </Card>

        <Card style={{ backgroundColor: "#161C24" }} className="Card">
          <div className="Cardicon">
            <img src={firebase} alt="not found" />
          </div>
          <h1>firebase</h1>
          <p>
            I have worked with google cloud service for 3+ years, am with
            authentications, storage, firestore, cloud functions, hosting.
          </p>
        </Card>

        <Card style={{ backgroundColor: "#161C24" }} className="Card">
          <div className="Cardicon">
            <img src={firebase} alt="not found" />
          </div>
          <h1>Data Structure & algorithm</h1>
          <p>
            I have good understanding of algorithms, space and time complexity,
            sound algorithm thinking and problem solving solving skills.
          </p>
        </Card>

        <Card style={{ backgroundColor: "#161C24" }} className="Card">
          <div className="Cardicon">
            <img src={firebase} alt="not found" />
          </div>
          <h1>Object Oriented Programming</h1>
          <p>
            I recently adapted OOP principles i have good understanding of
            Encapsulation Abstraction, Inheritance, Polymorphism etc.
          </p>
        </Card>
      </section>
    </div>
  );
}

export default Body1;
