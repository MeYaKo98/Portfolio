import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TfiEmail } from "react-icons/tfi";
import { ImWhatsapp } from "react-icons/im";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t2iv3ma",
        "template_z199vg5",
        form.current,
        "" //"1DqK4NCJoxMqleYcx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-container" id="Contact">
      <div className="contact">
        <div className="title">Contact</div>
        <div className="horizantal-container">
          <div className="left-container">
            <div className="contact-info">
              <a
                className="email-info-container"
                href="mailto: mohamedyassine.koubaa@insat.u-carthage.tn"
              >
                <TfiEmail className="email-logo" />
                <div className="email-info">
                  mohamedyassine.koubaa<br></br>@insat.u-carthage.tn
                </div>
              </a>
              <a
                className="phone-info-container"
                href="https://wa.me/21658137285"
              >
                <ImWhatsapp className="phone-logo" />
                <div className="phone-info">+216 58 137 285</div>
              </a>
            </div>
          </div>
          <div className="right-container">
            <form className="form" ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea className="textarea" name="message" />
              <input className="button" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
