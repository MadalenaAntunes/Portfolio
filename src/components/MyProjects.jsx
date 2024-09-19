import Projects from "./Project";
import styles from "../styles/myProjects.module.css";
import Image from "next/image";

const MyProjects = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>My Projects</h1>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </p>
      <Projects />
    </div>
  );
};

export default MyProjects;
