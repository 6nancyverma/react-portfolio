import React from "react";
import Header from "../components/Header";
import Courosel from "../components/Courosel";

function Home() {
  return (
    <div>
      <Header />
      <div
        className="introduction flex-with-center"
        style={{ backgroundImage: `url('./intro3.svg')` }}
      >
        <div>
          <h1 className="font-bold " data-aos="fade-up">
            Nancy Verma
          </h1>
          <div className="intro-content ">
            <p> Hustler who loves to do Frontend development</p>

            <a className="primary-button  font-bold " href="#courosel">
              Get started
            </a>
          </div>
        </div>
      </div>

      <Courosel />

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,192L26.7,176C53.3,160,107,128,160,144C213.3,160,267,224,320,261.3C373.3,299,427,309,480,282.7C533.3,256,587,192,640,165.3C693.3,139,747,149,800,170.7C853.3,192,907,224,960,208C1013.3,192,1067,128,1120,128C1173.3,128,1227,192,1280,197.3C1333.3,203,1387,149,1413,122.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-4">
            <div className="n-box2 p-3 font-bold p-5 " data-aos="fade-right">
              <h1>Yes you are right...</h1>
              <p>I am a javascript buff...</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-center">
          <div className="col-md-4" data-aos="fade-up">
            <div>
              <img src="./image2.svg" alt="" height="200" className="w-100" />
            </div>
          </div>
        </div>

        <div className="row pt-5 justify-content-end">
          <div className="col-md-4">
            <div className="n-box2  p-4 font-bold" data-aos="fade-left">
              <p>
                Javascript is one of the most top-rank programming languages
                because of its ubiquitous use on all platforms and mass adoption
                . Main use Cases : Web development
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 n-box2 py-5  div-stack">
        <h3 className="font-bold">My Developent Stack</h3>
        <img src="./developer.svg" alt="" height="200" width="200" />

        <div className="row">
          <div className="col-md-4">
            <div>
              <h3 className="font-bold">Front end</h3>
              <hr />
              <p>HTML/CSS</p>
              <p>Javascript</p>
              <p>React</p>
              <p>Nextjs</p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h3 className="font-bold">UI/Styling</h3>
              <hr />
              <p>Bootstrap</p>
              <p>Ant Design (Antd)</p>
              <p>Material UI</p>
              <p>Shadcn UI</p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h3 className="font-bold">Back end/DB</h3>
              <hr />
              <p>Nodejs</p>
              <p>Nest.js (Basics)</p>
              <p>SQL</p>
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-center">Who Am i</h1>
        <div
          className="whoIsNancy flex-with-center"
          data-aos="flip-left"
          style={{ backgroundImage: `url('./blobbg.svg')` }}
        >
          <div>
            <h4 className="font-bold text-start-h">Hello, </h4>
            <h4 className="font-bold text-start-h">Namastey</h4>
            <hr />
            <p>
              <pre className="text-start">
                {JSON.stringify(
                  {
                    Name: "Nancy Verma",
                    From: "India",
                    DOB: "28/05/2003",
                    Gender: "Female",
                  },
                  null,
                  2
                )}
              </pre>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
