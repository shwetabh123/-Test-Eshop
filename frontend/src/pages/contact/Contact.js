import { useRef } from "react";
import Card from "../../components/card/Card";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter,FaLinkedinIn, FaFacebook, FaYoutube } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_qzczwk9",
        form.current,
        "bY7eeIbWhWxUY0sCl"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h1>Contact Us</h1>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your active email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h2>Our Contact Information</h2>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+91 7019048203</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>Support@eshop.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Bangalore, Karnataka</p>
                </span>
                <span>
                  <FaLinkedinIn/>
                  <a href="https://www.linkedin.com/in/shwetabh-srivastava-529a3826/">shwetabh-srivastava-529a3826</a>
                </span>
                <span>
                <FaTwitter/>
                  <p>shwetabh-srivastava-529a3826</p>
                </span>
                <span>
                <FaFacebook/>
                  <a href="https://www.facebook.com/shwetabh.srivastava.33">shwetabh.srivastava.33</a>
                </span>
                <span>
                <FaYoutube/>
                <a href="https://www.youtube.com/channel/UCeXtiol8NGynwqetInQtaoA">shwetabh srivastava</a>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;