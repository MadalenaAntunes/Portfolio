import styles from "../styles/navBar.module.css";
import CVButton from "./CVButton";

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navBarList}>
        <li className={styles.liNB}>Home</li>
        <li className={styles.liNB}>About me</li>
        <li className={styles.liNB}>Skills</li>
        <li className={styles.liNB}>Projects</li>
        <li className={styles.liNB}>Testimonials</li>
        <li className={styles.liNB}>Contact</li>
        <li className={styles.liNBtn}>
          <CVButton />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
