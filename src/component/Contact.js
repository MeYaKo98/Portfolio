import React, { useRef } from "react";
import { TfiEmail } from "react-icons/tfi";
import { ImWhatsapp } from "react-icons/im";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();

    // Validation
    if (!name) {
      alert("Please enter your name");
      return;
    }

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!subject) {
      alert("Please enter a subject");
      return;
    }

    if (!message) {
      alert("Please enter a message");
      return;
    }

    // Submit the form to FormSubmit
    form.current.submit();
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
                href="mailto: contact@meyako.tn"
              >
                <TfiEmail className="email-logo" />
                <div className="email-info">
                  contact@meyako.tn
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
            <form 
              className="form" 
              ref={form}
              action="https://formsubmit.co/contact@meyako.tn"
              method="POST"
              onSubmit={sendEmail}
            >
              <input type="hidden" name="_next" value="https://meyako.tn" />
              <label>Name</label>
              <input
                type="text"
                name="name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                required
              />
              <label>Message</label>
              <textarea
                className="textarea"
                name="message"
                required
              />
              <input
                className="button"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
