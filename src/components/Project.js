import React from "react";

import { FaLaptopCode } from "react-icons/fa";
import ProjectsData from "../pages/ProjectsData";

function Project() {
  return (
    <div>
      {" "}
      <div className="container projects-intro font-bold">
        <div className="row flex-with-center mt-5 py-5">
          <div className="col-md-6 n-box2  p-3" data-aos="fade-right">
            <div>
              <h1 className="font-bold">Projects</h1>
              <p className="font-bold">
                Good ideas are not adopted automatically. They must be driven
                into practice with courageous patience
              </p>
            </div>
          </div>
          <div className="col-md-6 position-relative project-blob">
            <img src="./blobProjects.svg" alt="" height="500" width="500" />
            <FaLaptopCode
              color="white"
              size={180}
              className="position-absolute top-50 start-50 translate-middle my-3 mx-3"
            />
          </div>
        </div>
      </div>
      <div className="container project-list">
        <h2 className="font-bold text-start">Take a look at my projects</h2>
        <hr />
        <div className="row">
          {ProjectsData.map((project) => {
            return (
              <div className="col-md-4" key={project.id}>
                <div className="position-relative projects">
                  <img src={project.image} alt="" />
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
