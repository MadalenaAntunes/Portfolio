import styles from "../styles/fullStackDev.module.css";
import Image from "next/image";

const FullStackDev = () => {
  return (
    <div>
      <div>
        <h3>Hi I am</h3>
        <h2>Madalena Antunes</h2>
        <h1>Full Stack</h1>
        <h1>Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        {/* <HireMeBtn/> */}
      </div>
      <div>
        <div>
          <Image src="/ball.png" alt="temporary" width={320} height={320} />
        </div>
        <div>
          <i>insta</i>
          <i>linkedin</i>
          <i>github</i>
        </div>
      </div>
    </div>
  );
};

export default FullStackDev;
