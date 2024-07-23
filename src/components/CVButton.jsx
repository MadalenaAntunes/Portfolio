"use client";
import styles from "../styles/cvButton.module.css";
import React from "react";

const CVButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MadalenaAntunesCV.pdf";
    link.download = "MadalenaAntunes_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className={styles.cvBtn}>
      Download CV
    </button>
  );
};

export default CVButton;
