import styles from "../styles/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <div className={styles.ball}>
          <Image src="/ball.png" alt="temporary" width={320} height={320} />
        </div>
      </div>
      <div className={styles.text}>
        <h1 className={styles.h1}>About me</h1>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
      </div>
      <div>{/* <Stats/> */}</div>
    </div>
  );
};

export default About;
