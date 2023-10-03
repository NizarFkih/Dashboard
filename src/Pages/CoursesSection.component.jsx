import Course from "../components/Course.component";
import { getCourses } from "../data/courses";
import classes from "./styles/coursesSection.module.css";
const CoursesSection = () => {
  const courses = getCourses();
  return (
    <div id={classes.container}>
      {courses.map((course) => (
        <Course data={course} />
      ))}
    </div>
  );
};

export default CoursesSection;
