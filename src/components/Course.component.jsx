import classes from "./styles/course.module.css";
const Course = ({ data }) => {
  return (
    <div id={classes.course}>
      <div>
        <img
          id={classes.courseCapture}
          src={`/assets/${data.cover}`}
          alt="course-cover"
        />
        <img
          id={classes.instructor}
          src={`/assets/${data.instructor}`}
          alt="instructor"
        />
      </div>
      <div id={classes.courseTextContent}>
        <h4>{data.name}</h4>
        <p id={classes.courseDescription}>{data.description}</p>
      </div>
      <div id={classes.courseInfo}>
        <span>
          <img
            id={classes.studentIcon}
            alt="User Icon"
            src="/assets/user.png"
          />
          {data.students}
        </span>
        <span>{data.price===0?"Free":`$ ${data.price}`}</span>
      </div>
    </div>
  );
};

export default Course;
