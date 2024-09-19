import styles from "../styles/letsWork.module.css";
import Image from "next/image";

const LetsWork = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Let's Work Together</h1>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <input type="email" />
      <button>Contact Me</button>
    </div>
  );
};

export default LetsWork;
