import styles from "./styles/file.module.css";
const File = ({ data }) => {
  return (
    <div id={styles.fileContainer}>
      <div id={styles.fileBody}>
        <img
          src="/assets/download.png"
          alt="download-icon"
          id={styles.downloadIcon}
        />
        <div style={{ textAlign: "center" }}>
          <img
            src={`/assets/${data.fileType}.svg`}
            alt="file-extension"
            id={styles.filePicture}
          />
          <p id={styles.fileName}>{data.name}</p>
        </div>
        <p>{data.uploader}</p>
      </div>
      <div id={styles.fileFooter}>
        <date>{data.uploadedAt}</date>
        <span>{data.fileSize}</span>
      </div>
    </div>
  );
};

export default File;
