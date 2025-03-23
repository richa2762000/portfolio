import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const [formGroup, setFormGroup] = useState({
    fullName: "",
    email: "",
    subject: "",
    msg: "",
  });

  const { fullName, email, subject, msg } = formGroup;

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setFormGroup({
      ...formGroup,
      [name]: value,
    });
  };

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
          setFormGroup({
            fullName: "",
            email: "",
            subject: "",
            msg: "",
          });
          alert("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    // setFormGroup("");
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          name="fullName"
          placeholder="Your Name"
          value={fullName}
          onChange={handleSubmit}
          className="input-field w-full rounded-lg p-2 text-black"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={handleSubmit}
          className="input-field w-full rounded-lg p-2 text-black"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
          onChange={handleSubmit}
          className="input-field w-full rounded-lg p-2 text-black"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="msg"
          rows="3"
          placeholder="Your Message"
          value={msg}
          onChange={handleSubmit}
          className="input-field w-full rounded-lg p-2 text-black"
          required
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
