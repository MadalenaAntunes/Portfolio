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
    <div style={styles.container}>
      <h1>My Skills</h1>
      <div style={styles.grid}>
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
