import CheckBox from "./CheckBox.component";
import styles from "./styles/infoSnippet.module.css";
const InfoSnippet = ({ data }) => {
  return (
    <div id={styles.infoSnippetContainer}>
      <h4>{data.title}</h4>
      <div id={styles.infoSnippetContent}>
        {data.info.map((snippet) => (
          <p>
            {snippet.title}:<span> {snippet.value}</span>
          </p>
        ))}
       
      </div>
      
          <CheckBox data={{ height: "20px", width: "78px",marginTop:"10px" }} />
        
    </div>
  );
};

export default InfoSnippet;
