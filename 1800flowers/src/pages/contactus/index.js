import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x5knajj",
        "template_1caqvnp",
        form.current,
        "K7cd1CmIkydX1cHhF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message send");
        },
        (error) => {
          console.log(error.text);
          alert("somethings wrong");
        }
      );
    e.target.reset();
  };
  return (
    <div className={styles.contactcontainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
            className={styles.inpboxx}
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            required
            className={styles.inpboxx}
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            required
            className={styles.inpboxx}
          />
          <textarea cols="42" rows="4"></textarea>
          <button type="submit" className={styles.button73}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
