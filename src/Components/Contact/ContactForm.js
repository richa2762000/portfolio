import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yyew6it",
        "template_rzkszbc",
        form.current,
        "QaXyIehfVnP9nLZGN"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("email sent1");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          name="your_name"
          placeholder="Your Name"
          className="input-field w-full rounded-lg p-2 text-black"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="your_email"
          placeholder="Your Email"
          className="input-field w-full rounded-lg p-2 text-black"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="your_subject"
          placeholder="Subject"
          className="input-field w-full rounded-lg p-2 text-black"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="your_message"
          rows="3"
          placeholder="Your Message"
          className="input-field w-full rounded-lg p-2 text-black"
        ></textarea>
      </div>
      <div>
        <button className="w-full p-2 btn-submit bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
