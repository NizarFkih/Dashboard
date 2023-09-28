import Course from "../components/Course.component";
import classes from "./styles/coursesSection.module.css";
const CoursesSection = () => {
  return (
    <div id={classes.container}>
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
};

export default CoursesSection;
