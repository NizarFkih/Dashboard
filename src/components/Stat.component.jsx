import styles from "./styles/stat.module.css";
const Stat = ({ data }) => {
  return (
    <div id={styles.statContainer}>
      <img src={`/assets/${data.fileType}-file.png`} alt="docx-icon" />
      <div id={styles.statInfo}>
        <p style={{ color: "black",textTransform:"capitalize" }}>{data.fileType} Files</p>
        <p> {data.fileNumber}</p>
      </div>
      <span>{data.size}</span>
    </div>
  );
};

export default Stat;
