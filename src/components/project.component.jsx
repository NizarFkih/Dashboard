import PictureTag from "./common/PictureTag.comoponent";
import ProgressBar from "./common/ProgressBar.component";
import Tag from "./common/Tag.component";
import classes from "./styles/project.module.css";
const Project = ({ data }) => {
  return (
    <div id={classes.project}>
      <date className={classes.createdAt}>{data.createdAt}</date>
      <h4 className="project-title">{data.name}</h4>
      <p id={classes.projectTextContent}>{data.description}</p>
      <div id={classes.team}>
        {data.team.map((member) => (
          <PictureTag data={{ path: `/assets/${member}` }} />
        ))}
      </div>

      <div id={classes.tags}>
        {data.tags.map((tag) => (
          <Tag data={{ content: tag }} />
        ))}
      </div>

      <div id={classes.projectFooter}>
      <ProgressBar data={{ progress: data.progress }} />
        <span>$ {data.budget}</span>
      </div>
    </div>
  );
};

export default Project;
