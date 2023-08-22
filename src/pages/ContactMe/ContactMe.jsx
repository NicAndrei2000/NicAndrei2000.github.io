import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactMe.module.css";
import ValidationContactMe from "../../Validation/ValidationContactMe";

function ContactMe() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setErrors(ValidationContactMe(enteredName, enteredEmail, enteredMessage));
    let errorsValidation = ValidationContactMe(
      enteredName,
      enteredEmail,
      enteredMessage
    );
    if (Object.keys(errorsValidation).length === 0) {
      setEnteredName("");
      setEnteredEmail("");
      setEnteredMessage("");

      emailjs
        .sendForm(
          "service_q1ohfgp",
          "template_lxpkrd8",
          form.current,
          "Ngh2eS_EdnKu9OXV2"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message send!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className={styles.layout} id="contact">
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Me</h1>
      </div>
      <div className={styles.formStyle}>
        <form className={styles.formS} ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          {errors.enteredName && (
            <p style={{ color: "red" }}>{errors.enteredName}</p>
          )}
          <label>Email</label>
          <input
            type="text"
            name="user_email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          {errors.enteredEmail && (
            <p style={{ color: "red" }}>{errors.enteredEmail}</p>
          )}
          <label>Message</label>
          <textarea
            name="message"
            value={enteredMessage}
            onChange={messageChangeHandler}
          />
          {errors.enteredMessage && (
            <p style={{ color: "red" }}>{errors.enteredMessage}</p>
          )}
          <button type="submit" value="Send">
            Send
          </button>
        </form>
      </div>
      <div className={styles.info}>
        <p>Phone number: 0749965109</p>
        <p>Gmail: andrei.niculita14@gmail.com</p>
      </div>
    </div>
  );
}

export default ContactMe;
