import styles from "./styles/file.module.css";
const File = () => {
  return (
    <div id={styles.fileContainer}>
      <div id={styles.fileBody}>
        <img
          src="/assets/download.png"
          alt="download-icon"
          id={styles.downloadIcon}
        />
        <div style={{textAlign:"center" }}>
          <img
            src="/assets/pdf.svg"
            alt="file-extension"
            id={styles.filePicture}
          />
          <p id={styles.fileName}>fileName.ext</p>
        </div>
        <p>uploaded By</p>
      </div>
      <div id={styles.fileFooter}>
        <date>02/10/2023</date>
        <span>5.5MB</span>
      </div>
    </div>
  );
};

export default File;
