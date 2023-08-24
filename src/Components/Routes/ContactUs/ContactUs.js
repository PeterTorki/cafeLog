import React from "react";
import styles from "../../StylesRoutes/ContactUs.module.css";
import peterImg from '../../imgsComponent/peter.png'
import defaultImage from "../../imgsComponent/ContactUs.png";


import ContactCard from "./ContactCard";

function ContactUs() {
  let message = `Meet the team behind ChillCup – a group of passionate 
  computer science students dedicated to crafting exceptional experiences.
  With a blend of creativity and technical expertise, we're committed to bringing innovation to life.
  `;
  return (
    <section className={styles.sectionWhite}>
      <div className={styles.container}>
          <div className="col-md-12 text-center">
            <h2 className={styles.sectionTitle}>The Team behind ChillCup</h2>
            <p className={styles.sectionSubTitle}>{message}</p>
          </div>

          <div className={styles.cardsContainer}>
            <ContactCard
              name={"Nada Ayoub"}
              twitter={"Peter_Torki"}
              linkedin={"PeterTorki"}
              github={"PeterTorki"}
              gmail={"pjturki"}
              facebook={"torkijr"}
              img={defaultImage}
            />
            <ContactCard
              name={"Peter Joseph"}
              twitter={"Peter_Torki"}
              linkedin={"PeterTorki"}
              github={"PeterTorki"}
              gmail={"pjturki"}
              facebook={"torkijr"}
              img={peterImg}
            />
            <ContactCard
              name={"Moemn Adam"}
              twitter={"Peter_Torki"}
              linkedin={"PeterTorki"}
              github={"PeterTorki"}
              gmail={"pjturki"}
              facebook={"torkijr"}
              img={defaultImage}
            />
            <ContactCard
              name={"Alaa Hosny"}
              twitter={"AlaaHosby"}
              linkedin={"alaa-hosny-00a5a920b"}
              github={"Alaah4418 "}
              gmail={"alaahosnyesaa"}
              facebook={"profile.php?id=100009289257520&mibextid=ZbWKwL"}
              img={defaultImage}
            />
            <ContactCard
              name={"Mostafa Hazem"}
              twitter={"Peter_Torki"}
              linkedin={"PeterTorki"}
              github={"PeterTorki"}
              gmail={"pjturki"}
              facebook={"torkijr"}
              img={defaultImage}
            />
          </div>
          
      </div>
    </section>
  );
}

export default ContactUs;
