import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TfiEmail } from "react-icons/tfi";
import { ImWhatsapp } from "react-icons/im";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState({
    type: "", // "success" or "error"
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear message status when user starts typing
    if (messageStatus.type) {
      setMessageStatus({ type: "", text: "" });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.user_name.trim()) {
      setMessageStatus({
        type: "error",
        text: "Please enter your name",
      });
      return;
    }

    if (!formData.user_email.trim()) {
      setMessageStatus({
        type: "error",
        text: "Please enter your email",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      setMessageStatus({
        type: "error",
        text: "Please enter a valid email address",
      });
      return;
    }

    if (!formData.message.trim()) {
      setMessageStatus({
        type: "error",
        text: "Please enter a message",
      });
      return;
    }

    setIsLoading(true);
    setMessageStatus({ type: "", text: "" });

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMessageStatus({
            type: "success",
            text: "Message sent successfully! I'll get back to you soon.",
          });
          // Reset form
          setFormData({ user_name: "", user_email: "", message: "" });
          setIsLoading(false);
          console.log(result.text);
        },
        (error) => {
          setMessageStatus({
            type: "error",
            text: "Failed to send message. Please try again later.",
          });
          setIsLoading(false);
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
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <label>Message</label>
              <textarea
                className="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              {messageStatus.type && (
                <div
                  className={`message-status ${messageStatus.type}`}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    marginBottom: "10px",
                    color: messageStatus.type === "success" ? "#4caf50" : "#f44336",
                    backgroundColor:
                      messageStatus.type === "success"
                        ? "rgba(76, 175, 80, 0.1)"
                        : "rgba(244, 67, 54, 0.1)",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {messageStatus.text}
                </div>
              )}
              <input
                className="button"
                type="submit"
                value={isLoading ? "Sending..." : "Send"}
                disabled={isLoading}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
