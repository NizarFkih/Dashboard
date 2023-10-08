import styles from "./styles/progressBar.module.css";
const ProgressBar = ({ data, displayProgressValue = false }) => {
  return (
    <span
      id={styles.progressBar}
      style={data.customBarStyle ? data.customBarStyle : {}}
    >
      <span
        id={styles.progressLevel}
        style={
          data.customLevelStyle
            ? data.customLevelStyle
            : {
                width: `${data.progress * 10}%`,
                backgroundColor: `${
                  data.progress <= 2.5
                    ? "#f44336"
                    : data.progress <= 5
                    ? "#ffe800"
                    : data.progress < 7
                    ? "#22c55e"
                    : "#0075ff"
                }`,
              }
        }
      ></span>
      {displayProgressValue == true ? (
        <span
          style={{ left: `${data.progress * 10 - 10}%` }}
          id={styles.progressValue}
        >
          {data.progress * 10}%
        </span>
      ) : (
        ""
      )}
    </span>
  );
};

export default ProgressBar;
