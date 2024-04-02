import React from "react";

function Education() {
  return (
    <div>
      <h3 className="font-bold">My Education</h3>
      <img src="./developer.svg" alt="" height={200} width={200} />

      <div className="row">
        <div className="col-md-4">
          <div>
            <h3 className="font-bold">2020-2023</h3>
            <hr />
            <p>Bachelor of Computer application</p>
            <p>University Institute of Engineering and Technology (CSJM) </p>
            <p>Kanpur University</p>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h3 className="font-bold">2020</h3>
            <hr />
            <p>Intermediate</p>
            <p>Shatrughan singh GIC </p>
            <p>kalyanpur kanpur</p>
          </div>
        </div>
        <div className="col-md-4">
          <div>
            <h3 className="font-bold">2018</h3>
            <hr />
            <p>High school</p>
            <p>Shatrughan singh GIC </p>
            <p>kalyanpur kanpur</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
