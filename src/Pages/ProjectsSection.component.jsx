import Project from "../components/project.component";
import classes from './styles/projectsSection.module.css'
const ProjectPage = () => {
  return (
    <div id={classes.container}>
        <Project/>
        <Project/>
    </div>
  );
};

export default ProjectPage;
