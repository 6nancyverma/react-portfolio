import React from "react";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Project from "../components/Project";

function ExperienceProjects() {
  return (
    <div>
      <Header />
      <div className="container py-5">
        {/* Experience Section */}
        <div className="container my-5 n-box2  div-stack py-5">
          <Experience />
        </div>

        {/* Project Section */}
        <div className="container ">
          <Project />
        </div>
      </div>
    </div>
  );
}

export default ExperienceProjects;
