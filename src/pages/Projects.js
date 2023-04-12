import React from "react";
import Header from "../components/Header";
import {FaLaptopCode} from 'react-icons/fa';
import ProjectsData from "./ProjectsData";


function projects() {
  return (
    <div>
      <Header />
      <div className="container  projects-intro font-bold" >
        <div className="row flex-with-center mt-5 py-5">
          <div className="col-md-6 n-box2  p-3" data-aos="fade-right">
            <div>
              <h1 className='font-bold' >Projects</h1>
              <p  className='font-bold'>
                Good ideas are not adopted automatically.They must be driven
                into practice with courageous patience
              </p>
              {/* <button className="primary-button">Get started</button> */}
            </div>
          </div>
          <div className="col-md-6 position-relative project-blob">
            <img src="./blobProjects.svg" alt="" height='500' width='500'/>
              <FaLaptopCode color="white" size={180} className="position-absolute top-50 start-50 translate-middle my-3 mx-3"/>
          </div>
        </div>
      </div>


      <div className="container project-list">
        <h2 className="font-bold text-start">Take a look of my projects</h2>
        <hr />
        <div className="row">
          {ProjectsData.map(Projects=>{
            return <div className="col-md-4">
              <div className="position-relative projects">
                <img src={Projects.image}alt="" />
                <div className="project-content">
                  <h1>{Projects.title}</h1>
                  <p>{Projects.description}</p>
                  <button className="primary-button font-bold ">{Projects.link}Demo</button>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default projects;
