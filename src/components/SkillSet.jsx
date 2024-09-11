"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/skills.module.css";

const SkillSet = ({ title, description, details, icon }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div onClick={handleClick} style={styles.card}>
        <div>
          <Image
            src={icon}
            alt={`${title} icon`}
            style={styles.icon}
            width={10}
            height={10}
          />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>{title}</h2>
            <p>{details}</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SkillSet;
