import Project from "../components/project.component";
import { getProjects } from "../data/projects";
import classes from "./styles/projectsSection.module.css";
const ProjectPage = () => {
  const projects = getProjects();
  return (
    <div id={classes.container}>
      {projects.map((project) => (
        <Project data={project} />
      ))}
    </div>
  );
};

export default ProjectPage;
