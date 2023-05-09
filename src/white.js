import "./App.css";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate the form before submitting
    let isFormValid = true;

    // validate name
    if (!name.trim()) {
      // className = "error-message"
      setNameError("Name is required");
      isFormValid = false;
    }

    // validate email
    if (!email.trim()) {
      setEmailError("Email is required");
      isFormValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isFormValid = false;
    }

    // validate subject
    if (!subject.trim()) {
      setSubjectError("Subject is required");
      isFormValid = false;
    }

    // validate message
    if (!message.trim()) {
      setMessageError("Message is required");
      isFormValid = false;
    }

    // submit the form if it's valid
    if (isFormValid) {
      setIsSubmitted(true);

      // code to submit the form goes here
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-5">
          <h2 className="heading-section">Contact Form</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="wrapper">
            <div className="row no-gutters">
              <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                <div className="contact-wrap w-100 p-md-5 p-4">
                  {!isSubmitted ? (
                    <>
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlfor="name">
                                Full Name
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  nameError && "is-invalid"
                                }`}
                                name="name"
                                id="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => {
                                  setName(e.target.value);
                                  setNameError("");
                                }}
                              />
                              {nameError && (
                                <div className="invalid-feedback">
                                  {nameError}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="label" htmlfor="email">
                                Email Address
                              </label>
                              <input
                                type="email"
                                className={`form-control ${
                                  emailError && "is-invalid"
                                }`}
                                name="email"
                                id="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                  setEmailError("");
                                }}
                              />
                              {emailError && (
                                <div className="invalid-feedback">
                                  {emailError}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlfor="subject">
                                Subject
                              </label>
                              <input
                                type="text"
                                className={`form-control ${
                                  subjectError && "is-invalid"
                                }`}
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => {
                                  setSubject(e.target.value);
                                  setSubjectError("");
                                }}
                              />
                              {subjectError && (
                                <div className="invalid-feedback">
                                  {subjectError}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlfor="#">
                                Message
                              </label>
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="4"
                                placeholder="Message"
                                value={message} // add this line
                                onChange={(e) => {
                                  setMessage(e.target.value);
                                  setMessageError("");
                                }} // add this line
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </>
                  ) : (
                    <>
                      <h3 className="mb-4">Thank you for your message!</h3>
                      <p>We will get back to you as soon as possible.</p>
                    </>
                  )}
                </div>
              </div>
              <div className="col-lg-4 col-md-5 d-flex align-items-stretch ">
                <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                  <h3>Let's get in touch</h3>
                  <div className="white-box ">
                    <p className="mb-4 ">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <p className="mb-4">I saw something I like.</p>
                    <p className="mb-4">
                      I’m not quite sure about what I want. Schedule Call
                    </p>
                    <p className="mb-4">
                      This is your free 30-minute consultation
                      pass. Enter email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
