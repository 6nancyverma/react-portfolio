import React from "react";
import { FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#001220"
            fill-opacity="1"
            d="M0,160L48,138.7C96,117,192,75,288,64C384,53,480,75,576,106.7C672,139,768,181,864,165.3C960,149,1056,75,1152,42.7C1248,11,1344,21,1392,26.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="row footer-content justify-content-center">
        <div className="col-md-6">
          <div className="div">
            <p>Designed and Developed BY</p>
            <hr />
            <div className="display-flex justify-content-between  footer-icons ">
              <a
                href="https://www.linkedin.com/in/nancy-verma-b70209212?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfYA5YLRHSlKNuXGEszzKLQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/6nancyverma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a href="mailto:rishi3dec@gmail.com">
                <FaMailBulk />
              </a>
              <hr />
              <p>Nancy verma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
