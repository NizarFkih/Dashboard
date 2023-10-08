import styles from "./styles/progressBar.module.css";
const ProgressBar = ({ data }) => {
  return (
    <span
      id={styles.progressBar}
      style={data.customStyle.bar ? data.customStyle.bar : {}}
    >
      <span
        id={styles.progressLevel}
        style={
          data.customStyle.bar
            ? data.customStyle.bar
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
      <span
        style={{ left: `${data.progress * 10 - 10}%` }}
        id={styles.progressValue}
      >
        {data.progress * 10}%
      </span>
    </span>
  );
};

export default ProgressBar;
