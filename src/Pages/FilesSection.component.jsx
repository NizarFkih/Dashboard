import { getFiles, getStats } from "../data/files";
import Stat from "../components/Stat.component";
import File from "../components/file.component";
import styles from "./styles/fileSection.module.css";
const FilesSection = () => {
  const files = getFiles();
  const statics = getStats();
  return (
    <div id={styles.filesContainer}>
      <div id={styles.uploadedFilesContainer}>
        {files.map((file) => (
          <File data={file} />
        ))}
      </div>
      <div id={styles.statsContainer}>
        <h2 id={styles.statsHeader}>Files Statistics</h2>
        <div>
          {statics.map((stat) => (
            <Stat data={stat} />
          ))}
        </div>
        <div id={styles.statFooter}>
          <label htmlFor="uploadBtn">
            {" "}
            <img src="/assets/upload.png" alt="" />
            Upload
          </label>
          <input
            type="file"
            name="fileUploader"
            id="uploadBtn"
            className={styles.uploadBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default FilesSection;
