import classes from "./styles/course.module.css";
const Course = () => {
  return (
    <div id={classes.course}>
      <div>
        <img id={classes.courseCapture} src="/assets/course-01.jpg" alt="" />
         <img id={classes.instructor} src="/assets/team-03.png" alt=""  />
      </div>
      <div id={classes.courseTextContent}>
        <h4>Course Title</h4>
        <p id={classes.courseDescription}>
          Master The Art Of Web Designing And Mocking, Prototyping And Creating
          Web Design Architecture
        </p>
      </div>
      <div id={classes.courseInfo}>
        <span>
          <img
            id={classes.studentIcon}
            alt="User Icon"
            src="/assets/user.png"
          />
          950
        </span>
        <span>$165</span>
      </div>
    </div>
  );
};

export default Course;
