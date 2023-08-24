import React from "react";
import styles from "../../StylesRoutes/ContactUs.module.css";
const ContactCard = ({
  name,
  twitter,
  facebook,
  github,
  linkedin,
  gmail,
  img,
}) => {
  return (
    <div>
      <div className={styles.teamItem}>
        <img src={img} className={styles.teamImg} />
        <h3>{name}</h3>
        <div className={styles.teamInfo}>
          <p>Computer science student</p>
          <p></p>
          <ul className={styles.teamIcon}>
            <li>
              <a
                target="_blank"
                href={`https://twitter.com/${twitter}`}
                className={styles.twitter}
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={`mailto:${gmail}@gmail.com`}
                className={styles.gmail}
                rel="noreferrer"
              >
                <i className="fab fa-google" style={{ width: "50px" }}></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={`https://www.facebook.com/${facebook}/`}
                className={styles.facebook} rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href={`https://www.linkedin.com/in/${linkedin}/`}
                className={styles.linkedin}
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href={`https://github.com/${github}`}
                className={styles.github}
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
