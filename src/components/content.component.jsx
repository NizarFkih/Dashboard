import classes from "./styles/content.module.css";
import Header from "./Header.component";
import ProjectPage from "../Pages/ProjectsSection.component";
import CoursesSection from "../Pages/CoursesSection.component";
const Content = () => {
  let Section = window.location.pathname.split("");
  Section.shift();
  Section = Section.join("");
  return (
    <div id={classes.container}>
      <Header />
      <h1 id={classes.title}>{Section}</h1>
      {Section === "dashboard" ? <p>Hello in Main Dashboard</p> :Section==="projects"? <ProjectPage />:Section==="courses"?<CoursesSection/>:<p>Soon ..</p>}
    </div>
  );
};

export default Content;
