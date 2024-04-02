import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Education from "../components/Education";
function EducationContact() {
  return (
    <div>
      <Header />
      <div
        className="Education-contact-intro"
        style={{ backgroundImage: `url('./edu-contact.svg')` }}
      >
        <div className="Education-contact-intro-content">
          <a href="#div-stack-edu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            MY EDUCATION
          </a>
          <a href="#contact">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            CONTACT
          </a>
        </div>
      </div>
      {/* Education section */}
      <div className="container my-5 n-box2 py-5  div-stack" id="div-stack-edu">
        <Education />
      </div>
      {/* Contact section  */}
      <div className="container mt-3" id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default EducationContact;
