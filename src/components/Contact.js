import React from "react";

function Contact() {
  return (
    <div className="row">
      <div className="col-md-6">
        <img src="./contactimg.webp" alt="" height="400" width="400" />
      </div>
      <div className="col-md-6 n-box2 contact" data-aos="fade-left">
        <h1 className="font-bold my-3">Contact</h1>
        <hr />
        <div>
          <form
            action="https://formspree.io/f/xdoqwblw"
            method="POST"
            className="my-5 contact-form"
          >
            <input
              type="text"
              className="form-field n-box2"
              name="name"
              placeholder="Name"
            />
            <input
              type="email"
              className="form-field n-box2"
              name="_replyto"
              placeholder="Email"
            />
            <textarea
              className="form-field n-box2"
              rows={3}
              name="message"
              placeholder="Message"
            />
            <button type="submit" className="primary-button font-bold n-box2">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
