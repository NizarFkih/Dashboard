import classes from "./styles/project.module.css";
const Project = (props) => {
  return (
    /*  <div>
      <p>{props.date}</p>
      <h3 className="text-center">{props.title}</h3>
      <p>{props.content}</p>
      {props.team.map((member) => (
        <img alt="" src="" />
      ))}
      <hr />
      {props.tools.map((tool) => (
        <span>tool</span>
      ))}
      <hr />
      <div></div> <span>{props.price}</span>
    </div> */
    <div id={classes.project}>
      <date className={classes.createdAt}>25/548/55</date>
      <h4 className="project-title">Project title</h4>
      <p id={classes.projectTextContent}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum facere
        veritatis, neque eius consequatur repellat! Nesciunt
      </p>
      <div>
        <img alt="" src="/assets/avatar.png" className={classes.member} />
        <img alt="" src="/assets/avatar.png" className={classes.member} />
        <img alt="" src="/assets/avatar.png" className={classes.member} />
        <img alt="" src="/assets/avatar.png" className={classes.member} />
      </div>
     
     <div id={classes.tags}>
       <span className={classes.tag}>Programming</span>
       <span className={classes.tag}>Design</span>
       <span className={classes.tag}>Hosting</span>
       <span className={classes.tag}>Marketing</span>
     </div>
    
     <div id={classes.projectFooter}>
       <span id={classes.progressBar}><span id={classes.progressLevel}></span></span> <span>1200$</span>
     </div>
    </div>
  );
};

export default Project;
