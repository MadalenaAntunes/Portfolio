import styles from "../styles/testimonials.module.css";
import Image from "next/image";
import TestCarroussel from "../components/TestCarroussel";

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Testimonials</h1>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <TestCarroussel />
    </div>
  );
};

export default Testimonials;
