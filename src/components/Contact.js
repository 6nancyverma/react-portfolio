import React, { useState } from "react";

function Contact() {
  // Define state for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/xdoqwblw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setSubmissionStatus("Form submitted successfully!");
        } else {
          setSubmissionStatus("Form submission failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmissionStatus("Error submitting form. Please try again.");
      });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <img src="./contactimg.webp" alt="" height="400" width="400" />
      </div>
      <div className="col-md-6 n-box2 contact" data-aos="fade-left">
        <h1 className="font-bold my-3">Contact</h1>
        <hr />
        <div>
          <form onSubmit={handleSubmit} className="my-5 contact-form">
            <input
              type="text"
              className="form-field n-box2"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              className="form-field n-box2"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className="form-field n-box2"
              rows={3}
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="primary-button font-bold n-box2">
              SUBMIT
            </button>
          </form>

          {submissionStatus && (
            <p className="submission-status-message my-3">{submissionStatus}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
