import styles from "../styles/fullStackDev.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FullStackDev = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <h3 className={styles.h3}>Hi I am</h3>
        <h2 className={styles.h2}>
          Madalena <b className={styles.h2_b}>Antunes</b>
        </h2>
        <h1 className={styles.h1_1}>Full Stack</h1>
        <h1 className={styles.h1_2}>Developer</h1>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        {/* <HireMeBtn/> */}
      </div>
      <div className={styles.image}>
        <div className={styles.ball}>
          <Image src="/ball.png" alt="temporary" width={320} height={320} />
        </div>
        <div className={styles.socials}>
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </div>
      </div>
    </div>
  );
};

export default FullStackDev;
