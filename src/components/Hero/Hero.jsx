import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Houssein</h1>
        <p className={styles.description}>
          I'm a recent graduate in Computer Programming 
          with a strong foundation in full-stack development.
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:houssein9@outlook.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/houssein.png")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
