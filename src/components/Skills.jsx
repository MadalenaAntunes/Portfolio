"use client";
import styles from "../styles/skills.module.css";
import Image from "next/image";
import SkillSet from "../components/SkillSet";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/skills");
      const data = await response.json();
      setSkills(data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Skills</h1>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <SkillSet
            key={skill._id}
            title={skill.title}
            description={skill.description}
            details={skill.details}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
