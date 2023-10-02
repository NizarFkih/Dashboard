import Stat from "../components/Stat.component";
import File from "../components/file.component";
import styles from "./styles/fileSection.module.css";
const FilesSection = () => {
  return (
    <div id={styles.filesContainer}>
      <div id={styles.uploadedFilesContainer}>
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
        <File />
      </div>
      <div id={styles.statsContainer}>
        <h2 id={styles.statsHeader}>Files Statistics</h2>
     <Stat/>
     <Stat/>
     <Stat/>
     <input type="file"  name="fileUploader" id={styles.fileUploader} />
      </div>
    </div>
  );
};

export default FilesSection;
