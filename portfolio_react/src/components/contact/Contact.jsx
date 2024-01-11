/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useRef } from "react";
import "./Contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_et3nt79",
        "template_58msn8c",
        form.current,
        "VO-hkjQdX9I-5FUsc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    // to reset the code
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="hideInPhone">Parthgupta1803@gmail.com</h5>
            <a
              href="mailto:parthgupta1803@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Message</h4>
            <h5>WhatsApp</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919662069931"
              target="_blank"
              rel="noreferrer"
            >
              Send A Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        
        </form>
      </div>

    </section>

  
  )
}

export default Contact;
