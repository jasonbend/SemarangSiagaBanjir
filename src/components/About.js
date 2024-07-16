import React from "react";
import { useSelector } from "react-redux";
import "./About.css";

function About() {
  const content = useSelector((state) => state.content);

  return (
    <div className="about">
      <div className="about-content">
        <img
          src={`${process.env.PUBLIC_URL}/images/logossb.png`}
          alt="Semarang Siaga Banjir"
          className="about-image"
        />
        <div className="about-text">
          <div className="spacer"></div>
          <h1>{content.title}</h1>
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="spacer"></div>
          <div className="spacer"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
