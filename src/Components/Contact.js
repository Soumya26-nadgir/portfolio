import React, { useState } from "react";
/*import { useContext } from "react";*/
import contact from "./Images/contact.png";
import { Row, Col } from "antd";
import TextArea from "antd/lib/input/TextArea";
//import { v4 } from "uuid";*/
/*import {UserContext} from "../context/UserContext"
import { ADD_USER } from "../context/action.types";*/

function Contact() {
  const [values, setValues] = useState({
    fullName: "",
    contact: "",
    email: "",
    subject: "",
    message: "",
  });

  // console.log(value);/
  // const {dispatch} = useContext(UserContext);


  console.log()

  const [submitted, setsubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFullNameInputChange = (event) => {
    setValues({ ...values, fullName: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const handlePhoneNumberInputChange = (event) => {
    setValues({ ...values, contact: event.target.value });
  };
  const handleSubjectInputChange = (event) => {
    setValues({ ...values, subject: event.target.value });
  };
  const handleMessageInputChange = (event) => {
    setValues({ ...values, message: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.fullName &&
      values.email &&
      values.contact &&
      values.subject &&
      values.message
    ) {
      setValid(true);
    }
    setsubmitted(true);

    console.log(values.fullName)

    /*const user = {
      values,
      id: v4(),
    };*/

    // dispatch({
    //   type: ADD_USER,
    //   payload: user,
    // })
  };


   
  return (
    <Row>
      <Col className="main" span={12}>
        <img src={contact} alt="MicroTechnology" />
      </Col>
      <Col className="main" span={12}>
        <div class="form-container">
          <form class="register-form" onSubmit={handleSubmit}>
            <div>
              <h1>Contact Us</h1>
            </div>
            {submitted ? (
              <div class="success-message">
                Success! Thank you for contacting us
              </div>
            ) : null}

            <input
              onChange={handleFullNameInputChange}
              values={values.fullName}
              id="full-name"
              class="form-field"
              type="text"
              placeholder="Full Name"
              name="fullName"
            />
            {submitted && !values.fullName ? (
              <span id="full-name-error">Please enter full name</span>
            ) : null}

            <input
              onChange={handleEmailInputChange}
              value={values.email}
              id="email"
              class="form-field"
              type="text"
              placeholder="Email"
              name="email"
            />
            {submitted && !values.email ? (
              <span id="email-error">Please enter email</span>
            ) : null}

            <input
              onChange={handlePhoneNumberInputChange}
              value={values.contact}
              id="cotact"
              class="form-field"
              type="text"
              placeholder="Phone Number"
              name="contact"
            />
            {submitted && !values.contact ? (
              <span id="contact-error">Please enter phone number</span>
            ) : null}

            <input
              onChange={handleSubjectInputChange}
              value={values.subject}
              id="subject"
              class="form-field"
              type="text"
              placeholder="Subject"
              name="subject"
            />
            {submitted && !values.subject ? (
              <span id="subject-error">Please enter subject</span>
            ) : null}

            <TextArea
              row={"4"}
              onChange={handleMessageInputChange}
              value={values.message}
              id="message"
              class="form-field"
              type="text"
              placeholder="Message"
              name="message"
            />
            {submitted && !values.message ? (
              <span id="message-error">Please enter message</span>
            ) : null}

            <button class="form-field" type="submit">
              Submit
            </button>
          </form>
        </div>
      </Col>
    </Row>
  );
}

export default Contact;
