import styles from "./styles/tag.module.css";
const Tag = ({ data }) => {
  return (
    <span className={styles.tag} style={data.style != null ? data.style:{}}>
      {data.content}
    </span>
  );
};

export default Tag;
