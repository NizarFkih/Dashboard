import styles from "./styles/pictureTag.module.css";
const PictureTag = ({ data }) => {
  return (
    <div
      id={styles.tagContainer}
      style={data.customStyle ? data.customStyle : {}}
    >
      <img src={data.path} alt={data.alt ? data.alt : "avatar"} />
    </div>
  );
};

export default PictureTag;
