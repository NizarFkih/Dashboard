import styles from "./styles/checkBox.module.css";

const CheckBox = ({data}) => {
  
  return (
    <div id={styles.checkBoxContainer} style={data!=null?data:{}}>
      <input type="checkbox" name="check" id="checkBox" />
      <label htmlFor="checkBox"></label>
    </div>
  );
};

export default CheckBox;
