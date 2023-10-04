import styles from "./styles/tag.module.css";
const Tag = ({ data }) => {
  return (
    <span className={styles.tag} style={data.color != null ? {backgroundColor:data.color} : {}}>
      {data.content}
    </span>
  );
};

export default Tag;
