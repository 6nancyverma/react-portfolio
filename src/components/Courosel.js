import React from "react";
import {
  FaReact,
  FaHtml5,
  FaJsSquare,
  FaCss3,
  FaBootstrap,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
function Courosel() {
  return (
    <div className="courosel-parent position-relative" id='courosel'>
      <h1 className="position-absolute top-0 end-0 start-0 text-center mt-5">
        Technologes I use
      </h1>
      <div className="gallery">
        <span style={{ "--i": 1 }}>
          <FaReact color="cyan" />
        </span>
        <span style={{ "--i": 2 }}>
          <FaHtml5 color="#dd4b25" />
        </span>
        <span style={{ "--i": 3 }}>
          <FaJsSquare color="yellow" />
        </span>
        <span style={{ "--i": 4 }}>
          <FaCss3 color="#254bdd" />
        </span>
        <span style={{ "--i": 5 }}>
          <FaBootstrap color="#6e10ee" />
        </span>
        <span style={{ "--i": 6 }}>
          <FaJava color="orange" />
        </span>
        <span style={{ "--i": 7 }}>
          <FaNodeJs color="#8cb962" />
        </span>
      </div>
    </div>
  );
}

export default Courosel;
