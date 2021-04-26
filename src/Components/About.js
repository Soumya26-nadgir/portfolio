import React from "react";
import { Row, Col } from "antd";
import teamPic from "./Images/teamPic.svg";
import team1 from "./Images/team1.svg";
import Typed from "react-typed";

function About() {
  return (
    <>
      <div className="container-fluid">
        <Row>
          <Col>
            <h1 style={{fontSize: '39px'}}>About Us</h1>
            <h2>
              Microtechnologies, IT Solution Digital Pvt Ltd and IT Solution
              Systems Pvt Ltd are IT & Digital Marketing Service Provider
              specialized in  <h2 style={{color:' #f2a051'}}>
              <Typed
                strings={[
                  "Server Infrastructure","Network Solutions",
                  "SEO",
                  "Digital Marketing","Web Design","Security Applications","IOT Based Applications","Mobile Development"
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </h2>
          
            </h2>
           </Col>
          <Col className="main" span={6}>
            <img className="image" src={teamPic} alt="MicroTechnology" />
          </Col>
          <Col className="main" span={12}>
            <img className="image" src={team1} alt="MicroTechnology" />
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default About;
