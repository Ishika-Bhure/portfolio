import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ISHIKA
              <br />
              <span>BHURE</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Frontend Developer | <br /> Problem Solver | <br /> Exploring Full Stack Development</h3>
            <p style={{ marginTop: '20px', fontSize: '18px', maxWidth: '600px', lineHeight: '1.6' }}>
              I am an Artificial Intelligence and Data Science student at Yeshwantrao Chavan College of Engineering, Nagpur. I build responsive web applications and interactive dashboards using modern web technologies. Passionate about solving problems using Data Structures and Algorithms and continuously improving my development skills.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
