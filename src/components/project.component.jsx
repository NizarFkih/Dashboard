import Tag from "./common/Tag.component";
import classes from "./styles/project.module.css";
const Project = ({ data }) => {
  return (
    <div id={classes.project}>
      <date className={classes.createdAt}>{data.createdAt}</date>
      <h4 className="project-title">{data.name}</h4>
      <p id={classes.projectTextContent}>{data.description}</p>
      <div>
        {data.team.map((member) => (
          <img alt="" src={`/assets/${member}`} className={classes.member} />
        ))}
      </div>

      <div id={classes.tags}>
        {data.tags.map((tag) => (
          <Tag data={{content:tag}} />
        ))}
      </div>

      <div id={classes.projectFooter}>
        <span id={classes.progressBar}>
          <span
            id={classes.progressLevel}
            style={{
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
            }}
          ></span>
        </span>
        <span>$ {data.budget}</span>
      </div>
    </div>
  );
};

export default Project;
