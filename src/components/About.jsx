import styles from "../styles/about.module.css";
import Image from "next/image";
import ProgressList from "../components/ProgressList";

const About = () => {
  const data = [
    { area: "Theatre", years: 9 },
    { area: "Dance", years: 12 },
    { area: "Jungian Psychology", years: 2 },
    { area: "Digital Marketing", years: 3 },
    { area: "test", years: 15 },
  ];

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
        <ProgressList data={data} />
      </div>
    </div>
  );
};

export default About;
