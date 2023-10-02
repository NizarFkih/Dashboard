import styles from "./styles/stat.module.css";
const Stat = () => {
  return (
    <div id={styles.statContainer}>
      <img src="/assets/docx-file.png" alt="docx-icon" />
      <div id={styles.statInfo}>
        <p style={{ color: "black" }}>Doc Files</p>
        <p> 130</p>
      </div>
      <span>6.5GB</span>
    </div>
  );
};

export default Stat;
