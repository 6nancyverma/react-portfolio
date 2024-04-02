import React from "react";
import { FaReact, FaJsSquare, FaCss3, FaJava, FaNodeJs } from "react-icons/fa";
import NextJs from "../svgs/NextJs/index.js";
import MongoDb from "../svgs/Mongodb/index.js";
import Antd from "../svgs/Antd/index.js";
function Courosel() {
  return (
    <div className="courosel-parent position-relative" id="courosel">
      <h1 className="position-absolute top-0 end-0 start-0 text-center mt-5">
        Technologes I use
      </h1>
      <div className="gallery">
        <span style={{ "--i": 1 }}>
          <FaReact color="cyan" />
        </span>
        <span style={{ "--i": 2 }}>
          <FaJsSquare color="yellow" />
        </span>
        <span style={{ "--i": 3 }}>
          <FaCss3 color="#254bdd" />
        </span>
        <span style={{ "--i": 4 }}>
          <FaJava color="orange" />
        </span>
        <span style={{ "--i": 5 }}>
          <FaNodeJs color="#8cb962" />
        </span>
        <span style={{ "--i": 6 }}>
          <NextJs />
        </span>
        <span style={{ "--i": 7 }}>
          <MongoDb />
        </span>
        <span style={{ "--i": 8 }}>
          <Antd />
        </span>
      </div>
    </div>
  );
}

export default Courosel;
