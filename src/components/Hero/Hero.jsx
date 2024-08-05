import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I`m Ayse</h1>
        <p className={styles.description}> 
          I` a Frontend-heavy Full Stack Developer with 2 years of experience using React and
          NodeJS. Reach out if you`d like to learn more!
        </p>
        <a href="mailto:ayse0yalcinkaya@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero_circle2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};